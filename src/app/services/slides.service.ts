import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  slidesList: AngularFireList<any>;   
  percentage: Observable<number>;
  task: AngularFireUploadTask;

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getSlides(){
    return this.slidesList=this.firebase.list('slides');
  }

  insertMediaSlide(file: File, tipo: string, form: Object){
      // Generate id, Optional metadata
      const path = `slides/${new Date().getTime()}_${file.name}`;

      this.task = this.storage.upload(path, file);
      //Porcentaje
      this.percentage = this.task.percentageChanges();
      //Callback al finalizar
      this.task.snapshotChanges().pipe(
          finalize( () => this.storage.ref(path).getDownloadURL()
            .subscribe( (url) => {
              switch(tipo){
                case 'image': this.insert({
                                tipo: 'imagen',
                                url: url
                              }); break;
                case 'video': this.insert({
                                tipo: 'video',
                                url: url,
                                mediatype: file.type.split('/').pop()
                              }); break;
                case 'audio': form['url']=url;
                              this.insert(form); break;
              }
            } )
          )
      ).subscribe();
  }

  insertNoMediaSlide(form: any){
    this.insert(form);
  }

  deleteSlide(slide: any){
    if(slide.hasOwnProperty('url'))
      this.storage.storage.refFromURL(slide.url).delete()
          .then( () => this.delete(slide.$key) );   
    else
      this.delete(slide.$key)
  }

  private delete($key){
    console.log('Slide eliminado'); 
    this.slidesList.remove($key);
  }  

  private insert(slide: any){    
    console.log(slide);
    this.slidesList.push(slide);
  }
}
