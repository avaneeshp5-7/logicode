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
  first_name:any;
  middle_name:any;
  last_name:any;
  Email:any;
  contact:any;
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
    this.pro_flag=true
    this.service.getProfile().then(dt => {
    this.userdetails = dt['result'];
    })
  }

  funUpdate(data){
    this.pro_edit=true 
    this.first_name=data.first_name
    this.middle_name=data.middle_name
    this.last_name=data.last_name
    this.Email=data.Email
    this.contact=data.contact,
    this.userid=data._id
  }
  updateProfile(form1) {
    if (form1.valid)
    {
    this.service.update_Profile([{_id:this.userid},{first_name:this.first_name,middle_name:this.middle_name,last_name:this.last_name,Email:this.Email,contact:this.contact}]).subscribe(dt=>{
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
    this.pro_edit=false 
  }
  funDelete(id){
    this.service.user_Remove({_id:id}).subscribe(dt=>{
      alert("Remove Successfully")
      this.getProfile();
    })
  }
}
