import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import {AuthgourdService} from "./authgourd.service";
var rout=[
  {path:'',component:UserLoginComponent},
  {path:'home',component:NavComponent,canActivate:[AuthgourdService],
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:ProfileComponent}
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    UserLoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(rout),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
