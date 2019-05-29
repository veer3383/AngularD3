import { Directive, Input,OnInit, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import * as D3 from 'd3';
import { D3Service } from '../d3.service';
@Directive({
  selector: '[appD3Axis]'
})
export class AxisDirective implements OnInit{
  @Input() scale: any;
  @Input() type: any;
  @Input() orientation: 'vertical' | 'horizontal' = 'horizontal';
  initialized = false;

  constructor(private d3Service: D3Service, private el: ElementRef) {}

  ngOnInit(){
    this.d3Service.drawAxis(this.orientation,this.el.nativeElement, this.scale, this.type);
  }

  ngOnChanges() {
    this.d3Service.drawAxis(this.orientation,this.el.nativeElement, this.scale, this.type);
  }
}
