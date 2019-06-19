import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Aviso } from '../models/aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  avisosList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getAvisos(){
    return this.avisosList=this.firebase.list('avisos');
  }

  insertAviso(aviso: Aviso){
    this.avisosList.push(
      {
        titulo: aviso.titulo,
        descripcion: aviso.descripcion
      });
  }
}
