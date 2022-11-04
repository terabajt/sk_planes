import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: Credentials) {
    return this.fireAuth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  register(credentials: Credentials) {
    return this.fireAuth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  logout() {
    return this.fireAuth.signOut();
  }

  get user() {
    return this.fireAuth.currentUser;
  }
}
