import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-statistique',
  templateUrl: './admin-statistique.component.html',
  styleUrls: ['./admin-statistique.component.css']
})
export class AdminStatistiqueComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
    public associationService:AssociationService,
    public router:Router
,private sanitizer: DomSanitizer) { }
  public doughnutChartLabels:string[]=[] ;
  public doughnutChartData:number[];
  public doughnutChartType:string;
  AllDomaines:any;
  tabDomaines:string[]=[];
  ngOnInit() {
    this.associationService.ListDomaines()
      .subscribe(data => {
       this.AllDomaines=data;
       for(let domaine of this.AllDomaines)
       {
          this.tabDomaines.push(domaine);
       }
     
      for(let dom of this.tabDomaines)
      {
         console.log("===> "+dom);
         this.doughnutChartLabels.push(dom);
      } 
      this.doughnutChartData= [350, 450, 100];
      this.doughnutChartType= 'doughnut'; 
    })
    
  }

  
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

}
