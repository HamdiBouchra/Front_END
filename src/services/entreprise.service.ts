import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {associat} from "../model/model.association";
import {administr} from "../model/model.admin";
import {Mission} from "../model/model.mission";
import { Benevole } from "../model/model.benevole";
import { experience } from "../model/model.experience";
import { Entreprise } from "../model/model.entreprise";
import { Salarie } from "../model/model.salarie";
import { loisir } from "../model/model.loisir";

@Injectable()
export class EntrepriseService{

  constructor(public http:Http){

  }


  saveEntreprise(entr:Entreprise)
  {
    return this.http.post("http://localhost:8080/entrepriseSave",entr)
      .map(resp=>resp.json());
  }


  authEntreprise(entrep:Entreprise)
  {
    return this.http.post("http://localhost:8080/authEntrep",entrep)
      .map(resp=>resp.json());
  }


  getEntrepByLogMdp(entrep:Entreprise)
  {
    return this.http.get("http://localhost:8080/EntrepByLogMdp?log="+entrep.login+"&mdp="+entrep.mdp)
      .map(resp=>resp.json());
  }

  getEntrepByID(id:number)
  {
    return this.http.get("http://localhost:8080/entreprises/"+id)
      .map(resp=>resp.json());
  }

  getSalarie(id:number)
  {
    return this.http.get("http://localhost:8080/salaries/"+id)
      .map(resp=>resp.json());
  }

  saveSalarie(idEntr:number,salar:Salarie)
  {
    return this.http.post("http://localhost:8080/salarieAdd/"+idEntr,salar)
      .map(resp=>resp.json());
  }

  listSalarie()
  {
    return this.http.get("http://localhost:8080/ListSalarie")
      .map(resp=>resp.json());
  }

  listLoisirs(idSal:number)
  {
    return this.http.get("http://localhost:8080/ListLoisir/"+idSal)
    .map(resp=>resp.json());
  }


  saveSalLoisir(idSal:number,lois:loisir)
  {
    return this.http.post("http://localhost:8080/LoisirSalarieAdd/"+idSal,lois)
      .map(resp=>resp.json());
  }


  affectationMissionSal(idSal:number)
 {
  return this.http.get("http://localhost:8080/affectSalMiss/"+idSal)
    .map(resp=>resp.json());
 }

 SalLoisirs(idSal:number)
 {
  return this.http.get("http://localhost:8080/salLoisirs/"+idSal)
    .map(resp=>resp.json());
 }

 AssocierMissSal(idSal:number,miss:Mission)
 {
  return this.http.post("http://localhost:8080/AssocierMissionSal/"+idSal,miss)
    .map(resp=>resp.json());
 }

}