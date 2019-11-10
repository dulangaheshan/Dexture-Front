import { logging } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FarmerService } from '../Services/farmer.service';
import { GraphService } from '../Services/graph.service';
import * as CanvasJS from '../../../canvasjs-2.3.2/canvasjs.min.js';
declare var Plotly: any;

declare var Plotly: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

 receivedData:any
 data :any

 result : any[] = [];
 graphData : {
   y : any
   label : any;
 }

 predicted: boolean = false;
 PredictedSellingQuantity: any
 year:any
 PredictedAllQuantity:any

 @ViewChild("Graph", {  })
private Graph: ElementRef;

  constructor(private graph : GraphService) { }



  ngOnInit() {

    this.graph.getgraph()
    .subscribe(res=>{
      this.receivedData = res
      console.log(res)
      let chart = new CanvasJS.Chart("chartContainer", {
      
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "All Quantity"
        },
        data: [{
          type: "column",
          dataPoints:res[0]
          //  [
          //   { y: 71, label: "Apple" },
          //   { y: 55, label: "Mango" },
          //   { y: 50, label: "Orange" },
          //   { y: 65, label: "Banana" },
          //   { y: 95, label: "Pineapple" },
          //   { y: 68, label: "Pears" },
          //   { y: 28, label: "Grapes" },
          //   { y: 34, label: "Lychee" },
          //   { y: 14, label: "Jackfruit" }
         // ]
        }]
      });

      let chart1 = new CanvasJS.Chart("chartContainer1", {
      
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Sales Quantity"
        },
        data: [{
          type: "column",
          dataPoints:res[1]
          //  [
          //   { y: 71, label: "Apple" },
          //   { y: 55, label: "Mango" },
          //   { y: 50, label: "Orange" },
          //   { y: 65, label: "Banana" },
          //   { y: 95, label: "Pineapple" },
          //   { y: 68, label: "Pears" },
          //   { y: 28, label: "Grapes" },
          //   { y: 34, label: "Lychee" },
          //   { y: 14, label: "Jackfruit" }
         // ]
        }]
      });
        
      chart.render();
      chart1.render();


    })

    console.log(this.receivedData)
    

      
    }
    
    // let plotData$ = this.graph.getgraph()
    // .subscribe(
    //   res => {
    //     // console.log(res)
    //     this.receivedData = res;
    //     console.log(this.receivedData[1],this.receivedData[2])
    //     this.data = {
    //       x: ["250", "250", "250", "250", "250", "250", "250", "44", "44", "44", "44", "44", "44"],
    //       y: ["15", "15", "15", "44", "4", "44", "44", "44", "44", "44", "44", "44", "44"], //keeping the length same
    //       name: 'type string, name of the trace',
    //       type: 'scattergl', //this very important to activate WebGL
    //       mode: 'line' //other properties can be found in the docs.
          
    //     }
    //     this.plotGraph();
    //     plotData$.unsubscribe();
    //     }
    // )



  

  




  plotGraph(){
    this.Graph = Plotly.newPlot( 
    this.Graph.nativeElement, 
    this.data, 
    {
    autoexpand: "true",
    autosize: "true",
    width: window.innerWidth - 200, 
    margin: {
    autoexpand: "true",
    margin: 0
    },
    offset: 0,
    type: "scattergl",
    title: name, //Title of the graph
    hovermode: "closest",
    xaxis: {
    // linecolor: "black",
    // linewidth: 2,
    mirror: true,
    title: "Time (s)",
    automargin: true
    },
    yaxis: {
    // linecolor: "black",
    // linewidth: 2,
    mirror: true,
    automargin: true,
    title: 'Any other Unit'
       }
    },
    { 
    responsive: true,
    scrollZoom: true
    });
    }


    
    Prediction(year){
      this.year = year
    this.graph.getperdiction(year)
    .subscribe(res=>{ 
      console.log(res) 
      var predict = res[0].toString().split(',')
      this.predicted =  true;
      this.PredictedSellingQuantity = predict[0]
      this.PredictedAllQuantity = predict[1]
    })
  }




  }


