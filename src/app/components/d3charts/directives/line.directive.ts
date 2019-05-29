import { Directive, Input,OnInit, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import * as D3 from 'd3';
import { D3Service } from '../d3.service';

@Directive({
  selector: '[appD3Line]'
})
export class LineDirective implements OnInit{
  @Input() data: any;
  @Input() line: any;
  @Input() xscale: any;
  @Input() yscale: any;
  initialized = false;

  constructor(private d3Service: D3Service,private el: ElementRef) {}

  ngOnInit(){
    this.d3Service.drawLine(this.el.nativeElement, this.data, this.line, this.xscale, this.yscale);
  }

  ngOnChanges() {
    this.d3Service.drawLine(this.el.nativeElement, this.data, this.line,this.xscale, this.yscale);
  }
}
