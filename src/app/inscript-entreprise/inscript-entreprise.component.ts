import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Benevole} from "../../model/model.benevole";
import {BenevoleService} from "../../services/benevole.service";
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/model.entreprise';


@Component({
  selector: 'app-inscript-entreprise',
  templateUrl: './inscript-entreprise.component.html',
  styleUrls: ['./inscript-entreprise.component.css']
})
export class InscriptEntrepriseComponent implements OnInit {

  entreprise:Entreprise=new Entreprise();

  constructor(public activatedRoute:ActivatedRoute,
    public entrepriseService:EntrepriseService,
    public router:Router) { }

  ngOnInit() {
  }

  saveEntreprise()
  {
    this.entrepriseService.saveEntreprise(this.entreprise)
      .subscribe(data => {
        console.log(data);
        this.entreprise=new Entreprise();
        alert("Votre inscription s'est bien effectuée");
      })
  }

}
