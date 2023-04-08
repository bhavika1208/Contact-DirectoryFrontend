import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit{

  contactDetail: any;
  city : any;
  state : any;
  @Input() contactId!: number;
  flag = false;

  constructor(private http : HttpClient, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.getContactDetails(this.contactId);
}

  getContactDetails(contactId : number) {
    this.http.get('http://localhost:8080/cd/contacts/'+contactId, {}).subscribe(
      (data)=>{
        this.contactDetail = data;
        this.http.get('http://localhost:8080/cd/cities/city/'+this.contactDetail.addresses[0].addressCity, {}).subscribe(
          (data2)=>{            
            this.city = data2;
          }
        )
        // this.http.get('http://localhost:8080/cd/cities/city/'+this.contactDetail.addressCity, {}).subscribe(
        //   (data2)=>{
        //     this.city = data2;
        //   }
        // )
        this.flag = true;
        console.log(data);
      }, (error)=>{
        console.log(error);
      }
    );
  }
}
