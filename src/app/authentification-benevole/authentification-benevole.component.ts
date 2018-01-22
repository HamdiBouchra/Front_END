import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AssociationService} from "../../services/association.service";
import {Benevole} from "../../model/model.benevole";
import {BenevoleService} from "../../services/benevole.service";

@Component({
  selector: 'app-authentification-benevole',
  templateUrl: './authentification-benevole.component.html',
  styleUrls: ['./authentification-benevole.component.css']
})
export class AuthentificationBenevoleComponent implements OnInit {


  benevole:Benevole=new Benevole();
  constructor(public activatedRoute:ActivatedRoute,
              public benevoleService:BenevoleService,
              public router:Router) { }

  ngOnInit() {
  }

  authentifBenevole()
  {
    this.benevoleService.authBen(this.benevole)
      .subscribe(data=>{
          console.log("dataa ===="+data);
          if(data == true)
          {
            this.benevoleService.getBenByLogMdp(this.benevole)
              .subscribe(data=> {
                this.benevole=data;
                alert("le benevole connectée est " + this.benevole.id_b);
                this.router.navigate(['mission-benevole',this.benevole.id_b]);
              })
          }
          else
            this.router.navigate(['authentification-benevole']);
        }
      )
  }
}
