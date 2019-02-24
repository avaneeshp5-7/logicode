import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from "../user-service.service"

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  msg1;msg2
  model:any;
  email:any;
  password:any;
  userinfo:any
  constructor(private rout:Router,private service:UserServiceService) { }

  ngOnInit() {
  }
  
  funLogin(formdata){
    if (formdata.valid)
    {
      var data={email:this.email,password:this.password}
      this.service.loginService(data).subscribe(dt=>{
      if(dt['success']==true){
        this.userinfo=dt['result'];
        localStorage.setItem('currentUser',JSON.stringify(this.userinfo));
        this.rout.navigateByUrl('/home');
      }
      else{
        alert('Wrong Credentials')
      }
    })
    }
    else{
      this.msg1="Enter User name"
      this.msg2="Enter Password"
    }
}
focus:any;
focusMethod(){
 this.focus="Plz Enter Valid email"
}
}
