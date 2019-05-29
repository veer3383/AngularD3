import { Directive, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { D3Service } from '../d3.service';

@Directive({
    selector: '[appAutoResize]',
    exportAs: 'autoResize'
})
export class ResizeDirective implements AfterViewInit, OnDestroy {
    height = 0;
    width = 0;
    requestId = null;
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        //this.d3Service.autoResize(this.el.nativeElement, this.height, this.width, this.requestId);
        // moved this from service to this directive itself because i need the value of height and width to be passed for svg on resize
        let checkDimension = () =>{
            this.height = this.el.nativeElement.clientHeight;
            this.width = this.el.nativeElement.clientWidth;
            this.requestId = window.requestAnimationFrame(checkDimension);
          }
          this.requestId = window.requestAnimationFrame(checkDimension);
    }

    ngOnDestroy() {
        //this.d3Service.cancelFrame(this.requestId);
        if (this.requestId != null) {
            window.cancelAnimationFrame(this.requestId);
          }
    }

}
