import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";

  constructor() { }

  loginUser(token: string){
    localStorage.setItem("token", token)
    return true;
  }

  isLoggedIn(){
    // let     localStorage.getItem("token");
  }
}
