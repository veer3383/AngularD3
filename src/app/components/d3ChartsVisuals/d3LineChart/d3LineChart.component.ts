import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as D3 from 'd3';
export type Datum = { date: Date, value: number };
@Component({
  selector: 'd3-line-chart',
  templateUrl: './d3LineChart.component.html',
  styleUrls: ['./d3LineChart.component.scss']
})
export class D3LineChartComponent implements OnInit {

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
  inputData: any;
  parseTime: any;
  type = "timeline";
  transform = '';
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisBottomTransform = '';
  axisLeftTransform = '';
  xCoordinates: number[] = [];
  counter: any = 0;
  tooltipDiv: any;

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

    this.tooltipDiv = D3.select("body").append("div")		
      .style("opacity", 0)
      .style("background", "lightsteelblue")
      .style("position", "absolute")
      .style("fontSize", "1px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("pointer-events", "none")


    this.xScale = D3.scaleTime()
      .range([0, this.chartWidth])
      .domain(D3.extent(this.data, function (d: any) {
        return d.date;
      }));
    this.yScale = D3.scaleLinear()
      .range([this.chartHeight, 15])
      .domain([0, D3.max(this.data, function (d: any) { return d.close + 2; })]);

    this.line = D3.line()
      .x((d: any) => { return this.xScale(d.date); })
      .y((d: any) => { return this.yScale(d.close); });
  }

  pointX(date: Date) {
    return this.xScale(date) + 30;
  }

  pointY(value: number) {
    return this.yScale(value);
  }

  handleMouseover = (e, item) => {

    let pageXLocal = e.pageX;
    let pageYLocal = e.pageY;
    this.parseTime = D3.timeFormat("%b %Y");
    this.tooltipDiv.transition()
      .duration(200)
      .style("opacity", .9);
    this.tooltipDiv.html(this.parseTime(item.date) + "<br/>" + item.close)
      .style("left", (pageXLocal) + "px")
      .style("top", (pageYLocal - 28) + "px");
  }

  handleMouseout = (e, item) => {
    this.tooltipDiv.transition()
      .duration(500)
      .style("opacity", 0);
  }
}
