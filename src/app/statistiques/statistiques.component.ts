import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  public doughnutChartLabels:string[]=[];
  public doughnutChartLabel:string[]=[];
  public doughnutChartData:number[]=[];
  public doughnutChartType:string='doughnut';
  public map :Map<string,number>= new Map<string, number>(); 
  AllDomaines:any;
  public tabDomaines:string[]=[];

  constructor(public activatedRoute:ActivatedRoute,
    public associationService:AssociationService,
    public router:Router
    ,private sanitizer: DomSanitizer) { 
      
    }
 
  ngOnInit() {
   
  
  }

   
  
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }
}
