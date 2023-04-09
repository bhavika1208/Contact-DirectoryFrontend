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
  city2 : any;
  city3 : string[] = [];
  state2 : any;
  state3 : string[] = [];
  i = 0;

  constructor(private http : HttpClient, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.getContactDetails(this.contactId);
}

  getContactDetails(contactId : number) {
    this.http.get('http://localhost:8080/cd/contacts/'+contactId, {}).subscribe(
      (data)=>{
        this.contactDetail = data;
        if(this.contactDetail.addresses.length > 0){
          for(let address of this.contactDetail.addresses){
            this.http.get('http://localhost:8080/cd/cities/city/'+address.addressCity, {}).subscribe(
            (data2)=>{ 
              this.city2 = data2;         
              this.city3.push(this.city2.cityName);
            }
          )
          }
          for(let address of this.contactDetail.addresses){
            this.http.get('http://localhost:8080/cd/states/'+address.addressState, {}).subscribe(
            (data2)=>{ 
              this.state2 = data2;
              this.state3.push(this.state2.stateName);
            }
          )
          }
          console.log(this.state3);
        }

        this.flag = true;
        console.log(data);
      }, (error)=>{
        console.log(error);
      }
    );
  }
}
