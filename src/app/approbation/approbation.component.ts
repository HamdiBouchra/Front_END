import {Component, OnInit, Sanitizer, SecurityContext} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {associat} from "../../model/model.association";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-approbation',
  templateUrl: './approbation.component.html',
})
export class ApprobationComponent implements OnInit {

  idAssoc:number;
  association:associat=new associat();
  association2:associat=new associat();
  deleteAssoc:associat=new associat();
  d:SafeResourceUrl;
  type:String;
  base64:String;
  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router,private sanitizer: DomSanitizer) {
    this.idAssoc=activatedRoute.snapshot.params['id'];
  //  this.type="image/jpg";
   // this.base64="C:\\Users\\HAMDI\\Desktop\\18379062_1254049014692933_21816598_o"
  }

  ngOnInit() {
    this.associationService.getAssociat(this.idAssoc)
      .subscribe(data=>{
        this.association=data;
        this.d= this.sanitizer.bypassSecurityTrustResourceUrl("assets/images/"+this.association.doc);
      })
  }

  Accepter()
  {
    this.associationService.getAssociat(this.idAssoc)
      .subscribe(data=>{
        this.association=data;
        console.log("etat1 ==== "+this.association.etat);
        console.log("*********************"+this.association.nom);
        this.associationService.sendMail(this.association)
          .subscribe(data=>{
            console.log("etat1 ==== "+this.association.etat);
          })
      })
    this.association.etat=1;

    this.associationService.updateAssoc(this.association)
      .subscribe(data=>{
       this.association2=data;
        console.log("etat2 ==== "+this.association2.etat);
        alert("Le demande d'approbation de l'association"+this.association.nom+" est acceptée");
        this.router.navigate(['demandes']);
      })
  }


  Refuser()
  {
    this.associationService.getAssociat(this.idAssoc)
      .subscribe(data=>{
        this.association=data;
        this.associationService.delete(this.association.id)
          .subscribe(data => {
           alert("l'association est supprimée");
            this.router.navigate(['demandes']);
          })
      })
       // alert("Le demande d'approbation de l'association"+this.association.nom+" est refusée");
  }

  seDeconnecter()
  {
    this.router.navigate(['authentification']);
  }



}
