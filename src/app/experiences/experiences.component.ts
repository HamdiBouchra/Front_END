import { Component, OnInit } from '@angular/core';
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {ExperienceService} from "../../services/experience.service";
import {Benevole} from "../../model/model.benevole";
import {BenevoleService} from "../../services/benevole.service";
import { experience } from '../../model/model.experience';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
    public benevoleService:BenevoleService,
    public associationService:AssociationService,
    public experienceService:ExperienceService,
    public router:Router
,private sanitizer: DomSanitizer) { }



MissionBenv:Array<Mission>=[];
idBen:number;
exper:experience=new experience();
missionModal:Mission=new Mission();


  ngOnInit() {

    this.idBen=this.activatedRoute.snapshot.params['id'];
    console.log("ID =====>"+this.idBen);
    this.benevoleService.MyMissBenv(this.idBen)
    .subscribe(data => {
      this.MissionBenv=data;
    })
  }

  saveExperience(miss:Mission,exp:experience)
  {
    console.log("**************"+this.missionModal.nom);
    this.experienceService.saveExperience(this.exper,this.missionModal.id_m,this.idBen)
      .subscribe(data => {
        console.log(data);
        alert("Expérience  ajoutée");
        this.exper=new experience();
        this.ngOnInit();
      }) 
  }


  ShowBenMiss(id:number)
  {
    this.associationService.getMission(id)
    .subscribe(data => {
      this.missionModal=data;
      console.log(data);
      })

  

}
}
