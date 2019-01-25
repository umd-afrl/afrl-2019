# Protocol Buffers

## What are these?

The files contained in this directory specify [Protocol Buffers](https://developers.google.com/protocol-buffers/) used in ROV to surface communication. Protocol buffers have their own syntax and are specified in a `.proto` file. To actually use them they are then compiled to a library for your favorite language.

## How do I make changes?

Once you've made your changes to `.proto` specification it must be compiled to a target language.

### TypeScript (client-ui)

First generate the class that implements the functionality:
    
    cd ui
    node node_modules/protobufjs/cli/bin/pbjs -t static-module -o src/app/telemetry.js ../shared/protos/telemetry.proto

Then generate the types:
    
    node node_modules/protobufjs/cli/bin/pbts -o src/app/telemetry.d.ts src/app/telemetry.js

### Python (ui-server)