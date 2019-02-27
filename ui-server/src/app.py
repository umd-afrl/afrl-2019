import asyncio
import os
from pathlib import Path

from aiohttp import web

import AvmuCapture

WEB_ROOT = Path(__file__).parents[2] / 'ui/dist/controlpanel/'
SERVER = web.Application()


# Serve index.html when '/' is requested
async def root_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))

async def camera_handler(request):
    return web.Response(body=, content_type='image/png')

async def on_shutdown(app):


def main():
    # Kick off the web server
    SERVER.on_shutdown.append(on_shutdown)
    SERVER.router.add_get('/', root_handler)
    SERVER.router.add_get('/snakecam', camera_handler)
    SERVER.router.add_static(prefix='/', path=WEB_ROOT)

    async def start():
        global runner, site, avmu
        runner = web.AppRunner(SERVER)
        await runner.setup()
        site = web.TCPSite(runner, '127.0.0.1', 8080)
        await site.start()
        print('Site available at http://' + site.__getattribute__('_host') + ':' + str(site.__getattribute__('_port')))
        try:
            avmu = AvmuCapture.AvmuCapture()
            await avmu.initialize()
        except RuntimeError:
            print('WARNING: Failed to initialize AVMU.')

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
