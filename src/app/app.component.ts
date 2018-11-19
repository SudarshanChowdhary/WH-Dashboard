import { Component, OnInit } from '@angular/core';
import { HolmesService } from './Holmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/nvd3/build/nv.d3.css'],
  providers: [HolmesService]
})
export class AppComponent implements OnInit {
  constructor(private HolmesService: HolmesService) {
    this.HolmesService.getData().subscribe(data => {
      this.drawPieGraph(data.bookOfWork);
      this.drawMultiBarGraph(data.completionStatus);
      this.drawMultiLineGraph(data.contractProcressed)
    });
  
  }
  private pieGraphOptions: Object = {
    gradient: false,
    animations: true,
    labels: true,
    legend: true,
    legendTitle: "Legends",
    legendPosition: "right",
    doughnut: false
  };
  private groupedVerticalBarGraphOptions: Object = {
    scheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    gradient: true,
    xAxis: true,
    yAxis: true,
    legend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    legendTitle: "Legends",
    legendPosition: "right",
    xAxisLabel: "",
    yAxisLabel: ""
  };
  private completionStatusData: Array<any> =[
    {
      "name": "August",
      "series": [
        {
          "name": "Contract Allocated",
          "value": 8
        },
        {
          "name": "Contract Completed",
          "value": 8
        }
      ]
    },
    {
      "name": "September",
      "series": [
        {
          "name": "Contract Allocated",
          "value": 9
        },
        {
          "name": "Contract Completed",
          "value": 9
        }
      ]
    },
    {
      "name": "October",
      "series": [
        {
          "name": "Contract Allocated",
          "value": 97
        },
        {
          "name": "Contract Completed",
          "value": 17
        }
      ]
    },
    {
      "name": "November",
      "series": [
        {
          "name": "Contract Allocated",
          "value": 32
        },
        {
          "name": "Contract Completed",
          "value": 0
        }
      ]
    }


  ];
  public bookOfWorkData: Array<object> = [{'name': 'completed', 'value': 34}, {'name': 'workInProgress', 'value': 103}, {'name': 'unassigned', 'value': 0}, {'name': 'exception', 'value': 0}];

  private multiLineGraphOptions;

  async ngOnInit() {
  }

  drawMultiBarGraph(data) {

  }

  drawMultiLineGraph(data) {

  }


  drawPieGraph(data) {
    for (let key in data) {
      this.bookOfWorkData.push({"name": key, "value": data[key]});
    }
  }
}
