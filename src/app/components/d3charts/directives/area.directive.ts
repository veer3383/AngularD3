import { Directive, Input,OnInit, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import * as D3 from 'd3';
import { D3Service } from '../d3.service';

@Directive({
  selector: '[appD3Area]'
})
export class AreaDirective implements OnInit{
  @Input() data: any;
  @Input() area: any;
  initialized = false;

  constructor(private d3Service: D3Service,private el: ElementRef) {}

  ngOnInit(){
    this.d3Service.drawArea(this.el.nativeElement, this.data, this.area);
  }

  ngOnChanges() {
    this.d3Service.drawArea(this.el.nativeElement, this.data, this.area);
  }
}
