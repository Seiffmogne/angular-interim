import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { VerifCountService } from './services/verif-count.service';
import { MatNativeDateModule } from '@angular/material/core';

import { CategService } from './services/categ.service';
import { GiveEmailPService } from './services/give-email-p.service';
import { DeleteAccMissionComponent } from './delete-acc-mission/delete-acc-mission.component';
import { MesMissionsService } from './services/mes-missions.service';
import { AcceptMissionService } from './services/accept-mission.service';
import { AddUserService } from './services/add-user.service';
import { EntreAuthGuardService } from './services/entre-auth-guard.service';
import { AuthGardService } from './services/auth-gard.service';
import { MissionsService } from './services/missions.service';
import { WebRequestService } from './services/web-request.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
import { AddMissionComponent } from './add-mission/add-mission.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { WebReqIntercepterService } from './services/web-req-intercepter.service';
import { AddUserComponent } from './add-user/add-user.component';
import { MyMissionComponent } from './my-mission/my-mission.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoAccesComponent } from './no-acces/no-acces.component';
import { MesMissionsComponent } from './mes-missions/mes-missions.component';
import { MesMissionsCreateComponent } from './mes-missions-create/mes-missions-create.component';
import { MissionCreateEditComponent } from './mission-create-edit/mission-create-edit.component';
import { GiveEmailPassComponent } from './give-email-pass/give-email-pass.component';
import { SearchMissionComponent } from './search-mission/search-mission.component';
import { VerifComptComponent } from './verif-compt/verif-compt.component';
import { ParameterComponent } from './parameter/parameter.component';
import { CookiesStyleComponent } from './cookies-style/cookies-style.component';
import { SearchComponent } from './search/search.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddCategComponent } from './add-categ/add-categ.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MissionComponent,
    AddMissionComponent,
    AddUserComponent,
    MyMissionComponent,
    NoAccesComponent,
    MesMissionsComponent,
    MesMissionsCreateComponent,
    DeleteAccMissionComponent,
    MissionCreateEditComponent,
    GiveEmailPassComponent,
    SearchMissionComponent,
    VerifComptComponent,
    ParameterComponent,
    HomeComponent,
    EditExperienceComponent,
    CookiesStyleComponent,
    SearchComponent,
    ConfirmDeleteComponent,
    AddCategComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', 
      component: HomeComponent,
  
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'no-access',
      component:NoAccesComponent
    },
    {
      path:'missions/:id',
      component:MyMissionComponent

    },
    {
      path:'missions',
      component:MissionComponent
    },
    {
      path:"missionsSearch",
      component:SearchMissionComponent

    },
    {
      path:'motDePasseOublie',
      component:GiveEmailPassComponent

    },
    {
      path:'experience/:id',
      component:EditExperienceComponent,
      canActivate:[AuthGardService]

    },
    {
      path:'parameter',
      component:ParameterComponent,
      canActivate:[AuthGardService]

    },
    {
      path:'add-category',
      component:AddCategComponent,
      canActivate:[AuthGardService]

    },
    {
      path:'mesMissions/:myId',
      component:DeleteAccMissionComponent,
      canActivate:[AuthGardService]

    },
    {
      path:'mesMissions',
      component:MesMissionsComponent,
      canActivate:[AuthGardService]

    },
    {
      path:'mesMissionsEdit/:id',
      component:MissionCreateEditComponent,
      canActivate:[AuthGardService,EntreAuthGuardService]
      
    },
    {
      path:'addMissions',
      component:AddMissionComponent,
      canActivate:[AuthGardService,EntreAuthGuardService]

    },
    {
      path:'**',
      component:NotFoundComponent
    },
    
    ],{useHash:true}),
    NgbModule
  ],
  providers: [
    WebRequestService,
    MissionsService,
    AuthGardService,
    EntreAuthGuardService,
    WebReqIntercepterService,
    VerifCountService,
    AcceptMissionService,
    GiveEmailPService,
    MesMissionsService,
    CategService,
    AddUserService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {provide:HTTP_INTERCEPTORS,useClass:WebReqIntercepterService,multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
