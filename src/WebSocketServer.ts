'use strict';

import * as vscode from 'vscode';
import * as WebSocket from 'ws';

export enum ImageType {
    png = 'png',
}

export class WebSocketServer {

    private socket: WebSocket.Server;
    private channel: vscode.OutputChannel;
    private websocket: WebSocket;

    public url: string = "";
    public onListening: () => void = () => {};
    public onConnection: () => void = () => {};

    constructor(outputChannel: vscode.OutputChannel) {
        this.channel = outputChannel;
        this.socket = new WebSocket.Server({ port: 0 });

        this.socket.on('listening', () => {
            let {port} = this.socket._server.address();
            this.url = `ws://127.0.0.1:${port}`;
            this.onListening();

            // Listening for open connection
            this.socket.on('connection', (websocket) => {
                this.websocket = websocket;
                this.onConnection();

                // Listening for incomming messages
                this.websocket.on('message', (data) => {
                    let obj = JSON.parse(data)
                    if (obj.type == 'log') {
                        this.channel.appendLine(obj.msg);
                    } else if (obj.type == 'imageData') {
                        if (obj.mimeType == 'png') {
                            let options = {
                                'filters': {
                                    'Images': ['png']
                                }
                            }
                            vscode.window.showSaveDialog(options, (result) => {
                                console.log(result);
                            });

                        }
                    }
                });
            });

        });
    }

    public sendCode(code: string) {
        if (this.websocket != undefined) {
            this.websocket.send(JSON.stringify({
                'type': 'code',
                'data': code
            }));
        }
    }

    public sendImageRequest(type: ImageType) {
        if (this.websocket != undefined) {
            this.websocket.send(JSON.stringify({
                'type': 'imageRequest', 
                'mimeType': type.toString()
            }));
        }
    }

    dispose() {
        this.websocket.dispose();
    }

}