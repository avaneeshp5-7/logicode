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
    return this.http.post(URL.postuser,data)
  }
  getProfile(){
    return this.http.get(URL.get_profile).toPromise();
  }
  update_Profile(id){
    return this.http.post(URL.update_profile,id)
  }
  user_register(data){
    return this.http.post(URL.user_register,data)
  }
  user_Remove(data){
    return this.http.post(URL.user_remove,data)
  }
}
