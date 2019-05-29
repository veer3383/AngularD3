import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  dailyTime = new Array<{ name: String, value: Number }>();
  constructor() { }

  ngOnInit() {
    this.dailyTime = [{name:"MO", value: 40},{name:"TU", value: 30},{name:"WE", value: 20},{name:"TH", value: 10},{name:"FR", value: 35},{name:"SA", value: 50},{name:"SU", value: 20}];    
  }

}
