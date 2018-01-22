import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {AssociationService} from "../../services/association.service";
import {Router} from "@angular/router";
import {associat} from "../../model/model.association";

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  pageAssociations:any;
  association:associat;
  constructor(private http: Http,public associationSevice:AssociationService,
              public router:Router) {
    this.associationSevice.associationAttente()
      .subscribe(data=>{
          this.pageAssociations=data;
        }
      )
  }

  ngOnInit() {
  }

  Approuver(id:number)
  {
    this.router.navigate(['approbation',id]);
  }


  seDeconnecter()
  {
    this.router.navigate(['authentification']);
  }

}
