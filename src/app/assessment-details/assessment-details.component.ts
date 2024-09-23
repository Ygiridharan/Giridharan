import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.css']
})
export class AssessmentDetailsComponent implements OnInit {

 // Define the labels (x-axis values)

 public barChartLabels = ['Assisgment', 'Quiz', 'Presentation', 'Lab', 'May'];

 // Define the chart type

 public barChartType: ChartType = 'bar';

 // public barChartLegend = true;

 // // Define the data for the bar chart

 // public barChartData = [

 // { data: [65, 59, 80, 81, null, null, null, null, null], label: 'Completed', backgroundColor: 'green' },

 // { data: [28, 48, 40, 19, 90, 90, 90, 100, 20], label: 'Pending', backgroundColor: 'gray' },

 // ];

 public barChartLegend = false;

 // Define the data for the bar chart

 public barChartData = [

  { data: [25, 90, 55, 45, 85], label: 'Completed 1', backgroundColor: 'green' },

  { data: [75, 30, 35, 65, 0], label: 'Completed 2', backgroundColor: 'green' },

  { data: [50, 74, 12, 0, 0], label: 'Completed 3', backgroundColor: 'green' },

  { data: [100, 78, 0, 0, 0], label: 'Completed', backgroundColor: 'green' },

  { data: [0, 35, 25, 0, 0], label: 'Completed', backgroundColor: 'green' },

  { data: [0, 50, 50, 0, 0], label: 'Completed', backgroundColor: 'green' },

  { data: [0, 100, 0, 0, 0], label: 'Pending', backgroundColor: 'gray' },

  { data: [0, 100, 0, 0, 0], label: 'Pending', backgroundColor: 'gray' },

  { data: [0, 100, 0, 0, 0], label: 'Pending', backgroundColor: 'gray' }

 ];

 constructor() { }

 ngOnInit(): void {

 }

 public barChartOptions = {

  scaleShowVerticalLines: false,

  responsive: true,

  scales: {

   xAxes: [{

    gridLines: { display: false },

    // ticks: {

    // callback: (value: any, index: any, values: any) => {

    // return `Category ${value}`; // Custom X-Axis labels if you want to manipulate them further

    // }

    // }

   }],

   yAxes: [{

    ticks: {

     beginAtZero: true,

     min: 0, // Minimum value for Y-Axis

     max: 100, // Maximum value for Y-Axis

     stepSize: 25,// Step size between ticks

     callback: (value: any, index: any, values: any) => {

      return value + "%" // Custom X-Axis labels if you want to manipulate them further

     }

    }

   }]

  },

  legend: {

   position: 'top' as 'top',

   labels: {

    fontSize: 14,

    fontColor: '#333'

   }

  }

 };



}
