import { Injectable } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'chart.js';

Chart.register(...registerables);

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  borderColor = {
    grey: 'rgba(0, 0, 0, 0.6)',
    purple: 'rgba(198, 120, 221, 0.7)'
  };
  
  linearBackground(ctx: CanvasRenderingContext2D) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    // rgba(97, 175, 239, 0.7)
    // rgba(97, 175, 239, 1)
    // rgba(171, 178, 191, 0.6)
    // rgba(224, 108, 117, 0.7)
    // rgba(198, 120, 221, 0.7)
    // rgba(209, 154, 102, 0.7) 

    gradient.addColorStop( 0.2, 'rgba(198, 120, 221, 0.7)');
    gradient.addColorStop( 1, 'rgba(198, 120, 221, 0.07)');

    return gradient;
  }

  createSkillsChart(chart: any, values: number[], labels: string[] )  {
    let dataset: ChartDataset[] = [];

    dataset = [ this.setChartColor(chart, labels, true, values, this.borderColor.purple ) ];

    return  {
      type: 'line',
      data: {
        labels: labels,
        datasets: dataset
      },
      options: {
        responsive: true,
        maintainAspectRation: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        hover: {
          mode: 'index'
        },
        layout: {
          padding: {
            top: 10
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            afterFit: (scale: { paddingLeft: number; }) => {
              scale.paddingLeft -= 15;
            },
            offset: false,
            grid: {
              display: false,
              drawTicks: true,
              z: 10
            },
            ticks: {
            //   callback: function (value: any, index: number) {
            //     // if (index === 0) return '';

            //     return value;
            //   },
            //   display: true,
              padding: 20,
            //   font: {
            //     size: 10
            //   },
            //   labelOffset: 0
            },
            suggestedMin: 0,
            suggestedMax: 100,
            display: true
          },
          y: {
            offset: false,
            position: 'right',
            border: {
              display: false
            },
            grid: {
              display: false,
              drawTicks: false
            },
            ticks: {
            //   callback: function(value: any, index: any) {
            //     return value;
            //   },
            //   display: true,
            //   autoSkip: false,
            //   stepSize: undefined,
            //   mirror: true,
            //   labelOffset: -5,
              padding: 20
            },
            display: true
          }
        }
      }
    }; 
  }

  setChartColor(chart: HTMLCanvasElement, labels: string[], addBackground: boolean, data: number[], borderColor: string) {
    const ctx = chart.getContext('2d') as CanvasRenderingContext2D;

    return {
      data: data,
      labels: labels,
      showLine: true,
      backgroundColor: addBackground ? this.linearBackground(ctx) : 'transparent',
      borderColor: 'rgba(180, 27, 103, 0.11)',
      borderWidth: 1,
      borderDash: addBackground ? undefined : [2, 2],
      pointStyle: 'circle',
      pointBackgroundColor: 'rgba(180, 27, 103, 0.11)',
      pointBorderColor: 'rgba(25, 6, 16, 0.11)',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 16,
      fill: true,
      tension: 0.5
    }
  }
}
