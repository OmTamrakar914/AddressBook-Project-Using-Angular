import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [CommonModule, MatIconModule], 
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent {
  people = [
    { fullname: "Varaza Mishra", address: "Marve Road, Next To Maniratna, Malad (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400064", phoneNumber: "02228017752" },
    { fullname: "Trishna Bhalla", address: "77,rd Fir,, Desaichambers, Nagdevi X Lane, Masjid Bunder (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400003", phoneNumber: "02223420607" },
    { fullname: "Anish Katkar", address: "473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" },
    { fullname: "Varaza Mishra", address: "Marve Road, Next To Maniratna, Malad (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400064", phoneNumber: "02228017752" },
    { fullname: "Trishna Bhatta", address: "77,rd Fir,, Desaichambers, Nagdevi X Lane, Masjid Bunder (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400003", phoneNumber: "02223420607" },
    { fullname: "Anish Kaskar", address: "473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" },
    { fullname: "Varaza Mishra", address: "Marve Road, Next To Maniratna, Malad (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400064", phoneNumber: "02228017752" },
    { fullname: "Trishna Bhull", address: "77,rd Fir,, Desaichambers, Nagdevi X Lane, Masjid Bunder (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400003", phoneNumber: "02223420607" },
    { fullname: "Anish Kaikkar", address: "473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" },
    { fullname: "Varaza Mishra", address: "144, Persipolis Bldg., Sec, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" },
    { fullname: "Varaza Mishra", address: "Marve Road, Next To Maniratna, Malad (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400064", phoneNumber: "02228017752" },
    { fullname: "Trishna Bhull", address: "77,rd Fir,, Desaichambers, Nagdevi X Lane, Masjid Bunder (west)", city: "Mumbai", state: "Maharashtra", zipCode: "400003", phoneNumber: "02223420607" },
    { fullname: "Anish Kaikkar", address: "473, Sector, Vardhaman Mkt, Sector, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" },
    { fullname: "Varaza Mishra", address: "144, Persipolis Bldg., Sec, Vashi, Navi Mumbai", city: "Mumbai", state: "Maharashtra", zipCode: "400705", phoneNumber: "02227893390" }
  ];

  constructor(private router: Router) {}

  addPerson() {
    this.router.navigate(['/add-person']);  // Navigate to the Add Person form
  }

  editPerson(index: number) {
    alert("Edit person functionality to be implemented for index: " + index);
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
