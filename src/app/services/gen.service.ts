import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  genList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getGen(){
    return this.genList=this.firebase.list('general');
  }
}
