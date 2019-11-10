import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FarmerService } from '../Services/farmer.service';
import { GraphService } from '../Services/graph.service';
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

 @ViewChild("Graph", {  })
private Graph: ElementRef;

  constructor(private graph : GraphService) { }

  ngOnInit() {

    let plotData$ = this.graph.getgraph()
    .subscribe(
      res => {
        console.log(res)
        this.receivedData = res;
        this.data = {
          x: this.receivedData[1],
          y: this.receivedData[2], //keeping the length same
          name: 'type string, name of the trace',
          type: 'scattergl', //this very important to activate WebGL
          mode: 'line' //other properties can be found in the docs.
        }
        this.plotGraph();
        plotData$.unsubscribe();
        }
    )



  }

  




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
    linecolor: "black",
    linewidth: 2,
    mirror: true,
    title: "Time (s)",
    automargin: true
    },
    yaxis: {
    linecolor: "black",
    linewidth: 2,
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


    
  getPerdiction(){
    this.graph.getperdiction(2015)
    .subscribe(res=>{   
      console.log(res)
    })
  }




  }


