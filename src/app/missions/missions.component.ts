import { Component, OnInit } from '@angular/core';
import {AssociationService} from "../../services/association.service";
import {Mission} from "../../model/model.mission";
import {associat} from "../../model/model.association";
import {ActivatedRoute, Router} from "@angular/router";
import { Benevole } from '../../model/model.benevole';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {


  mission:Mission=new Mission();
  association:associat=new associat();
  idAss:number;
  BenevoleAccepte:Array<Benevole>=[];
  pageMissions: any;
  ListBenev: any;
  pages:Array<number>;
  currentPage:number=0;
  size:number=5;
  missionModal:Mission=new Mission();
  disable:boolean;


  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router) {
   // this.idAssoc=activatedRoute.snapshot.params['id'];
    this.idAss=this.activatedRoute.snapshot.params['id'];
    console.log("**************"+this.idAss+"***************");
    this.associationService.getAssociat(this.idAss)
      .subscribe(data=>{
        this.association=data;

      })
  }


  ngOnInit() {
    this.idAss=this.activatedRoute.snapshot.params['id'];

    this.associationService.getMissions(this.idAss)
      .subscribe(data => {
        console.log(data);
        this.pageMissions=data;
        console.log(this.pageMissions.content)
        this.pages=new Array(data.totalPages);
      })
      

      


  }


  ShowBenMiss(id:number)
  {
    this.associationService.getMission(id)
    .subscribe(data => {
      this.missionModal=data;
      console.log(data);
      })

    this.associationService.ListeMissBen(id)
    .subscribe(data => {
    this.ListBenev=data;
    console.log(data);
    })

    this.associationService.benevoleMissionAccepte(id)
      .subscribe(data => {
        console.log("I AM HEEEEEERE1");
        this.BenevoleAccepte=data;
        if(this.BenevoleAccepte != null)
        {
        for(let Benevole of this.BenevoleAccepte)
          {
            console.log("SATUREE=======> "+Benevole.id_b);
            //console.log("VOILA:"+ document.getElementById("button"+Benevole.id_b).innerHTML);
            if( document.getElementById("button"+Benevole.id_b) != null )
            {
               document.getElementById("button"+Benevole.id_b).setAttribute("disabled","true");
            }
          } 
      }})
  }

  goToPage(i:number)
  {
    console.log("current page is "+i);
    this.currentPage=i;
    this.ngOnInit();
  }

  onFileChange(event) {
    let file = event.target.files[0];
    let fileName = file.name;
    console.log("********* file name =="+fileName);
    this.mission.imag=fileName;
    console.log("********* asso doc  =="+this.mission.imag);
  }

  saveMission()
  {
    console.log("**************"+this.association.nom);
    this.associationService.saveMiss(this.mission,this.association.id)
      .subscribe(data => {

        console.log("association ======="+this.association.nom);
        console.log(data);
        alert("Missions "+this.mission.imag+"est ajoutée");
        this.mission=new Mission();
        this.ngOnInit();
      })
  }


  getMissions()
  {
    console.log("**************"+this.association.nom);
    this.associationService.getMissions(this.association.id)
      .subscribe(data => {
      this.pageMissions=data.content;
        console.log(data);
        this.pages=new Array(data.totalPages);
      })
  }

  ListeMissionBenev()
  {
    
  }

  toggle(id:number) {
    document.getElementById("btn"+id).setAttribute("disabled","disabled=true");
    //this.isVisible = !this.isVisible;
} 

togglle(id:number) {
  document.getElementById("btnn"+id).setAttribute("disabled","disabled=true");
  //this.isVisible = !this.isVisible;
} 

  onDeleteMission(mission :Mission)
  {
    let confirm=window.confirm('Voulez vous vraiment supprimer cette association?');
    if(confirm == true) {
      this.associationService.deleteMission(mission.id_m)
        .subscribe(data => {
          console.log("Mission supprimée : "+mission.nom);
          this.ngOnInit();
    })
  }
}

  onEditMission(id:number)
  {
    this.router.navigate(['edit-mission',id])
  }

  accepter(miss:Mission,ben:Benevole)
  {
    this.associationService.accepterBenMiss(miss.id_m,ben)
      .subscribe(data => {
        console.log(data);
      })
  }

  refuser(miss:Mission,ben:Benevole)
  {
    this.associationService.refuserBenMiss(miss.id_m,ben)
      .subscribe(data => {
      })
  }


  seDeconnecter()
  {
    this.router.navigate(['authentification-association']);
  }

}
