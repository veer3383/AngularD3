import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  dataPie = new Array<{ progress: String, status: Number }>();
  
    constructor() { }
  
    ngOnInit() {
      this.dataPie = [{progress: "A",status:30},{progress: "B",status:35},{progress: "C",status:20},{progress: "D",status:15}];    
    }

}
