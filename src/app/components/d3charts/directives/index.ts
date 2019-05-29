import { AxisDirective } from './axis.directive';
import { ResizeDirective } from './resize.directive';
import { ZoomableDirective } from './zoomable.directive';
import { PieDirective } from './pie.directive';
import { AreaDirective } from './area.directive';
import { LineDirective } from './line.directive';
import { StackedBarDirective } from './stackedbar.directive';
import {LegendDirective } from './legend.directive';

export * from './axis.directive';
export * from './pie.directive';
export * from './resize.directive';
export * from './zoomable.directive';
export * from './area.directive';
export * from './line.directive';
export * from './stackedbar.directive';
export * from './legend.directive';

export const D3_DIRECTIVES = [
    AxisDirective,
    ResizeDirective,
    ZoomableDirective,
    PieDirective,
    AreaDirective,
    LineDirective,
    StackedBarDirective,
    LegendDirective
];
