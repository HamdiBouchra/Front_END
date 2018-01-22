import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {associat} from "../../model/model.association";

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {

  idMiss:number;
  idAss:number;
  mission:Mission=new Mission();
  assoc:associat=new associat();
  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router) {
    //console.log(activatedRoute.snapshot.params['id']);
    this.idMiss = activatedRoute.snapshot.params['id'];
    this.idAss=this.activatedRoute.snapshot.params['id'];
    console.log("*****************************=="+this.idMiss);
  }
  ngOnInit() {
    this.associationService.getMission(this.idMiss)
      .subscribe(data => {
        this.mission = data;

      })
  }



  updateMission()
  {
    this.associationService.updateMiss(this.mission)
      .subscribe(data=>{
        alert("Mise à jour effectuée");
        this.associationService.getAssocMiss(this.mission.id_m)
          .subscribe(data => {
            this.assoc=data;
            this.router.navigate(['missions',this.assoc.id]);
            console.log("Mission =========== ** " + this.mission.nom);
          })
      })
  }

}
