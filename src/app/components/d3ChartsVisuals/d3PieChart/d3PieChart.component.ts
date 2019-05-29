import { Component, ElementRef,OnChanges, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import * as D3 from 'd3';

export type Datum = { progress: string, status: string };
@Component({
    selector: 'd3-pie-chart',
    templateUrl: './d3PieChart.component.html',
    styleUrls: ['./d3PieChart.component.scss']
})
export class D3PieChartComponent implements OnInit,OnChanges {
    @Input() height = 600;
    @Input() width = 600;
    @Input() data: Datum[] = [];
    @Input() paddingLeft = 20;
    @Input() paddingBottom = 10;

    color: D3.ScaleOrdinal<string, {}> = null;
    pie: D3.Pie<any, {}> = null;
    arc: D3.Arc<string, object> = null;
    radius: any;
    labelArc: any;
    transform = '';   
    colorsData: Array<any> = ['#9820cc', '#ff2a7f']; 
    keys: Array<any> = [];
    legendWidth = 400;

    constructor() {
        this.radius = Math.min(this.width, this.height) / 2;
    }

    ngOnInit() {
        let keys : Array<any> = [];
          this.data.forEach(function (arrayItem) {
            var key = arrayItem.progress;
            console.log(key);
            keys.push(key);
        });
        this.keys = keys;
        console.log("KEYS , DATA", this.keys, this.data);
        this.color = D3.scaleOrdinal()
            .range(this.colorsData);
        this.arc = D3.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = D3.arc()
            .outerRadius(100)
            .innerRadius(60);
        this.pie = D3.pie()
            .sort(null)
            .value((d: any) => d.status);
    
    }

    ngOnChanges(){
        this.transform = 'translate(' + this.width / 2 + ',' + this.height / 2 + ')';
    }
}