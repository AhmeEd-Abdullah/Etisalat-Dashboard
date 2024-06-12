import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Scheduled', 'In Progress', 'Executed'],
        datasets: [
          {
            label: '',
            data: [90, 60, 75],
            backgroundColor: ['#af3944', '#444746', '#ab72e0ed'],
            borderWidth: 1,
            barThickness: 40,
            borderRadius: { topLeft: 10, topRight: 10 },
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: function (value) {
                return value + '%';
              },
              stepSize: 25,
            },
          },
        },
      },
    });
  }
}
