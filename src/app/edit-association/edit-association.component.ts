import { Component, OnInit } from '@angular/core';
import {associat} from "../../model/model.association";
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";

@Component({
  selector: 'app-edit-association',
  templateUrl: './edit-association.component.html',
  styleUrls: ['./edit-association.component.css']
})
export class EditAssociationComponent implements OnInit {

  mode:number=1;
  association:associat=new associat();
  idAssoc:number;
  constructor(public activatedRoute:ActivatedRoute,
              public associationService:AssociationService,
              public router:Router) {
    //console.log(activatedRoute.snapshot.params['id']);
    this.idAssoc=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.associationService.getAssociat(this.idAssoc)
      .subscribe(data=>{
        this.association=data;
      })
  }


  updateContact()
  {
      this.associationService.updateAssoc(this.association)
        .subscribe(data=>{
          alert("Mise à jour effectuée");
          this.router.navigate(['associations']);
        })
  }

  onEditAssociation(id:number){


  }
}
