import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData?: firebase.User | null;

  constructor(private fireAuth: AngularFireAuth) {}
  login(credentials: { email: string; password: string }) {
    return this.fireAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredential) => (this.userData = userCredential.user));
  }

  register(credentials: { email: string; password: string }) {
    return this.fireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
  }

  logout() {
    return this.fireAuth.signOut();
  }
  get user() {
    return this.userData;
  }

  isLoggedIn() {
    return !!this.userData;
  }
}
