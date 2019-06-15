import { Component } from '@angular/core';
import { ConnectorService } from '../services/connector.service';
import { Pin } from '../model/pin';
import { PinData } from '../model/pinData';
import { IPins } from '../model/IPins';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private connectorService: ConnectorService,
    private toastController: ToastController
  ) { }
  private pins: Array<IPins> = [
    {
      id: 1,
      name: '',
      placeholder: 'Pin 1',
      icon: 'key'
    },
    {
      id: 2,
      name: '',
      placeholder: 'Pin 2',
      icon: 'tv'
    },
    {
      id: 3,
      name: '',
      placeholder: 'Pin 3',
      icon: 'flashlight'
    },
    {
      id: 4,
      name: '',
      placeholder: 'Pin 4',
      icon: 'sunny'
    }
  ]

  private pin: Pin;
  private pinData: PinData;


  public pinToggle(pinNumber: number, toggleValue: boolean): void {
    this.pinData = {
      pin: pinNumber,
      val: toggleValue ? 1 : 0
    };
    this.pin = {
      data: this.pinData,
      msgtype: 1,
      name: '0001'
    }
    let req = this.connectorService.sendPacket(this.pin);
    this.presentToast();
  }

  async presentToast() {
    let currentPin = this.pins.find((val) => val.id === this.pinData.pin)
    const toast = await this.toastController.create({
      message: `${currentPin.name || currentPin.placeholder} is ${this.pinData.val ? 'on' : 'off'}`,
      duration: 2000
    });
    toast.present();
  }
}
