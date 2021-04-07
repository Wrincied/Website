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

];
}
