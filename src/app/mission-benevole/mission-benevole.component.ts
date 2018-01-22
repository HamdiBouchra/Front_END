import { Component, OnInit } from '@angular/core';
import {Mission} from "../../model/model.mission";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Benevole} from "../../model/model.benevole";
import {BenevoleService} from "../../services/benevole.service";

@Component({
  selector: 'app-mission-benevole',
  templateUrl: './mission-benevole.component.html',
  styleUrls: ['./mission-benevole.component.css']
})
export class MissionBenevoleComponent implements OnInit {

  currentLesson:string;

  classes = [
{
  name: 'string',
  level: 'string',
  code: 'number',
  currentLesson: '1'
}]

  allMissions: any;
  pages:Array<number>;
  currentPage:number=0;
  num:number;
  MissionData:Array<Mission>=[];
  MissionBenv:Array<Mission>=[];
  MissionSaturee:Array<Mission>=[];
  d:SafeResourceUrl;
  tabImages:Array<SafeResourceUrl>=[];
  i:number=0;
  size:number=3;
  idBen:number;
  benevole:Benevole=new Benevole();
  public isVisible: boolean = true;
  buttonDisabled:boolean;
   constructor(public activatedRoute:ActivatedRoute,
              public benevoleService:BenevoleService,
              public associationService:AssociationService,
              public router:Router
    ,private sanitizer: DomSanitizer) {
    this.idBen=this.activatedRoute.snapshot.params['id'];

    this.benevoleService.getBenevole(this.idBen)
      .subscribe(data=>{
        this.benevole=data;
      })
      this.currentLesson=this.classes[0].currentLesson;
      this.missions();

  }

  ngOnInit() {
    this.idBen=this.activatedRoute.snapshot.params['id'];
    

    this.benevoleService.estBebevoleMiss(this.idBen)
    .subscribe(data => {
      this.MissionBenv=data;
      console.log("=========> IAM HERE");
      if(this.MissionBenv != null)
      {
      for(let Mission of this.MissionBenv)
        {
          console.log("=========> "+Mission.id_m);
          if( document.getElementById("btn"+Mission.id_m) != null )
             document.getElementById("btn"+Mission.id_m).setAttribute("disabled","disabled=true");
          else
          {
            this.missions();
            document.getElementById("btn"+Mission.id_m).setAttribute("disabled","disabled=true");
          }
        } 
    }})

    this.associationService.missionEstSaturee()
      .subscribe(data => {
        console.log(data);
        this.MissionSaturee=data;
        if(this.MissionSaturee != null)
        {
        for(let Mission of this.MissionSaturee)
          {
            console.log("SATUREE=======> "+Mission.id_m);
            if( document.getElementById("btn"+Mission.id_m) != null )
            {
              //console.log( document.getElementById("btn"+Mission.id_m))
               document.getElementById("btn"+Mission.id_m).textContent ="Mission Saturée";
            }
          } 
      }})



  }

  missions()
  {
    this.idBen=this.activatedRoute.snapshot.params['id'];
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

  toggle(id:number) {
    document.getElementById("btn"+id).setAttribute("disabled","disabled=true");
    //this.isVisible = !this.isVisible;
} 

 

seDeconnecter()
{
  this.router.navigate(['authentification-benevole']);
}


  goToPage(i:number)
  {
    console.log("current page is "+i);
    this.currentPage=i;
    this.missions();
  }
/* EstBebenoleMiss(idbn:number,miss:Mission)
  {
    idbn=this.idBen;
    console.log("ID ==========>"+idbn);
    this.benevoleService.estBebevoleMiss(miss,idbn)
      .subscribe(data => {
        if(data == true)
        {
          //this.buttonDisabled= true;}
          document.getElementById("btn"+miss.id_m).setAttribute("disabled","disabled=true");
          return true;
      }
       else return false;
      // this.buttonDisabled=false;
      })
  }
*/
  participer(mission:Mission)
  {
    console.log("**************"+this.benevole.nom);
    this.benevoleService.participer(mission,this.benevole.id_b)
      .subscribe(data => {
        //console.log("association ======="+this.association.nom);
        console.log(data);
        //document.getElementById("btn"+mission.id_m).setAttribute("disabled","disabled=true");
       // this.currentLesson = '1';
       // this.ngOnInit();
//this.dis=true;
        this.ngOnInit();
      })     
  }


  show()
  {
    console.log("===================> oooooooooooooooooooooh");
  }

  goToExperience()
  {
    this.router.navigate(['experiences',this.idBen]);
  }

}
