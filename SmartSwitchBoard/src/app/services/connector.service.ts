import { Pin } from './../model/pin';
import { Injectable } from '@angular/core';
declare var Socket: any

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
    let dataString = this.requestMapper(pin);
    let socket = Socket || window['Socket'];

    let soc = new socket();
    soc.open(
      this.url,
      this.port,
      function() {
        // invoked after successful opening of socketvar
        var data = new Uint8Array(dataString.length);
        for (var i = 0; i < data.length; i++) {
          data[i] = dataString.charCodeAt(i);
        }
        soc.write(data);
        soc.shutdownWrite();
      },
      function(errorMessage) {
        // invoked after unsuccessful opening of socket
        console.log(errorMessage);
        soc.close();
      });
    }
}
