import {
  Directive,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  ElementRef
} from "@angular/core";
import * as D3 from "d3";
import { D3Service } from "../d3.service";

@Directive({
  selector: "[appD3StackedBar]"
})
export class StackedBarDirective implements OnInit {
  @Input() data: any;
  @Input() line: any;
  @Input() xscale: any;
  @Input() yscale: any;
  @Input() keys: any;
  @Input() color: any;
  @Input() width: any;
  @Input() height: any;
  initialized = false;

  constructor(private d3Service: D3Service, private el: ElementRef) {}

  ngOnInit() {
    this.d3Service.drawStackedBar(
      this.el.nativeElement,
      this.data,
      this.xscale,
      this.yscale,
      this.keys,
      this.color,
      this.width,
      this.height
    );
  }

  ngOnChanges() {
    this.d3Service.drawStackedBar(
      this.el.nativeElement,
      this.data,
      this.xscale,
      this.yscale,
      this.keys,
      this.color,
      this.width,
      this.height
    );
  }
}
