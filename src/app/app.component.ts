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
  public barGraphData:Array<any> = [];

  private pieGraphOptions;
  public pieGraphData:any = [];


async ngOnInit() {
  this.HolmesService.getData().subscribe(data => {
    console.log(data); 
    this.drawPieGraph(data.bookOfWork);
    this.drawBarGraph(data);
   });
  }

  drawBarGraph(data){
    this.barGraphOptions = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'NUMBER OF CONTRACTS',
          axisLabelDistance: -4
        }
      }
    }
    this.barGraphData = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];

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
