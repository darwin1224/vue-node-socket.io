import {
  SocketController,
  ConnectedSocket,
  OnConnect,
  OnDisconnect,
  OnMessage,
  MessageBody,
} from 'socket-controllers';

@SocketController()
export class MessageController {
  @OnConnect()
  public connection(@ConnectedSocket() socket: any): void {
    console.log('client connected');
  }

  @OnDisconnect()
  public disconnect(@ConnectedSocket() socket: any): void {
    console.log('client disconnected');
  }

  @OnMessage('save')
  public save(@MessageBody() message: any): void {
    console.log(message);
  }
}
