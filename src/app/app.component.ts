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

  single: any[];
  multi: any[];
  view: any[] = [500, 400];

  private multiLineOptions: Object = {
  showXAxis : true,
  showYAxis : true,
  gradient : true,
  showLegend : true,
  showXAxisLabel : true,
  showYAxisLabel : true,
  colorScheme : {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  },

  // line, area
  autoScale : true,
  
  // constructor() {
  //   Object.assign(this, single, multi)   
  // }
  }
  private contractProcessedData: Array<any> =[
  {
    name: "contractProcessed",
    series:[{name:"August", value:8}, {name:"September", value:9}, {name:"October", value:17}, {name:"November", value:0}]
  },
  {
    name: "avgTeamWork",
    series:[{name:"August", value:8}, {name:"September", value:8}, {name:"October", value:8}, {name:"November", value:8}]
  }  
]
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


private turnaroundTimeOptions: Object = {
 
  // options
  showXAxis : true,
  showYAxis : true,
  gradient : true,
  showLegend : true,
  showXAxisLabel : true,
 
  showYAxisLabel : true,
 
  colorScheme : {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }

};

  private turnaroundTimeData: Array<any> =[
    {
      "value": 0,
      "name": "Ankur Yadav"
    },
    {
      "value": 1,
      "name": "Kajal Gadiya"
    },
    {
      "value": 1,
      "name": "Kapil Gupta"
    },
    {
      "value": 0,
      "name": "Manisha Saxena"
    },
    {
      "value": 0,
      "name": "Mohit Magarde"
    },
    {
      "value": 0,
      "name": "Pavithra"
    },
    {
      "value": 0,
      "name": "Rajesh"
    },
    {
      "value": 0,
      "name": "Shambhavi Mishra"
    },
    {
      "value": 0,
      "name": "Shrutika"
    },
    {
      "value": 0,
      "name": "Vishal Chavan"
    }]

    private analystErrorsOptions: Object = {
      showXAxis : true,
      showYAxis : true,
      gradient : true,
      showLegend : true,
      showXAxisLabel : true,
      showYAxisLabel : true,
      colorScheme : {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      },
    
      // line, area
      autoScale : true,  
    };
    
    private analystErrorsData: Array<any> = [
      { name:"empError",
        series:[{
            "value": 0,
            "name": "Ankur Yadav"
          },
          {
            "value": 0,
            "name": "Kajal Gadiya"
          },
          {
            "value": 0,
            "name": "Kapil Gupta"
          },
          {
            "value": 0,
            "name": "Manisha Saxena"
          },
          {
            "value": 0,
            "name": "Mohit Magarde"
          },
          {
            "value": 0,
            "name": "Pavithra"
          },
          {
            "value": 0,
            "name": "Rajesh"
          },
          {
            "value": 0,
            "name": "Shambhavi Mishra"
          },
          {
            "value": 0,
            "name": "Shrutika"
          },
          {
            "value": 0,
            "name": "Vishal Chavan"
          }
        ]
      },
      {
        name:"Team Error", series:[
          {
            "value": 0,
            "name": "Ankur Yadav"
          },
          {
            "value": 0,
            "name": "Kajal Gadiya"
          },
          {
            "value": 0,
            "name": "Kapil Gupta"
          },
          {
            "value": 0,
            "name": "Manisha Saxena"
          },
          {
            "value": 0,
            "name": "Mohit Magarde"
          },
          {
            "value": 0,
            "name": "Pavithra"
          },
          {
            "value": 0,
            "name": "Rajesh"
          },
          {
            "value": 0,
            "name": "Shambhavi Mishra"
          },
          {
            "value": 0,
            "name": "Shrutika"
          },
          {
            "value": 0,
            "name": "Vishal Chavan"
          }
        ]
      }
    ]

    private slaPerformanceOptions: Object = {
      showXAxis : true,
      showYAxis : true,
      gradient : true,
      showLegend : true,
      showXAxisLabel : true,
      showYAxisLabel : true,
      colorScheme : {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      },
    
      // line, area
      autoScale : true,  
    };

    private slaPerformanceData: Array<any> = [
      { name:"SLA",
        series:[{
            "value": 25,
            "name": "Ankur Yadav"
          },
          {
            "value": 100,
            "name": "Kajal Gadiya"
          },
          {
            "value": 100,
            "name": "Kapil Gupta"
          },
          {
            "value": 0,
            "name": "Manisha Saxena"
          },
          {
            "value": 0,
            "name": "Mohit Magarde"
          },
          {
            "value": 16,
            "name": "Pavithra"
          },
          {
            "value": 36,
            "name": "Rajesh"
          },
          {
            "value": 0,
            "name": "Shambhavi Mishra"
          },
          {
            "value": 37,
            "name": "Shrutika"
          },
          {
            "value": 0,
            "name": "Vishal Chavan"
          }
        ]
      },
      {
        name:"AvgTeamSLA", series:[
          {
            "value": 31,
            "name": "Ankur Yadav"
          },
          {
            "value": 31,
            "name": "Kajal Gadiya"
          },
          {
            "value": 31,
            "name": "Kapil Gupta"
          },
          {
            "value": 31,
            "name": "Manisha Saxena"
          },
          {
            "value": 31,
            "name": "Mohit Magarde"
          },
          {
            "value": 31,
            "name": "Pavithra"
          },
          {
            "value": 31,
            "name": "Rajesh"
          },
          {
            "value": 31,
            "name": "Shambhavi Mishra"
          },
          {
            "value": 31,
            "name": "Shrutika"
          },
          {
            "value": 31,
            "name": "Vishal Chavan"
          }
        ]
      }
    ]


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
