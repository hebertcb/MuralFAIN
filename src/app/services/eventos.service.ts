import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventosList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getEventos(){
    return this.eventosList=this.firebase.list('eventos');
  }
}
