import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './url';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }
  loginService(data) {
    console.log("Frm service")
    return this.http.post(URL.postuser,data);
  }
  getProfile(id){
    return this.http.post(URL.get_profile,id);
  }
  update_Profile(id){
    return this.http.post(URL.update_profile,id)
  }
}
