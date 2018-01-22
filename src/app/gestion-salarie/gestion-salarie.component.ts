import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {associat} from "../../model/model.association";
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/model.entreprise';
import { Salarie } from '../../model/model.salarie';
import { loisir } from '../../model/model.loisir';
import { Mission } from '../../model/model.mission';

@Component({
  selector: 'app-gestion-salarie',
  templateUrl: './gestion-salarie.component.html',
  styleUrls: ['./gestion-salarie.component.css']
})
export class GestionSalarieComponent implements OnInit {

  idEntrep:number;
  entreprise:Entreprise=new Entreprise();
  salarie:Salarie=new Salarie();
  selectedSalarie= new  Salarie();
  selectedSalarie1= new  Salarie();
  selectedSalarie2= new  Salarie();
  listSalarie:any;
  listLoisirs:any;
  loisi:loisir=new loisir();
  getSal:Salarie=new Salarie();
  getSal2:Salarie=new Salarie();
  ListMission:any;
  ListLoisirSal:any;
  selected:string;
  selectedMiss:Mission=new Mission();
  constructor(public activatedRoute:ActivatedRoute,
    public entrepriseService:EntrepriseService,
    public router:Router) {

    this.idEntrep=this.activatedRoute.snapshot.params['id'];
    console.log("**************"+this.idEntrep+"***************");
    this.entrepriseService.getEntrepByID(this.idEntrep)
      .subscribe(data=>{
        this.entreprise=data;

      })
     }

  ngOnInit() {
    this.entrepriseService.listSalarie()
      .subscribe(data=>{
       this.listSalarie=data;
      })
    }

  saveSalarie()
  {
    console.log("**************"+this.entreprise.nom);
    this.entrepriseService.saveSalarie(this.idEntrep,this.salarie)
      .subscribe(data => {
        console.log("salarie ======="+this.salarie.nom);
        //console.log(data);
        alert("Salarie "+this.salarie.nom+"est ajoutée");
        this.salarie=new Salarie();
        this.ngOnInit();
      })
  }

  ListLoisir(sal:Salarie)
  {
    console.log("SAL Id =====>"+sal.id_sal);
    this.selectedSalarie=sal;
    this.entrepriseService.listLoisirs(this.selectedSalarie.id_sal)
    .subscribe(data => {
       this.listLoisirs=data;
    })
  }

 
  

  seDeconnecter()
  {
    this.router.navigate(['authentification-entreprise']);
  }

  saveSalarieLoisir()
  {
    alert(this.loisi.descript);
    this.entrepriseService.saveSalLoisir(this.selectedSalarie.id_sal,this.loisi)
    .subscribe(data => {
      this.selectedSalarie=data;
    })
}


affectationMissionSal(salar:Salarie)
{
  this.selectedSalarie1=salar;  
  this.entrepriseService.affectationMissionSal(this.selectedSalarie1.id_sal)
    .subscribe(data => {
    this.ListMission=data;
    })
}


associerMissionSalar(missi:Mission)
{
  alert("I AM HERE");
  this.selectedMiss=missi;
  this.entrepriseService.AssocierMissSal(this.selectedSalarie1.id_sal,missi)
    .subscribe(data => {
    })
}


consultSalLoisir(salar:Salarie)
{
  this.selectedSalarie2=salar;  
  this.entrepriseService.SalLoisirs(this.selectedSalarie2.id_sal)
    .subscribe(data => {
    this.ListLoisirSal=data;
    })
}

}
