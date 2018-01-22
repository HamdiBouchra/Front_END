import {Mission} from "./model.mission";

export class associat{
  id:number;
  nom:string="";
  sigle:string="";
  objet_social:string="";
  tel:string="";
  email:string="";
  login:string="";
  mdp:string="";
  doc:string;
  etat:number;
  missions:Array<Mission>;
}
