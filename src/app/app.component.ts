import { Component, ViewChild, OnInit } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }



  sliderItemsMen: Array<{name: string, price: number,tempImage? : any}> = [

    {
      name: 'T-shirt',
      price : 5,
      tempImage : '../assets/t-shirt.png'
    },
    {
      name: 'Pants Forclaz',
      price : 30,
      tempImage : '../assets/Pants.png'
    },
    {
      name: 'Backpack',
      price : 60,
      tempImage : '../assets/Backpack.png'
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
      tempImage : '../assets/Shoes.png'
    },
    {
      name: 'Trainers',
      price : 50,
      tempImage : '../assets/Pants.png'
    }
  ];
  @ViewChild('navMen', { read: DragScrollComponent }) dsMen!: DragScrollComponent;

  moveLeft() {
    this.dsMen.moveLeft();
  }

  moveRight() {
    this.dsMen.moveRight();
  }

  ngOnInit() {

  }


  @ViewChild('navWomen',{ read : DragScrollComponent}) dsWomen!: DragScrollComponent;
  moveLeftRev() {
    this.dsWomen.moveLeft();
  }
  moveRightRev() {
    this.dsWomen.moveRight();
  }
//Women DataBase
  public sliderItemsWomen: Array<{name: string, price: number,tempImage? : any}> = [
    // Design
    {
    name: 'Jacket',
    price : 60,
    tempImage : '../assets/t-shirt.png'
  },
  {
    name: 'Trekking shoes',
    price : 30,
    tempImage : '../assets/Jacket.png'
  },
  {
    name: 'T-shirt',
    price : 60,
    tempImage : '../assets/Shoes.png'
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
