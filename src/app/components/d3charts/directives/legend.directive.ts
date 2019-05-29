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
  selector: "[appD3Legend]"
})
export class LegendDirective implements OnInit {
  @Input() keys: any;
  @Input() color: any;
  @Input() width: any;
  initialized = false;

  constructor(private d3Service: D3Service, private el: ElementRef) {}

  ngOnInit() {
    this.d3Service.drawLegend(
      this.el.nativeElement,
      this.keys,
      this.color,
      this.width,
    );
  }

  ngOnChanges() {
    this.d3Service.drawLegend(
      this.el.nativeElement,
      this.keys,
      this.color,
      this.width,
    );
  }
}
