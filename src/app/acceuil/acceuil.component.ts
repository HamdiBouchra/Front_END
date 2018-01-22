import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  allMissions: any;
  pages:Array<number>;
  currentPage:number=0;
  MissionData:Array<Mission>=[];
  d:SafeResourceUrl;
  tabImages:Array<SafeResourceUrl>=[];
  i:number=0;
  size:number=5;
  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router
    ,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.associationService.allMiss(this.currentPage,this.size)
      .subscribe(data => {
        this.allMissions=data.content;
        this.MissionData.push(... data.content);
        console.log("lengnt == "+this.MissionData.length);
        //console.log(this.allMissions.length);

        for(let Mission of this.MissionData)
       {
         //console.log("====>"+Mission.imag);
         this.d= this.sanitizer.bypassSecurityTrustResourceUrl("assets/images/"+Mission.imag);
         console.log("image ===== "+this.d);
         this.tabImages.push(this.d);
        // Mission.imag=this.d;
         this.i=this.i+1;
       }
        this.pages=new Array(data.totalPages);
      });
        console.log("apres");

  }

  goToPage(i:number)
  {
    console.log("current page is "+i);
    this.currentPage=i;
    this.ngOnInit();
  }
}
