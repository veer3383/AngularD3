import { Component, ElementRef,OnChanges, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import * as D3 from 'd3';

export type Datum = { progress: string, status: string };
@Component({
    selector: 'd3-donut-chart',
    templateUrl: './d3DonutChart.component.html',
    styleUrls: ['./d3DonutChart.component.scss']
})
export class D3DonutChartComponent implements OnInit,OnChanges {
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
    colorsData: Array<any> = ['#9820cc', '#ff2a7f','#f9a519', '#09ff00']; 
    legendWidth = 400;
    keys: Array<any> = [];

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
            .innerRadius(100);
        this.labelArc = D3.arc()
            .outerRadius(100)
            .innerRadius(180);
        this.pie = D3.pie()
            .sort(null)
            .value((d: any) => d.status);
    
    }

    ngOnChanges(){
        this.transform = 'translate(' + this.width / 2 + ',' + this.height / 2 + ')';
    }
}