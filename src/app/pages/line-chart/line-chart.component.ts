import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  weeklyTime = new Array<{ date: String, close: Number }>();
  dataProgress = new Array<{ name: String, date: String, value: Number }>();
  constructor() { }

  ngOnInit() {
    this.weeklyTime = [{date:"2019-01-07T00:00:00.000Z",close:390},{date:"2018-12-31T00:00:00.000Z",close:332},{date:"2018-12-24T00:00:00.000Z",close:123},{date:"2018-12-17T00:00:00.000Z",close:324},{date:"2018-12-10T00:00:00.000Z",close:400},{date:"2018-12-03T00:00:00.000Z",close:892},{date:"2018-11-26T00:00:00.000Z",close:123},{date:"2018-11-19T00:00:00.000Z",close:569},{date:"2018-11-12T00:00:00.000Z",close:400},{date:"2018-11-05T00:00:00.000Z",close:600},{date:"2018-10-29T00:00:00.000Z",close:689},{date:"2018-10-22T00:00:00.000Z",close:434}]
  }

}
