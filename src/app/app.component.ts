import { Component, OnInit } from '@angular/core';
import { HolmesService } from './Holmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/nvd3/build/nv.d3.css'],
  providers: [HolmesService]
 })
 
 export class AppComponent implements OnInit {
  private pieGraphOptions: Object = {
   gradient: false,
   animations: true,
   labels: true,
   legend: true,
   legendTitle: "Legends",
   legendPosition: "right",
   doughnut: false,
   colorScheme: {
    domain: ['#5AA454', '#a8a8a8', '#c7b22e', '#a10b27']
   }
  };
  private bookOfWorkData: Array < object > ;
  private completionStatusData: Array < any > ;
  APIData:any;
 
  constructor(private HolmesService: HolmesService) {
   this.HolmesService.getData().subscribe(data => {
    this.APIData = data;
    this.bookOfWorkData = this.formatBookOfWorkData(data.bookOfWork);
    this.completionStatusData = this.formatCompletionStatusData(data.completionStatus);
    this.contractProcessedData = this.formatContractProcessedData(data.contractProcessed);
    this.turnaroundTimeData = this.formatTurnaroundTimeData(data.turnaroundTime);
    this.analystErrorsData = this.formatAnalystErrorsData(data.analystErrors);
    this.slaPerformanceData = this.formatSLAPerformanceData(data.slaPerformance);
   });
  }
 
  private multiLineOptions: Object = {
   showXAxis: true,
   showYAxis: true,
   gradient: true,
   showLegend: true,
   showXAxisLabel: true,
   showYAxisLabel: true,
   colorScheme: {
    domain: ['#5AA454', '#a8a8a8', '#c7b22e', '#a10b27']
   },
   autoScale: true,
  }
  private contractProcessedData: Array < any > ;
  formatContractProcessedData(data) {
   let temp = [];
   for (let key in data) {
    let series = [];
    if (key == "avgTeamWork") {
     for (let i = 0; i < data["lstContractProcessed"].length; i++) {
      series.push({
       name: data["lstContractProcessed"][i].timeScale,
       value: data["avgTeamWork"]
      });
     }
     temp.push({
      "name": key,
      "series": series
     });
    } else {
     for (let i = 0; i < data[key].length; i++) {
      series.push({
       name: data[key][i].timeScale,
       value: data[key][i].contractProcessed
      })
     }
     temp.push({
      "name": key,
      "series": series
     });
    }
   }
   console.log(temp);
   return temp;
  }
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
   yAxisLabel: 'NUMBER OF CONTRACT'
  };
 
  formatCompletionStatusData(data) {
   let temp = [];
   for (let i = 0; i < data.length; i++) {
    let series = [];
    for (let key in data[i]) {
     if (key != "timeScale") {
      series.push({
       "name": key,
       "value": data[i][key]
      });
     }
    }
    temp.push({
     name: data[i].timeScale,
     series: series
    });
   }
   return temp;
  }
 
  private turnaroundTimeOptions: Object = {
 
   // options
   showXAxis: true,
   showYAxis: true,
   gradient: false,
   showLegend: true,
   showXAxisLabel: true,
   showYAxisLabel: true,
   colorScheme: {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   }
 
  };
 
  private turnaroundTimeData: Array < any > ;
  formatTurnaroundTimeData(data) {
   let temp = [];
   for (let i = 0; i < data.lstTurnaroundTime.length; i++) {
    temp.push({
     "name": data.lstTurnaroundTime[i].userInfo,
     "value": data.lstTurnaroundTime[i].avgTime
    });
   }
   return temp;
  }
 
  private analystErrorsOptions: Object = {
   showXAxis: true,
   showYAxis: true,
   gradient: true,
   showLegend: true,
   showXAxisLabel: true,
   showYAxisLabel: true,
   colorScheme: {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   },
 
   // line, area
   autoScale: true,
  };
 
  formatAnalystErrorsData(data) {
   let temp = [];
   for (let key in data) {
    let series = [];
    if (key == "avgTeamError") {
     for (let i = 0; i < data["lstAnalystErrors"].length; i++) {
      series.push({
       name: data["lstAnalystErrors"][i].userInfo,
       value: data["avgTeamError"]
      });
     }
     temp.push({
      "name": key,
      "series": series
     });
    } else {
     if (key != "timeScale") {
      for (let i = 0; i < data[key].length; i++) {
       series.push({
        name: data[key][i].userInfo,
        value: data[key][i].empError
       })
      }
      temp.push({
       "name": key,
       "series": series
      });
     }
    }
   }
   console.log(temp);
   return temp;
  }
 
  formatSLAPerformanceData(data) {
   let temp = [];
   for (let key in data) {
    let series = [];
    if (key == "avgTeamSLA") {
     for (let i = 0; i < data["lstSLAPerformance"].length; i++) {
      series.push({
       name: data["lstSLAPerformance"][i].userInfo,
       value: data["avgTeamSLA"]
      });
     }
     temp.push({
      "name": key,
      "series": series
     });
    } else {
     if (key != "timeScale") {
      for (let i = 0; i < data[key].length; i++) {
       series.push({
        name: data[key][i].userInfo,
        value: data[key][i].empSLA
       })
      }
      temp.push({
       "name": key,
       "series": series
      });
     }
    }
   }
   console.log(temp);
   return temp;
  }
 
  private analystErrorsData: Array < any > ;
  private slaPerformanceOptions: Object = {
   showXAxis: true,
   showYAxis: true,
   gradient: true,
   showLegend: true,
   showXAxisLabel: true,
   showYAxisLabel: true,
   colorScheme: {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   },
 
   // line, area
   autoScale: true,
  };
 
  private slaPerformanceData: Array < any > ;
  private multiLineGraphOptions;
  async ngOnInit() {}
 
  formatBookOfWorkData(data) {
   let temp = [];
   for (let key in data) {
    if (key != "totalContract") {
     temp.push({
      "name": key,
      "value": data[key]
     });
    }
   }
   return temp;
  }
 }