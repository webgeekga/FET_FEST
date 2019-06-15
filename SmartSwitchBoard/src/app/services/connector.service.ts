import { Pin } from './../model/pin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  public pin: Pin;
  private url  = 'http://192.168.4.1';
  private port = 80;

  constructor() { }

  public requestMapper(pin: Pin): string {
    const tilde: string = '~';
    const bar: string = '|';
    let requestBody = JSON.stringify(pin);
    return tilde + requestBody.length + bar + requestBody + tilde;
  }
      
  public sendPacket(pin) {
    var delay = 5000;	/// 5 seconds timeout
    (<any>window).chrome.sockets.tcp.create({}, createInfo => { //callback function with createInfo as the parameter
      var _socketTcpId = createInfo.socketId;
      (<any>window).chrome.sockets.tcp.connect(_socketTcpId, this.url, this.port, result => { //callback function with result as the parameter
        if (result === 0) {
          /// connection ok, send the packet
          (<any>window).chrome.sockets.tcp.send(_socketTcpId, this.requestMapper(pin));
        }
      });
    }

}
