import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
@Component({
  selector: 'app-statistique-benevole',
  templateUrl: './statistique-benevole.component.html',
  styleUrls: ['./statistique-benevole.component.css']
})
export class StatistiqueBenevoleComponent implements OnInit {

  public doughnutChartLabels:string[]=[];
  public doughnutChartLabel:string[]=[];
  public doughnutChartData:number[]=[];

  public doughnutChartLabelsAge:string[]=[];
  public doughnutChartLabelAge:string[]=[];
  public doughnutChartDataAge:number[]=[]; 

  public doughnutChartType:string='doughnut';
  public map :Map<string,number>= new Map<string, number>(); 
  constructor(public activatedRoute:ActivatedRoute,
    public associationService:AssociationService,
    public router:Router
    ,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.associationService.ListBenevSexe()
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
  
    this.associationService.ListAge()
      .subscribe(data => {
       this.map=data;

        /******* Values ************/
         Object.values(this.map).forEach(value=> {
            console.log("VALUE =="+value);
            this.doughnutChartDataAge.push(value); 
            });

        /******* Keys*********/
       
        Object.keys(data).forEach(key=> {
          this.doughnutChartLabelAge.push(key);    
         });   
         this.doughnutChartLabelsAge=this.doughnutChartLabelAge;
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
