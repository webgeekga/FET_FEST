import { Component } from '@angular/core';
import { ConnectorService } from '../services/connector.service';
import { Pin } from '../model/pin';
import { PinData } from '../model/pinData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private connectorService: ConnectorService) {
    this.pin = new Pin();
    this.pinData = new PinData();
  }

  private pin: Pin;
  private pinData: PinData;


  public pinToggle(pinNumber: number, toggleValue: boolean): void {
    console.log(pinNumber, toggleValue);
    this.pinData.pin = pinNumber;
    this.pinData.val = toggleValue ? 1 : 0;
    this.pin.data = this.pinData;
    this.pin.msgtype = 1;
    this.pin.name = `0001`;
    let req = this.connectorService.sendPacket(this.pin);
    console.log(req);
  }
}
