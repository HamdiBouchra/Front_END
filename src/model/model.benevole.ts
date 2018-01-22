
import {Mission} from "./model.mission";

export class Benevole{
  id_b:number;
  nom:string="";
  prenom:string="";
  date:string="";
  email:string="";
  tel:string="";
  sexe:string="";
  situationF:string="";
  login:string="";
  mdp:string="";
  missions:Array<Mission>;
}
