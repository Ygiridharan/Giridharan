import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  @ViewChild('myCanvas')

  public canvas!: ElementRef;
 
  public context!: CanvasRenderingContext2D;
 
  public chartType: ChartType = 'line';
 
  public chartData: any[] = [];
 
  public chartLabels: any[] = [];
 
  public chartColors!: any[];
 
  public chartOptions: any;
 
  constructor() { }
 
  ngOnInit(): void {
 
   this.chartData = [{
 
    data: [25, 15, 85, 50, 60, 90, 65, 100, 75, 45, 65, 50],
 
    label: 'Anthracnose',
 
    fill: false
 
   }];
 
   this.chartLabels = ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9', '14/10', '21/10'];
 
   this.chartColors = [{
 
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
 
    borderColor: 'rgba(0, 0, 0, 1)'
 
   }];
 
   this.chartOptions = {
 
    scales: {
 
     yAxes: [{
 
      ticks: {
 
       beginAtZero: true,
 
       type: 'linear',
 
       min: 0, // Minimum value for Y-Axis
 
       max: 100, // Maximum value for Y-Axis
 
       stepSize: 25,// Step size between ticks
 
       callback: (value: any, index: any, values: any) => {
 
        return value + "%" // Custom X-Axis labels if you want to manipulate them further
 
       }
 
      }
 
     }]
 
    },
 
    annotation: {
 
     drawTime: 'beforeDatasetsDraw',
 
     annotations: [{
 
      type: 'box',
 
      id: 'a-box-1',
 
      yScaleID: 'y-axis-0',
 
      yMin: 0,
 
      yMax: 1,
 
      backgroundColor: '#4cf03b'
 
     }, {
 
      type: 'box',
 
      id: 'a-box-2',
 
      yScaleID: 'y-axis-0',
 
      yMin: 1,
 
      yMax: 2.7,
 
      backgroundColor: '#fefe32'
 
     }, {
 
      type: 'box',
 
      id: 'a-box-3',
 
      yScaleID: 'y-axis-0',
 
      yMin: 2.7,
 
      yMax: 5,
 
      backgroundColor: '#fe3232'
 
     }]
 
    }
 
   }
 
  }

}
