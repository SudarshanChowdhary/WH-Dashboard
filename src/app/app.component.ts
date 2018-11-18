import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HolmesService } from './Holmes.service';
declare let d3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/nvd3/build/nv.d3.css'],
  providers: [HolmesService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
 
  constructor(private HolmesService: HolmesService){
  }

  private barGraphOptions;
  private barGraphData:Array<any> = [];

  private pieGraphOptions;
  private pieGraphData:any = [];

  private multiLineGraphOptions; 


async ngOnInit() {
  this.HolmesService.getData().subscribe(data => {
    console.log(data); 
    this.drawPieGraph(data.bookOfWork);
    this.drawMultiBarGraph(data.completionStatus);
    this.drawMultiLineGraph(data.contractProcressed)
   });
  }

  drawMultiBarGraph(data){
    this.barGraphOptions = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 50,
          right: 20,
          bottom: 50,
          left: 55
        },
        xAxis: {
          showMaxMin: true,
          tickFormat: function(d){
//              return d3.format(',f')(d);
              return d3.time.format(d);
          }
      },
      yAxis: {
          axisLabel: 'NUMBER OF CONTRACTS',
          axisLabelDistance: -10,
          tickFormat: function(d){
              return d3.format(',.1f')(d);
          }
      },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500
      }
    }
    this.barGraphData = [
      {
        "key": "Contract Allocated",
        "values": [
          {
            "x": "August",
            "y": 8,
          },
          {
            "x": "September",
            "y": 9,
          },
          {
            "x": "October",
            "y": 97,
          },
          {
            "x": "November",
            "y": 32,
          }
        ]
      },
      {
        "key": "Contract Completed",
        "values": [
          {
            "x": "August",
            "y": 8,
          },
          {
            "x": "September",
            "y": 9
          },
          {
            "x": "October",
            "y": 17
          },
          {
            "x": "November",
            "y": 0
          }
        ]
      }
    ]

  }

  drawMultiLineGraph(data){
    this.multiLineGraphOptions = {
      chart: {
        type: 'multiLineChart',
        height: 450,
        margin : {
          top: 50,
          right: 20,
          bottom: 50,
          left: 55
        },
        xAxis: {
          showMaxMin: true,
          tickFormat: function(d){
//              return d3.format(',f')(d);
              return d3.time.format(d);
          }
      },
      yAxis: {
          axisLabelDistance: -10,
          tickFormat: function(d){
              return d3.format(',.1f')(d);
          }
      },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500
      }
    }
    this.barGraphData = [
      {
        "key": "Contract Processed",
        "values": [
          {
            "x": "August",
            "y": 8
          },
          {
            "x": "September",
            "y": 9
          },
          {
            "x": "October",
            "y": 17
          },
          {
            "x": "November",
            "y": 0
          }
        ]
      },
      {
        "key": "Avg. Team Work",
        "values": [
          {
            "x": "August",
            "y": 8
          },
          {
            "x": "September",
            "y": 8
          },
          {
            "x": "October",
            "y": 8
          },
          {
            "x": "November",
            "y": 8
          }
        ]
      }
    ]

  }


  drawPieGraph(data){
    console.log(data);

    for(let key in data){
      this.pieGraphData.push({key:key, y:data[key]});
    }
    console.log(this.pieGraphData);

    this.pieGraphOptions = {
      chart: {
               type: 'pieChart',
               title: "Book of Work",
               height: 500,
               x: function(d){return d.key;},
               y: function(d){return d.y;},
               showLabels: true,
               duration: 5,
               labelThreshold: 0.01,
               labelSunbeamLayout: true,
               legend: {
                   margin: {
                       top: 5,
                       right: 5,
                       bottom: 5,
                       left: 0
                   }
               }
           }
   };


  }  

}
