import { Pin } from './../model/pin';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  public pin: Pin;
  private url  = 'http://192.168.4.1';
  private port = 80;

  constructor(private socket: Socket) { }

  public requestMapper(pin: Pin): string {
    const tilde: string = '~';
    const bar: string = '|';
    let requestBody = JSON.stringify(pin);
    return tilde + requestBody.length + bar + requestBody + tilde;
  }
      
  public sendPacket(pin) {
    var delay = 5000;	/// 5 seconds timeout
    let sockets = this.socket.connect();
    console.log(sockets);
    this.socket.emit(this.requestMapper(pin));
    }

}
