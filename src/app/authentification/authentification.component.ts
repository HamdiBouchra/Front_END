import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {AssociationService} from "../../services/association.service";
import {Router} from "@angular/router";
import { administr} from "../../model/model.admin";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  administrateur:administr=new administr();
  constructor(private http: Http,public associationSevice:AssociationService,
              public router:Router) { }

  ngOnInit() {
  }


  authentif()
  {
    console.log("log =="+this.administrateur.login+" and mdp == "+this.administrateur.mdp);
    this.associationSevice.auth(this.administrateur)
      .subscribe(data=>{
        console.log("dataa ===="+data);
          if(data == true)
            this.router.navigate(['associations']);
          else
            this.router.navigate(['authentification']);
        }
      )
  }

}
