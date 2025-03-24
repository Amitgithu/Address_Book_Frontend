import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent {
  contacts: Contact[] = [];
  newContact: Contact = this.getEmptyContact();
  editingIndex: number | null = null; // ✅ Declare editingIndex

  getEmptyContact(): Contact {
    return {
      fullname: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    };
  }

  addOrUpdateContact() {
    if (this.validateContact(this.newContact)) {
      if (this.editingIndex !== null) {
        // ✅ Update existing contact
        this.contacts[this.editingIndex] = { ...this.newContact };
        this.editingIndex = null;
      } else {
        // ✅ Add new contact
        this.contacts.push({ ...this.newContact });
      }
      this.newContact = this.getEmptyContact();
    }
  }

  editContact(index: number) {
    this.newContact = { ...this.contacts[index] };
    this.editingIndex = index; // ✅ Set editingIndex
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    if (this.editingIndex === index) {
      this.editingIndex = null;
      this.newContact = this.getEmptyContact();
    }
  }

  validateContact(contact: Contact): boolean {
    return Object.values(contact).every(value => value.trim() !== '');
  }
}
