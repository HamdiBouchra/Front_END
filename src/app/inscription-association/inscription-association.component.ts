import { Component, OnInit } from '@angular/core';
import {associat} from "../../model/model.association";
import {AssociationService} from "../../services/association.service";

@Component({
  selector: 'app-inscription-association',
  templateUrl: './inscription-association.component.html',
  styleUrls: ['./inscription-association.component.css']
})
export class InscriptionAssociationComponent implements OnInit {

  associa:associat=new associat();
  association:associat=new associat();
  constructor(public associationSevice:AssociationService) { }

  ngOnInit() {
  }


  onFileChange(event) {

    let file = event.target.files[0];
    let fileName = file.name;
    console.log("********* file name =="+fileName);
    this.association.doc=fileName;
    console.log("********* asso doc  =="+this.association.doc);
  }
  saveAssociation()
  {
    console.log(this.association);
    this.associationSevice.saveAss(this.association)
      .subscribe(data => {
        console.log(data);
        alert("Association ajoutée");
        this.associa=data;
      /*  this.associationSevice.sendMail(this.associa)
        .subscribe(data => {
          console.log(data);
        })*/

      })
  }

}
