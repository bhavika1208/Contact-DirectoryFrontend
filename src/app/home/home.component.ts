import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{


  contactDetails: any;

  constructor(private http : HttpClient){
  }

  ngOnInit(): void {
      this.getContacts();
  }

  // favourite = true;

  toggleFav(contactId : number){
    this.http.put('http://localhost:8080/cd/contacts/favourite/'+contactId, {}).subscribe(
      (data)=>{
        console.log(data);
        this.getContacts();
      }
    );
  }


getContacts() {
  this.http.get('http://localhost:8080/cd/contacts').subscribe(
    (data)=>{
      this.contactDetails = data;
      console.log(data);
    }, (error)=>{
      console.log(error);
    }
  );
}

}
