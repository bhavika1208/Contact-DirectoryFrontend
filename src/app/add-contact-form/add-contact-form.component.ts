import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  contactName : any = "";
  contactForm : FormGroup = new FormGroup({});
  constructor() {
    
  }

  initForm(){
    // contactName = "";
    // contactForm = new FormGroup({
    //   contactName: new FormControl(this.contactName),
    //   thePhones : new FormArray([

    //   ]),
    //   theEmail : new FormArray([

    //   ]),
    //   theAddress : new FormArray([

    //   ])
    // });
  }

  ngOnInit(): void {
    this.initForm();
  }

  

  onBack(){

  }

  onSubmit(){
    let data = {
      // "addressDetails" : this.merchantForm.value['theAddress'];
    }
  }

  addPhonetDetails(){

  }

  removePhoneDetails(){

  }

  addEmailDetails(){

  }

  removeEmailDetails(){

  }

  addAddressDetails(){

  }
  
  removeAddressDetails(){

  }

}
