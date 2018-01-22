import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {associat} from "../../model/model.association";

@Component({
  selector: 'app-authentification-association',
  templateUrl: './authentification-association.component.html',
  styleUrls: ['./authentification-association.component.css']
})
export class AuthentificationAssociationComponent implements OnInit {


  association:associat=new associat();
  associationSession:associat=new associat();
  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router) { }

  ngOnInit() {
  }


  authentif()
  {
    this.associationService.authAss(this.association)
      .subscribe(data=>{
          console.log("dataa ===="+data);
          if(data == true)
          {
            this.associationService.getAssByLogMdp(this.association)
              .subscribe(data=> {
                this.associationSession=data;
                alert("l'association connectée est " + this.associationSession.nom);
                this.router.navigate(['missions',this.associationSession.id]);
              })
          }
        else
            this.router.navigate(['authentification-association']);
        }
      )
  }

}
