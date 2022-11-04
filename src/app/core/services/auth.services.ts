import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData: firebase.User | null;
  readonly authState$ = this.fireAuth.authState;
  //readonly userData$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}
  login(credentials: Credentials) {
    return this.fireAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      ;
  }

  // .then((userCredential) => (this.userData$ = userCredential.user))

  register(credentials: Credentials) {
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
    return !this.userData;
  }
}
