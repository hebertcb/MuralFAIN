import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginEmail(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));;
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
