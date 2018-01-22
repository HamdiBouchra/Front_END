
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {associat} from "../model/model.association";
import {administr} from "../model/model.admin";
import {Mission} from "../model/model.mission";
import { Benevole } from "../model/model.benevole";

@Injectable()
export class AssociationService{

  constructor(public http:Http){

  }
  getAssociation(motCl:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherAssociations?mc="+motCl+"&size="+size+"&page="+page)
      .map(resp=>resp.json());

  }

  ListeMissBen(id:number)
  {
    return this.http.get("http://localhost:8080/MissionBenevoles/"+id)
      .map(resp=>resp.json());
  }


  saveAss(ass:associat)
{
  return this.http.post("http://localhost:8080/associationSave",ass)
    .map(resp=>resp.json());
}

  getAssociat(id:number){
    return this.http.get("http://localhost:8080/associations/"+id)
      .map(resp=>resp.json());

  }

  updateAssoc(association:associat)
  {
    return this.http.put("http://localhost:8080/associationsModify/"+association.id,association)
      .map(resp=>resp.json());
  }


  delete(id:number)
  {
    return this.http.delete("http://localhost:8080/associations/"+id);
  }

  associationAttente()
  {
    return this.http.get("http://localhost:8080/AssociationEtatAtt?etat=0")
      .map(resp=>resp.json());
  }

  auth(admin:administr)
  {
    return this.http.post("http://localhost:8080/auth",admin)
      .map(resp=>resp.json());
  }

  authAss(assoc:associat)
  {
    return this.http.post("http://localhost:8080/authAsso",assoc)
      .map(resp=>resp.json());
  }
  /***************************** Missions *********************************/

  saveMiss(miss:Mission,assocId:number)
  {
    return this.http.post("http://localhost:8080/missionSave/"+assocId,miss)
      .map(resp=>resp.json());
  }

  getAssByLogMdp(association:associat)
  {
    return this.http.get("http://localhost:8080/AssByLogMdp?log="+association.login+"&mdp="+association.mdp)
      .map(resp=>resp.json());
  }

  ////
  getMissions(assocId:number)
  {
    return this.http.get("http://localhost:8080/ListMissions/"+assocId)
      .map(resp=>resp.json());
  }

  getMission(assocId:number)
  {
    return this.http.get("http://localhost:8080/missions/"+assocId)
      .map(resp=>resp.json());
  }

  /*deleteMission(assocId:number,missionId:number)
  {
    return this.http.delete("http://localhost:8080/deleteMission/"+assocId+"/"+missionId);
  }*/

  deleteMission(missionId:number)
  {
    return this.http.delete("http://localhost:8080/deleteMission/"+missionId);
  }

  allMiss(page:number,size:number)
  {
    return this.http.get("http://localhost:8080/ToutesMissions?"+"page="+page+"&size="+size)
      .map(resp=>resp.json());
  }

  sendMail(assoc:associat)
  {
    return this.http.post("http://localhost:8080/Email",assoc);
  }

  updateMiss(mission:Mission)
  {
    return this.http.put("http://localhost:8080/missionModify/"+mission.id_m,mission)
      .map(resp=>resp.json());
  }


  getAssocMiss(idmission:number)
  {
    return this.http.get("http://localhost:8080/GetAssocMiss/"+idmission)
      .map(resp=>resp.json());
  }


  accepterBenMiss(idMiss:number,benev:Benevole)
  {
    return this.http.put("http://localhost:8080/accepterBenevoleMiss/"+idMiss,benev)
    .map(resp=>resp.json());
  }

  refuserBenMiss(idMiss:number,benev:Benevole)
  {
    return this.http.put("http://localhost:8080/refuserBenevoleMiss/"+idMiss,benev);
  }

  missionEstSaturee()
  {
    return this.http.get("http://localhost:8080/missionEstSaturee")
      .map(resp=>resp.json());
  }

  benevoleMissionAccepte(idMiss:number)
  {
    return this.http.get("http://localhost:8080/bnvAcceptMission/"+idMiss)
      .map(resp=>resp.json());
  }

  ListDomaines()
  {
    return this.http.get("http://localhost:8080/DomainesMissions")
      .map(resp=>resp.json());
  }

  ListLieux()
  {
    return this.http.get("http://localhost:8080/VillesMissions")
      .map(resp=>resp.json());
  }

  ListBenevSexe()
  {
    return this.http.get("http://localhost:8080/BenevoleSexe")
      .map(resp=>resp.json());
  }

  ListAge()
  {
    return this.http.get("http://localhost:8080/BenevoleAge")
      .map(resp=>resp.json());
  }


}
