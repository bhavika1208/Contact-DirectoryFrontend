import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactViewComponent } from '../contact-view/contact-view.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  contactDetails: any;

  constructor(private http: HttpClient, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getContacts();
  }

  toggleFav(contactId: number, index: number) {
    this.http.put('http://localhost:8080/cd/contacts/favourite/' + contactId, {}).subscribe(
      (data) => {
        this.contactDetails[index]['favourite'] = !this.contactDetails[index]['favourite'];
        console.log(data);
      }
    );
  }


  getContacts() {
    this.http.get('http://localhost:8080/cd/contacts').subscribe(
      (data) => {
        this.contactDetails = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }

  addContact() {
    this.router.navigate(['/addContact'], { relativeTo: this.route });
  }


  viewContacts(contactId: number) {
    const modalRef = this.modalService.open(ContactViewComponent, { windowClass: 'modal-lg' });
    modalRef.componentInstance.contactId = contactId;
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  deleteContacts(contactId: number) {
    this.http.delete('http://localhost:8080/cd/contacts/' + contactId, {}).subscribe(
      (data) => {
        alert('Contact Deleted successfully');
        this.getContacts();
      },
      (error)=>{
        alert('could not delete Contact');
      }
    );
  }
}
