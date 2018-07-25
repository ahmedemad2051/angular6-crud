import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'



import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AddSkillComponent} from './components/add-skill/add-skill.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { AllSkillsComponent } from './components/all-skills/all-skills.component';


import { AngularFireStorageModule } from 'angularfire2/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DetailsComponent } from './components/details/details.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addSkill', component: AddSkillComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mySkills', component: MySkillsComponent},
  {path: 'allSkills', component: AllSkillsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'userProfile', component: UserprofileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddSkillComponent,
    LoginComponent,
    RegisterComponent,
    MySkillsComponent,
    AllSkillsComponent,
    DetailsComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
