import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
