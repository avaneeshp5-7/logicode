import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AuthgourdService} from "./authgourd.service";
import { RegisterComponent } from './register/register.component';
var rout=[
  {path:'',component:UserLoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthgourdService]}
]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserLoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(rout),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
