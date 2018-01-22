import {associat} from "./model.association";

export class Mission{
  id_m:number;
  nom:string="";
  description:string="";
  domaine:string="";
  lieu:string="";
  date:string="";
  nbrParticip:number;
  nbrParticipFix:number;
  imag:string;
  missions:Array<Mission>;
}
