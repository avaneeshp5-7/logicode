import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../matchpassword';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  user: any;
  uid: any;
  errmsg:string;
  registerForm: FormGroup;
  updateForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private user_service:UserServiceService,private rout:Router) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(10),Validators.maxLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('Password', 'confirmPassword')
      
    })
    // this.get_user();
  }
  get f() {
    return this.registerForm.controls
  }
  mySubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var data = (this.registerForm.value);
    this.user_service.user_register(data).subscribe(dt => {
      if(dt['success'] == true) {
        alert("Registered !")
        this.rout.navigateByUrl('/');
      }
      else {
        this.errmsg="Duplicate Email found please try with an othor email id"
        this.rout.navigateByUrl('/register');
      }
    })
  }
}

