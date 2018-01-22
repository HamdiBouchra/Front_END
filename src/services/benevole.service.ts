

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {associat} from "../model/model.association";
import {administr} from "../model/model.admin";
import {Mission} from "../model/model.mission";
import { Benevole} from "../model/model.benevole";

@Injectable()
export class BenevoleService {

  constructor(public http: Http) {

  }

  saveBenevole(ben: Benevole) {
    return this.http.post("http://localhost:8080/benevoleSave", ben)
      .map(resp => resp.json());
  }

  authBen(benev:Benevole)
  {
    return this.http.post("http://localhost:8080/authben",benev)
      .map(resp=>resp.json());
  }

  getBenByLogMdp(benev:Benevole)
  {
    return this.http.get("http://localhost:8080/BenByLogMdp?log="+benev.login+"&mdp="+benev.mdp)
      .map(resp=>resp.json());
  }


  getBenevole(benId:number)
  {
    return this.http.get("http://localhost:8080/benevole/"+benId)
      .map(resp=>resp.json());
  }

  participer(miss:Mission,BenId:number)
  {
    return this.http.post("http://localhost:8080/missionBenevoleParticiper/"+BenId,miss)
      .map(resp=>resp.json());
  }

  estBebevoleMiss(BenId:number)
  {
    return this.http.get("http://localhost:8080/estBenevMiss/"+BenId)
      .map(resp=>resp.json());
  }

  MyMissBenv(BenId:number)
  {
    return this.http.get("http://localhost:8080/MesMissionsParticiper/"+BenId)
      .map(resp=>resp.json());
  }

 
}
