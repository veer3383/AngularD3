import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stackedbar-chart",
  templateUrl: "./stackedbar-chart.component.html",
  styleUrls: ["./stackedbar-chart.component.css"]
})
export class StackedBarChartComponent implements OnInit {
  dailyTime = new Array<{}>();
  constructor() {}

  ngOnInit() {
    this.dailyTime = [
      {
        State: "VT",
        "Under 5 Years": 32635,
        "5 to 13 Years": 62538,
        "14 to 17 Years": 33757,
        "18 to 24 Years": 61679,
        "25 to 44 Years": 155419,
        "45 to 64 Years": 188593,
        "65 Years and Over": 86649
      },
      {
        State: "VA",
        "Under 5 Years": 522672,
        "5 to 13 Years": 887525,
        "14 to 17 Years": 413004,
        "18 to 24 Years": 768475,
        "25 to 44 Years": 2203286,
        "45 to 64 Years": 2033550,
        "65 Years and Over": 940577
      },
      {
        State: "WA",
        "Under 5 Years": 433119,
        "5 to 13 Years": 750274,
        "14 to 17 Years": 357782,
        "18 to 24 Years": 610378,
        "25 to 44 Years": 1850983,
        "45 to 64 Years": 1762811,
        "65 Years and Over": 783877
      },
      {
        State: "WV",
        "Under 5 Years": 105435,
        "5 to 13 Years": 189649,
        "14 to 17 Years": 91074,
        "18 to 24 Years": 157989,
        "25 to 44 Years": 470749,
        "45 to 64 Years": 514505,
        "65 Years and Over": 285067
      },
      {
        State: "WI",
        "Under 5 Years": 362277,
        "5 to 13 Years": 640286,
        "14 to 17 Years": 311849,
        "18 to 24 Years": 553914,
        "25 to 44 Years": 1487457,
        "45 to 64 Years": 1522038,
        "65 Years and Over": 750146
      },
      {
        State: "WY",
        "Under 5 Years": 38253,
        "5 to 13 Years": 60890,
        "14 to 17 Years": 29314,
        "18 to 24 Years": 53980,
        "25 to 44 Years": 137338,
        "45 to 64 Years": 147279,
        "65 Years and Over": 65614
      }
    ];
  }
}
