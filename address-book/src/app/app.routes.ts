import { Routes } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddPersonComponent } from './add-person/add-person.component';

export const routes: Routes = [
  { path: '', component: AddressBookComponent },
  { path: 'add-person', component: AddPersonComponent }
];
