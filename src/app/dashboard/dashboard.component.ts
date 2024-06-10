import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getBarChartData().subscribe((data) => {
      this.renderBarChart(data);
    });
  }

  renderBarChart(data: any[]): void {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'heatmap',
        height: 450,
        background: '#f7f7f7',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: [],
          },
          autoSelected: 'zoom',
        },
      },
      series: [
        {
          name: 'Sales',
          data: data,
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        show: true,
        position: 'top',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
          borderRadius: 8,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + 'k';
          },
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        title: {
          text: 'Revenue',
        },
      },
      annotations: {
        yaxis: [
          {
            y: 50,
            borderColor: '#FEB019',
            label: {
              borderColor: '#FEB019',
              text: 'Average',
            },
          },
        ],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector('#bar-chart'), options);
    chart.render();
  }
}
