import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sliderItemsMen: Array<{name: string, price: number}> = [
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
    },
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

  public sliderItemsWomen: Array<{name: string, price: number}> = [
    
  ]


  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  constructor() {
  }

  ngOnInit() {
  }
}
