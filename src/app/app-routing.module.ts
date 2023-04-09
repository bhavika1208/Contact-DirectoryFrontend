import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path: 'addContact', component: AddContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
