import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { D3BarChartComponent } from './components/d3ChartsVisuals/d3BarChart/d3BarChart.component';
import { D3StackedBarChartComponent } from './components/d3ChartsVisuals/d3StackedBarChart/d3StackedBarChart.component';
import { D3AreaLineChartComponent } from './components/d3ChartsVisuals/d3AreaLineChart/d3AreaLineChart.component';
import { D3LineChartComponent } from './components/d3ChartsVisuals/d3LineChart/d3LineChart.component';
import { D3PieChartComponent } from './components/d3ChartsVisuals/d3PieChart/d3PieChart.component';
import { D3DonutChartComponent } from './components/d3ChartsVisuals/d3DonutChart/d3DonutChart.component';
import { D3ProgressChartComponent } from './components/d3ChartsVisuals/d3ProgressChart/d3ProgressChart.component';
import { NgModule } from '@angular/core';
import { D3Service, D3_DIRECTIVES } from './components/d3charts';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { StackedBarChartComponent } from './pages/stackedbar-chart/stackedbar-chart.component';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';
import { AreaChartComponent } from './pages/area-chart/area-chart.component';
import { DonutChartComponent } from './pages/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    D3AreaLineChartComponent,
    D3LineChartComponent,
    D3BarChartComponent,
    D3StackedBarChartComponent,
    D3PieChartComponent,
    D3DonutChartComponent,
    D3ProgressChartComponent,
    NavbarComponent,
    ...D3_DIRECTIVES,
    BarChartComponent,
    StackedBarChartComponent,
    LineChartComponent,
    PieChartComponent,
    AreaChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
