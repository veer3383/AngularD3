import { Component, Input, OnChanges } from '@angular/core';
import * as D3 from 'd3';
export type Datum = { name: string, date:string, value: number };
@Component({
  selector: 'd3-progress-chart',
  templateUrl: './d3ProgressChart.component.html',
  styleUrls: ['./d3ProgressChart.component.scss']
})
export class D3ProgressChartComponent implements OnChanges {

  @Input() height = 300;
  @Input() width = 600;
  @Input() data: Datum[] = [];
  @Input() range = 1;
  @Input() paddingLeft = 60;
  @Input() paddingBottom = 40;

  xScale: D3.ScaleBand<string> = null;
  xtScale: D3.ScaleBand<string> = null;  
  yScale: D3.ScaleLinear<number, number> = null;
  transform = '';
  type= "progress";
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisTopTransform ='';
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
      .range([0, this.chartWidth])
      .padding(0.9);
      this.xtScale = D3.scaleBand()
      .domain([])
      .range([0, this.chartWidth+10])
      .padding(0.8);
    this.yScale = D3.scaleLinear()
      .domain([0, this.range])
      .range([this.chartHeight, 15]);
    this.barWidth = this.xScale.bandwidth();
    this.xCoordinates = this.data.map((item: Datum) => this.xScale(item.name));
  }

  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom;
    // transform the bars from the bottom of the axis
    this.transform = `scale(1, -1) translate(${this.paddingLeft}, ${-this.chartHeight})`;
    this.axisTopTransform =`translate(${this.paddingLeft}, 0.9)`;
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
