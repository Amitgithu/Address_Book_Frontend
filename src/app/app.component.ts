import { Component } from '@angular/core';
import { AddressBookComponent } from './components/address-book/address-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddressBookComponent], // ✅ Import AddressBookComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book';
}
