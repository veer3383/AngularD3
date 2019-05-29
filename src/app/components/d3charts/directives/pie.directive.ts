import { Directive, Input,OnInit, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import * as D3 from 'd3';
import { D3Service } from '../d3.service';
@Directive({
  selector: '[appD3Pie]'
})
export class PieDirective implements OnInit{  
  @Input() data: any;
  @Input() arc: any;
  @Input() colors: any;
  @Input() labelArc: any;
  @Input() pie: any;
  

  constructor(private d3Service: D3Service,private el: ElementRef) {}

  ngOnInit(){
    this.d3Service.drawPie(this.el.nativeElement, this.data , this.pie, this.arc, this.colors, this.labelArc);
  }

  ngOnChanges() {
    this.d3Service.drawPie(this.el.nativeElement, this.data , this.pie, this.arc, this.colors, this.labelArc);
  }
}
