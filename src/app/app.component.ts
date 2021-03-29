import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
//Men DataBase
  public sliderItemsMen: Array<{name: string, price: number,tempImage? : any}> = [
    // Design
    {
      name: 'T-shirt',
      price : 5,
      tempImage : '../assets/Pants.png'
    },
    {
      name: 'Pants Forclaz',
      price : 30,
      tempImage : '../assets/Pants.png'
    },
    {
      name: 'Backpack',
      price : 60,
      tempImage : '../assets/Pants.png'
    },
    //lorem
    {
      name: 'Trainers',
      price : 50,
      tempImage : '../assets/Jacket.png'
    },
    {
      name: 'Trainers',
      price : 50,
      tempImage : '../assets/Pants.png'
    },
    {
      name: 'Trainers',
      price : 50,
      tempImage : '../assets/Pants.png'
    }
  ];
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  ngOnInit() {
  }
//Women DataBase
  public sliderItemsWomen: Array<{name: string, price: number,tempImage? : any}> = [
    // Design
    {
    name: 'Jacket',
    price : 60,
    tempImage : '../assets/Pants.png'
  },
  {
    name: 'Trekking shoes',
    price : 30,
    tempImage : '../assets/Pants.png'
  },
  {
    name: 'T-shirt',
    price : 60,
    tempImage : '../assets/Pants.png'
  },
  // lorem
  {
    name: 'Trainers',
    price : 50,
    tempImage : '../assets/Pants.png'
  },
  {
    name: 'Trainers',
    price : 50,
    tempImage : '../assets/Pants.png'
  },
  {
    name: 'Trainers',
    price : 50,
    tempImage : '../assets/Pants.png'
  }
];
}
