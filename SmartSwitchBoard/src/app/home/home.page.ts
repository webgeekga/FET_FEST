import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public useMode: string = 'md';

  public pinToggle(pinNumber: number, toggleValue: boolean): void {
    console.log(pinNumber, toggleValue);
  }
}
