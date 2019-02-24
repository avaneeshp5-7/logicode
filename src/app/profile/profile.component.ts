import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service"
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid: any;
  userinfo: any;
  currentuser: any
  dt: any;
  userdetails: any;
  pro_flag:boolean=true;
  pro_edit:boolean=false
  name:any;
  email:any;
  contact:any;
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
    this.pro_flag=true
    this.currentuser = localStorage.getItem('currentUser');
    this.userinfo = JSON.parse(this.currentuser);
    this.userid = this.userinfo[0]['id'];
    this.dt = { id: this.userid }
    this.service.getProfile(this.dt).subscribe(dt => {
    this.userdetails = dt;
    console.log(this.userdetails['result'][0]['name']);
    })
  }

  funUpdate(){
    this.pro_flag=false
    this.pro_edit=true 
    this.name=this.userdetails['result'][0]['name']
    this.email=this.userdetails['result'][0]['email']
    this.contact=this.userdetails['result'][0]['contact']
  }
  updateProfile(form1) {
    if (form1.valid)
    {
    this.service.update_Profile([this.dt,{name:this.name,email:this.email,contact:this.contact}]).subscribe(dt=>{
      if(dt['success']==true)
      {
        alert("Update Succefull")
        this.pro_flag=true
        this.pro_edit=false 
        this.getProfile();
      }
    })
    }
    else{
      alert("Eneter All Fields Value")
    }
  }
  funCencel(){
    this.pro_flag=true
    this.pro_edit=false 
  }
}
