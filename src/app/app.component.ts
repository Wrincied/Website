
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sliderItems: Array<{name: string, price: number}> = [
    {
      name: 'T-shirt',
      price : 5,
    },
    {
      name: 'Pants Forclaz',
      price : 30,
    },
    {
      name: 'Backpack',
      price : 60,
    },
    {
      name: 'Trainers',
      price : 50,
    },
    {
      name: 'Shirt',
      price: 10,
    }
  ];

  constructor() {}

  ngOnInit() {

  }
}
  