import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-statistique-mission',
  templateUrl: './statistique-mission.component.html',
  styleUrls: ['./statistique-mission.component.css']
})
export class StatistiqueMissionComponent implements OnInit {

  public doughnutChartLabels:string[]=[];
  public doughnutChartLabel:string[]=[];
  public doughnutChartData:number[]=[];

  public doughnutChartLabelLieu:string[]=[];
  public doughnutChartLabelsLieu:string[]=[];
  public doughnutChartDataLieu:number[]=[];

  public doughnutChartType:string='doughnut';
  public map :Map<string,number>= new Map<string, number>(); 
  public mapLieu :Map<string,number>= new Map<string, number>(); 
  AllDomaines:any;
  public tabDomaines:string[]=[];

  constructor(public activatedRoute:ActivatedRoute,
    public associationService:AssociationService,
    public router:Router
    ,private sanitizer: DomSanitizer) { 
      
    }
 
  ngOnInit() {
    this.associationService.ListDomaines()
      .subscribe(data => {
       this.map=data;

        /******* Values ************/
         Object.values(this.map).forEach(value=> {
            console.log("VALUE =="+value);
            this.doughnutChartData.push(value); 
            });

        /******* Keys*********/
       
        Object.keys(data).forEach(key=> {
          this.doughnutChartLabel.push(key);    
         });   
         this.doughnutChartLabels=this.doughnutChartLabel;
    })


    this.associationService.ListLieux()
    .subscribe(data => {
     this.mapLieu=data;

      /******* Values ************/
       Object.values(this.mapLieu).forEach(value=> {
          console.log("VALUE =="+value);
          this.doughnutChartDataLieu.push(value); 
          });

      /******* Keys*********/
     
      Object.keys(this.mapLieu).forEach(key=> {
        this.doughnutChartLabelLieu.push(key);    
       });   
       this.doughnutChartLabelsLieu=this.doughnutChartLabelLieu;
  })



  
  }

   
  
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

   seDeconnecter()
  {
    this.router.navigate(['authentification-entreprise']);
  }

}
