import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {getUrlScheme} from "@angular/compiler";
import {AssociationService} from "../../services/association.service";
import {associat} from "../../model/model.association";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {

  pageAssociations: any;
  motCle :string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;
  association:associat=new associat();
  constructor(private http: Http,public associationSevice:AssociationService,
              public router:Router) {
  }

  onFileChange(event) {

      let file = event.target.files[0];
      let fileName = file.name;
      console.log("********* file name =="+fileName);
       this.association.doc=fileName;
    console.log("********* asso doc  =="+this.association.doc);
  }



  ngOnInit() {
   /*  this.associationSevice.getAssociation("",0,5)
       .subscribe(data=>{
         this.pageAssociations=data;
       }
       )*/
  }

  doSearch(){
    console.log("mot cle ===="+this.motCle)
    this.associationSevice.getAssociation(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
          this.pageAssociations=data;
          this.pages=new Array(data.totalPages);
        }
      )
  }
  chercher(){
     this.doSearch();
  }

  goToPage(i:number)
  {
    console.log("current page is "+i);
    this.currentPage=i;
    this.doSearch();
  }

  saveAssociation()
  {
    console.log(this.association);
    this.association.etat=1;
    this.associationSevice.saveAss(this.association)
      .subscribe(data => {
        console.log(data);
        alert("Association ajoutée");
        this.association=new associat();
      })
  }

  onSaveAssociation(dataForm)
  {
    this.associationSevice.saveAss(dataForm)
      .subscribe(data => {
        console.log(data)
      })
  }

  onEditAssociation(id:number)
  {
    this.router.navigate(['editAssociation',id])
  }

  onDeleteAssociation(ass:associat)
  {
    let confirm=window.confirm('Voulez vous vraiment supprimer cette association?');
    if(confirm == true) {
      this.associationSevice.delete(ass.id)
        .subscribe(data => {
          this.pageAssociations.content.splice(this.pageAssociations.content.indexOf(ass), 1);
        })
    }
  }

  seDeconnecter()
  {
    this.router.navigate(['authentification']);
  }



}
