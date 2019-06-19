import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  slidesList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getSlides(){
    return this.slidesList=this.firebase.list('slides');
  }
}
