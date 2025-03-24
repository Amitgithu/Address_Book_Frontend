import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { AddressBookComponent } from './components/address-book/address-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AddressBookComponent], // ✅ Add RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book';
}
