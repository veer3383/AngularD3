import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as D3 from 'd3';
export type Datum = { date: Date, value: number };
@Component({
  selector: 'd3-line-chart',
  templateUrl: './d3LineChart.component.html',
  styleUrls: ['./d3LineChart.component.scss']
})
export class D3LineChartComponent implements OnChanges, OnInit {

  @Input() height = 650;
  @Input() width = 1000;
  @Input() data: Datum[] = [];
  @Input() range = 80;
  @Input() paddingLeft = 20;
  @Input() paddingBottom = 10;

  xScale: D3.ScaleTime<number, number> = null;
  yScale: D3.ScaleLinear<number, number> = null;
  area: any;
  line: any;
  inputData;
  parseTime;
  type= "timeline";
  transform = '';
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisBottomTransform = '';
  axisLeftTransform = '';
  xCoordinates: number[] = [];
  counter: any = 0;

  ngOnInit() {
    this.width = 960;
    this.height = 600;
    this.paddingLeft = 30;
    this.paddingBottom = 10;
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom;
    this.transform = `scale(1, -1) translate(0, ${-this.chartHeight})`;
    this.axisBottomTransform = `translate(${this.paddingLeft}, ${this.chartHeight + 5})`;
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;

    this.parseTime = D3.timeParse("%d-%b-%y");

    this.data.forEach((d: any) => {

      d.date = new Date(d.date);
      d.close = +d.close;
    });


    this.xScale = D3.scaleTime()
      .range([0, this.chartWidth])
      .domain(D3.extent(this.data, function (d: any) {
        return d.date;
      }));
    this.yScale = D3.scaleLinear()
      .range([this.chartHeight, 15])
      .domain([0, D3.max(this.data, function (d: any) { return d.close +2; })]);

    this.line = D3.line()
      .x((d: any) => { return this.xScale(d.date); })
      .y((d: any) => { return this.yScale(d.close); });
  }

  ngDoCheck() {
  }


  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom;
    this.transform = `scale(1, -1) translate(0, ${-this.chartHeight})`;
    this.axisBottomTransform = `translate(0, ${this.chartHeight + 5})`;
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;
  }
}
