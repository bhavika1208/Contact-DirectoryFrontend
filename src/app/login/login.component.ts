import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : any;
  // credentials : any;
  // credentials = {
  //   useremail : '',
  //   password : ''
  // }

  constructor (){
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let useremail = '';
    let userpassword = ''

    this.loginForm = new FormGroup({
      // 'contactName': new FormControl(contactName, Validators.required),
      'userEmail': new FormControl(useremail, Validators.required),
      'userPassword': new FormControl(userpassword, Validators.required)

    });
    
}

  onSubmit(){

    let useremail = this.loginForm.value['userEmail'];
    let userPassword = this.loginForm.value['userPassword'];

    let details = {
      'useremail': useremail,
      'userPassword' : userPassword
    }

    if((details.useremail != '' && details.userPassword != '') && (details.useremail != null && details.userPassword != null)){
      console.log("submit");
    }
    else{
      console.log("enter valid data");
      
    }
    
  }
}
