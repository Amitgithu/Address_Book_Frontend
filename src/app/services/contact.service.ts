import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(index: number, updatedContact: Contact): void {
    this.contacts[index] = updatedContact;
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}
