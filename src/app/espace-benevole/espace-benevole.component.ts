import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Benevole} from "../../model/model.benevole";
import {BenevoleService} from "../../services/benevole.service";

@Component({
  selector: 'app-espace-benevole',
  templateUrl: './espace-benevole.component.html',
  styleUrls: ['./espace-benevole.component.css']
})
export class EspaceBenevoleComponent implements OnInit {

  benevole:Benevole=new Benevole();
  constructor(public activatedRoute:ActivatedRoute,
              public benService:BenevoleService,
              public router:Router) { }

  ngOnInit() {
  }



  savebenevole()
  {
    this.benService.saveBenevole(this.benevole)
      .subscribe(data => {
        console.log(data);
        this.benevole=new Benevole();
        alert("Votre inscription s'est bien effectuée");
        this.router.navigate(['authentification-benevole'])
      })
  }

}
