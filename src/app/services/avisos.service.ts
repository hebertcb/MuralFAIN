import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  avisosList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getAvisos(){
    return this.avisosList=this.firebase.list('avisos');
  }
}
