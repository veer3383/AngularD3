import { Component, Input, OnChanges } from '@angular/core';
import * as D3 from 'd3';
export type Datum = { name: string, value: number };
@Component({
  selector: 'd3-bar-chart',
  templateUrl: './d3BarChart.component.html',
  styleUrls: ['./d3BarChart.component.scss']
})
export class D3BarChartComponent implements OnChanges {

  @Input() height = 600;
  @Input() width = 960;
  @Input() data: Datum[] = [];
  @Input() range = 100;
  @Input() paddingLeft = 30;
  @Input() paddingBottom = 10;

  xScale: D3.ScaleBand<string> = null;
  yScale: D3.ScaleLinear<number, number> = null;
  transform = '';
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisBottomTransform = '';
  axisLeftTransform = '';
  barWidth = 0;
  xCoordinates: number[] = [];

  constructor() { }

  ngDoCheck() {
    this.chartHeight = this.height - this.paddingBottom;
    this.chartWidth = this.width - this.paddingLeft;
    this.xScale = D3.scaleBand()
      .domain(this.data.map((item: Datum) => item.name))
      .range([1, this.chartWidth])
      //.paddingInner(0.6)
      //.paddingOuter(0.9)
      .padding(0.6);
      
    this.yScale = D3.scaleLinear()
      .domain([0, D3.max(this.data, function (d: any) { return d.value +2; })])
      .range([this.chartHeight, 15]);
    this.barWidth = this.xScale.bandwidth();
    this.xCoordinates = this.data.map((item: Datum) => this.xScale(item.name));
  }

  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom;
    // transform the bars from the bottom of the axis
    this.transform = `scale(1, -1) translate(${this.paddingLeft}, ${-this.chartHeight})`;
    //xaxis transformation
    this.axisBottomTransform = `translate(${this.paddingLeft}, ${this.chartHeight})`;
    //yaxis tranformation
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;
  }

  barValue(value: number) {
    if (value < 0 || this.chartHeight <= 0) {
      //no bar
      return 0;
    }
    if (value > this.chartHeight) {
      //return chart height
      return this.chartHeight;
    }
    // return proper value
    return value;
  }

  barHeight(value) {
    return this.barValue(this.chartHeight - this.yScale(value));
  }

  pointX(name: string) {
    return this.xScale(name);
  }

}
