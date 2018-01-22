import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalComponent } from './_directives/index';
import { ModalService } from './_services/index';
import { HomeComponent } from './home/index';
import { TestPageComponent } from './test-page/index';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AssociationsComponent } from './associations/associations.component';
import { AboutComponent } from './about/about.component';
import {RouterModule,Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AssociationService} from "../services/association.service";
import {FormsModule} from "@angular/forms";
import { EditAssociationComponent } from './edit-association/edit-association.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ApprobationComponent } from './approbation/approbation.component';
import { ServeComponent } from './serve/serve.component';
import { InscriptionAssociationComponent } from './inscription-association/inscription-association.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MissionsComponent } from './missions/missions.component';
import { GestionMissionComponent } from './gestion-mission/gestion-mission.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationAssociationComponent } from './authentification-association/authentification-association.component';
import { EspaceAssociationComponent } from './espace-association/espace-association.component';
import { AuthentificationBenevoleComponent } from './authentification-benevole/authentification-benevole.component';
import { EspaceBenevoleComponent } from './espace-benevole/espace-benevole.component';
import {BenevoleService} from "../services/benevole.service";
import { EditMissionComponent } from './edit-mission/edit-mission.component';
import { MissionBenevoleComponent } from './mission-benevole/mission-benevole.component';
import { ModalMissBenComponent } from './modal-miss-ben/modal-miss-ben.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceService } from '../services/experience.service';
import { EntrepriseService } from '../services/entreprise.service';
import { InscriptEntrepriseComponent } from './inscript-entreprise/inscript-entreprise.component';
import { EspaceEntrepriseComponent } from './espace-entreprise/espace-entreprise.component';
import { AuthentifEntrepriseComponent } from './authentif-entreprise/authentif-entreprise.component';
import { GestionSalarieComponent } from './gestion-salarie/gestion-salarie.component';
import { AdminStatistiqueComponent } from './admin-statistique/admin-statistique.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StatistiqueMissionComponent } from './statistique-mission/statistique-mission.component';
import { StatistiqueBenevoleComponent } from './statistique-benevole/statistique-benevole.component';
//import { EntrepriseInscriptionComponent } from './entreprise-inscription/entreprise-inscription.component';


const appRoutes:Routes = [
  {path:'about',component:AboutComponent},
  {path:'editAssociation/:id',component:EditAssociationComponent},
  {path:'associations',component:AssociationsComponent},
  {path:'demandes',component:DemandesComponent},
  {path:'approbation/:id',component:ApprobationComponent},
  {path:'inscription-association',component:InscriptionAssociationComponent},
  {path:'authentification',component:AuthentificationComponent},
  {path:'missions/:id',component:MissionsComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'authentification-association',component:AuthentificationAssociationComponent},
  {path:'espace-association',component:EspaceAssociationComponent},
  {path:'authentification-benevole',component:AuthentificationBenevoleComponent},
  {path:'espace-benevole',component:EspaceBenevoleComponent},
  {path:'edit-mission/:id',component:EditMissionComponent},
  {path:'mission-benevole/:id',component:MissionBenevoleComponent},
  {path:'modalBenMiss',component:ModalMissBenComponent},
  {path:'home',component:HomeComponent},
  {path:'experiences/:id',component:ExperiencesComponent},
  {path:'entreprise-inscription',component:InscriptEntrepriseComponent},
  {path:'espace-entreprise',component:EspaceEntrepriseComponent},
  {path:'authentification-entreprise',component:AuthentifEntrepriseComponent},
  {path:'gestion-salarie/:id',component:GestionSalarieComponent},
  {path:'statistiques',component:StatistiquesComponent},
  {path:'statistiques-mission',component:StatistiqueMissionComponent},
  {path:'statistiques-benevoles',component:StatistiqueBenevoleComponent},
  {path:'',
    redirectTo:'/acceuil',
    pathMatch:'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    AssociationsComponent,
    AboutComponent,
    EditAssociationComponent,
    DemandesComponent,
    ApprobationComponent,
    ServeComponent,
    InscriptionAssociationComponent,
    AuthentificationComponent,
    MissionsComponent,
    GestionMissionComponent,
    AcceuilComponent,
    AuthentificationAssociationComponent,
    EspaceAssociationComponent,
    AuthentificationBenevoleComponent,
    EspaceBenevoleComponent,
    EditMissionComponent,
    MissionBenevoleComponent,
    ModalMissBenComponent,
    ModalComponent,
    HomeComponent,
    TestPageComponent,
    ExperiencesComponent,
    InscriptEntrepriseComponent,
    EspaceEntrepriseComponent,
    AuthentifEntrepriseComponent,
    GestionSalarieComponent,
    AdminStatistiqueComponent,
    StatistiquesComponent,
    StatistiqueMissionComponent,
    StatistiqueBenevoleComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule,ChartsModule
  ],
  providers: [AssociationService,BenevoleService,ModalService,ExperienceService,EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
