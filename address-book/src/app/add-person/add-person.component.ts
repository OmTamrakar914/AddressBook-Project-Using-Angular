import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {
  @Output() personAdded = new EventEmitter<any>();

  person = {
    fullName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  };

  cities = ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'];
  states = ['Maharashtra', 'Delhi', 'Karnataka', 'West Bengal'];

  onSubmit() {
    this.personAdded.emit(this.person);
    this.person = { fullName: '', phoneNumber: '', address: '', city: '', state: '', zipCode: '' };
  }
  constructor(private location: Location) {}
  // goBack() {
  //   this.personAdded.emit(null);
  // }
  goBack() {
    this.location.back(); // ✅ Navigates to the previous page
  }
}
