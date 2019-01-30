import asyncio
import os
from pathlib import Path

import commands_pb2
from aiohttp import web, http_websocket

WEB_ROOT = Path(__file__).parents[2] / 'ui/dist/controlpanel/'
SERVER = web.Application()


# Serve index.html when '/' is requested
async def root_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


# Serves 404s /index.html as required by Angular. Redirecting would change the url
# in the address bar (not desired behavior) refer to
# https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
# DO NOT USE, currently breaks everything
async def deeplink_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


async def websocket_handler(request):
    print('Websocket connection starting')
    socket = web.WebSocketResponse()
    await socket.prepare(request)
    print('Websocket connection ready')

    proto = commands_pb2.Command()
    proto.message_time.GetCurrentTime()
    proto.alert.alert_text = 'Test Alert message sent from server!'
    proto.alert.alert_level = proto.alert.SUCCESS
    await socket.send_bytes(proto.SerializeToString())
    print('websocket alert message sent')

    await asyncio.sleep(5)

    proto = commands_pb2.Command()
    proto.message_time.GetCurrentTime()
    proto.toggle.name = 'Lights'
    proto.toggle.value = True
    await socket.send_bytes(proto.SerializeToString())
    print('websocket toggle message sent')

    # ToDo knows to run target method given by button
    async for msg in socket:
        print(msg.type)
        if msg.type == http_websocket.WSMsgType.TEXT:
            print('websocket text message received: ' + msg.data)
            if msg.data == 'close':
                await socket.close()
            else:
                proto = commands_pb2.Command()
                decoded = proto.ParseFromString(msg.data)
                print('websocket commandMessage received: ' + decoded)
        elif msg.type == http_websocket.WSMsgType.ERROR:
            print('ws connection closed with exception %s' %
                  socket.exception())

    print('websocket connection closed')

    return socket


# ToDo add test target method

async def on_shutdown(app):
    # close peer connections
    for socket in set(app['websockets']):
        await socket.close()


# if __name__ == '__main__':
#     SERVER = web.Application()
#     SERVER.on_shutdown.append(on_shutdown)
#     SERVER.router.add_get('/', root_handler)
#     SERVER.router.add_get('/ws', websocket_handler)
#     SERVER.router.add_static(prefix='/', path=WEB_ROOT)
#     web.run_app(SERVER, host='10.8.0.2', port=8080)

def main():
    # Kick off the web/ws server
    SERVER.on_shutdown.append(on_shutdown)
    SERVER.router.add_get('/', root_handler)
    SERVER.router.add_get('/ws', websocket_handler)
    SERVER.router.add_static(prefix='/', path=WEB_ROOT)

    async def start():
        global runner, site
        runner = web.AppRunner(SERVER)
        await runner.setup()
        site = web.TCPSite(runner, '127.0.0.1', 8080)
        await site.start()
        # site2 = web.TCPSite(runner, '169.254.202.121', 8080)
        # await site2.start()

    async def end():
        await SERVER.shutdown()

    asyncio.get_event_loop().run_until_complete(start())

    # Main program "loop"
    try:
        asyncio.get_event_loop().run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        # .. and kill the web/ws server
        asyncio.get_event_loop().run_until_complete(end())

    # Stop the main event loop
    asyncio.get_event_loop().close()


if __name__ == '__main__':
    main()
