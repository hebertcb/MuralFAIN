import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventosList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getEventos(){
    return this.eventosList=this.firebase.list('eventos');
  }

  insertEvento(evento: Evento){
    this.eventosList.push(
      {
        fecha: evento.fecha,
        titulo: evento.titulo
      });
  }
}
