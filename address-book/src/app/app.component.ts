import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark as standalone
  imports: [RouterModule],  // ✅ Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Address Book';
}
