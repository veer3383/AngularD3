import { Component, Input, OnChanges, OnInit } from "@angular/core";
import * as D3 from "d3";
export type Datum = { name: string; value: number };
@Component({
  selector: "d3-stackedbar-chart",
  templateUrl: "./d3StackedBarChart.component.html",
  styleUrls: ["./d3StackedBarChart.component.scss"]
})
export class D3StackedBarChartComponent implements OnChanges, OnInit {
  @Input() height = 600;
  @Input() width = 960;
  @Input() data: Datum[] = [];
  // @Input() data: any;
  @Input() range = 100;
  @Input() paddingLeft = 30;
  @Input() paddingBottom = 10;

  xScale: D3.ScaleBand<string> = null;
  yScale: D3.ScaleLinear<number, number> = null;
  transform = "";
  chartWidth = this.width - this.paddingLeft;
  chartHeight = this.height - this.paddingBottom;
  axisBottomTransform = "";
  axisLeftTransform = "";
  barWidth = 0;
  xCoordinates: number[] = [];
  color: any;
  keys: Array<any> = [];
  colorsData: Array<any> = [
  "#98abc5",
  "#8a89a6",
  "#7b6888",
  "#6b486b",
  "#a05d56",
  "#d0743c",
  "#ff8c00"
];

  constructor() {}

  //ngDoCheck() {
  ngOnInit() {
    this.chartHeight = this.height - this.paddingBottom;
    this.chartWidth = this.width - this.paddingLeft;
    //S
    // fix pre-processing

    for (let key in this.data[0]) {
      if (key != "State") this.keys.push(key);
    }
    console.log("KEYS", this.keys);
    var keys = this.keys;
    this.data.forEach(function(d: any) {
      d.total = 0;
      keys.forEach(function(k: any) {
        d.total += d[k];
      });
    });

    this.data.sort(function(a: any, b: any) {
      return b.total - a.total;
    });

    this.xScale = D3.scaleBand()
      .domain(this.data.map((item: any) => item.State))
      .range([1, this.chartWidth])
      .padding(0.6);

    this.yScale = D3.scaleLinear()
      .domain([
        0,
        D3.max(this.data, function(d: any) {
          return d.total;
        })
      ])
      .range([this.chartHeight, 20]);

    this.barWidth = this.xScale.bandwidth();
    this.color = D3.scaleOrdinal().range(this.colorsData);
    this.color.domain(this.keys);
  }

  ngOnChanges() {
    this.chartWidth = this.width - this.paddingLeft;
    this.chartHeight = this.height - this.paddingBottom;
    // transform the bars from the bottom of the axis
    this.transform = `scale(1, -1) translate(${this.paddingLeft}, ${-this
      .chartHeight})`;
    //xaxis transformation
    this.axisBottomTransform = `translate(${this.paddingLeft}, ${
      this.chartHeight
    })`;
    //yaxis tranformation
    this.axisLeftTransform = `translate(${this.paddingLeft}, 0)`;
  }
}
