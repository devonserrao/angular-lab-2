import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../Car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit 
{
  @Input() carProp : Car;

  constructor() { }

  ngOnInit() {
  }

}
