import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit 
{
  carArray : Car[];

  constructor() { }

  ngOnInit() 
  {
    this.carArray = [
      new Car("Toyota","Corolla","Blue",10000),
      new Car("Nissan","Altima","Grey",7000),
      new Car("BMW","M2","Black",23000),
      new Car("Honda","Accord","Red",15000)
      
    ];
  }

}
