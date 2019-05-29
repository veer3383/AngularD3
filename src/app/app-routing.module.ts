import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { StackedBarChartComponent } from './pages/stackedbar-chart/stackedbar-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';
import { AreaChartComponent } from './pages/area-chart/area-chart.component';
import { DonutChartComponent } from './pages/donut-chart/donut-chart.component';

const appRoutes: Routes = [
  { path: 'barchart', component: BarChartComponent},
  { path: 'stackedbarchart', component: StackedBarChartComponent},
  { path: 'linechart', component: LineChartComponent},
  { path: 'areachart', component: AreaChartComponent },
  { path: 'piechart', component: PieChartComponent },
  { path: 'donutchart', component: DonutChartComponent },
  { path: '**', redirectTo: 'barchart' }
 ];
 export const routing = RouterModule.forRoot(appRoutes);
