import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));;
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
