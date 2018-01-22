import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {associat} from "../../model/model.association";
import { EntrepriseService } from '../../services/entreprise.service';
import { Entreprise } from '../../model/model.entreprise';

@Component({
  selector: 'app-authentif-entreprise',
  templateUrl: './authentif-entreprise.component.html',
  styleUrls: ['./authentif-entreprise.component.css']
})
export class AuthentifEntrepriseComponent implements OnInit {

  entreprise:Entreprise=new Entreprise();
  entrepriseSession:Entreprise=new Entreprise();
  constructor(public activatedRoute:ActivatedRoute,
    public entrepriseService:EntrepriseService,
    public router:Router) { }

  ngOnInit() {
  }


  authentif()
  {
    this.entrepriseService.authEntreprise(this.entreprise)
      .subscribe(data=>{
          console.log("dataa ===="+data);
          if(data == true)
          {
            this.entrepriseService.getEntrepByLogMdp(this.entreprise)
              .subscribe(data=> {
                this.entrepriseSession=data;
                alert("l'association connectée est " + this.entrepriseSession.nom);
                this.router.navigate(['gestion-salarie',this.entrepriseSession.id_entr]);
              })
          }
        
      
  }
)
}
}
