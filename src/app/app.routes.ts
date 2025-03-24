import { Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'address-book', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: AuthLoginComponent }, // Login Route
  { path: 'signup', component: AuthSignupComponent }, // Signup Route
  { path: 'address-book', component: AddressBookComponent }, // Address Book Route
  { path: '**', redirectTo: 'address-book' } // Wildcard Route (redirects to login)
];
