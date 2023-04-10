import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  // contactName : any = "";
  contactForm : any;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
    }
    
    initForm() {
      let contactName = '';
      let phoneDetails = new FormArray([]);
      let emailsDetails = new FormArray([]);
      let addressDetails = new FormArray([]);
  
      this.contactForm = new FormGroup({
        'contactName': new FormControl(contactName, Validators.required),
        'phones': phoneDetails,
        'emails': emailsDetails,
        'addresses': addressDetails
      });
      
  }

  ngOnInit(): void {
    this.initForm();
  }



  onBack() {
    this.router.navigate(['../homeComponent'], { relativeTo: this.route });
  }

  addPhonetDetails() {
    (<FormArray>this.contactForm.get('phones')).push(
      new FormGroup({
        phoneType: new FormControl(null, Validators.required),
        phoneNo: new FormControl(null, Validators.required),
      })
    );
  }

  removePhoneDetails(index: number) {
    (<FormArray>this.contactForm.get('phones')).removeAt(index);
  }

  addEmailDetails() {
    (<FormArray>this.contactForm.get('emails')).push(
      new FormGroup({
        emailType: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
      })
    );
  }

  removeEmailDetails(index: number) {
    (<FormArray>this.contactForm.get('emails')).removeAt(index);
  }

  addAddressDetails() {
    (<FormArray>this.contactForm.get('addresses')).push(
      new FormGroup({
        address: new FormControl(null, Validators.required),
        addressCity: new FormControl(null, Validators.required),
        addressState: new FormControl(null, Validators.required),
        addressPincode: new FormControl(null, Validators.required),
      })
    );
  }

  removeAddressDetails(index: number) { 
    (<FormArray>this.contactForm.get('addresses')).removeAt(index);
  }


  onSubmit() {
    let contactName = this.contactForm.value['contactName'];
    let phoneDetails = this.contactForm.value['phones'];
    let emailDetails = this.contactForm.value['emails'];
    let addressDetails = this.contactForm.value['addresses'];

    let details = {
      "userId" : 1,
      "contactName" : contactName,
      "phones" : phoneDetails,
      "emails" : emailDetails,
      "addresses" : addressDetails
    }

    this.http
      .post('http://localhost:8080/cd/contacts', details)
      .subscribe((data) => {
        console.log(data);
        let data2 : any = data;
          if (data2.success === true) {
            alert('Merchant Added Successfully!!!');
            this.contactForm.reset();
            this.router.navigate(['../'], { relativeTo: this.route });
          } else {
            alert(data2['message']);
            this.contactForm.reset();
          }
      });
  }

}
