import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  dataPie = new Array<{ progress: String, status: Number }>();

  constructor() { }

  ngOnInit() {
    this.dataPie = [{progress: "A",status:40},{progress: "B",status:60}];    
  }

}
