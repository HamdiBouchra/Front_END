import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {associat} from "../model/model.association";
import {administr} from "../model/model.admin";
import {Mission} from "../model/model.mission";
import { Benevole } from "../model/model.benevole";
import { experience } from "../model/model.experience";

@Injectable()
export class ExperienceService{

  constructor(public http:Http){

  }


  saveExperience(expr:experience,missId:number,idBenv:number)
  {
    return this.http.post("http://localhost:8080/missionExperience/"+idBenv+"/"+missId,expr)
      .map(resp=>resp.json());
  }
}