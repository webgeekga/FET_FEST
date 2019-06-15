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
  public connectToWifi(pin: Pin) {
      
  }

}
