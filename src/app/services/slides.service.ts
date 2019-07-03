import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  slidesList: AngularFireList<any>;    
  task: AngularFireUploadTask;

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  getSlides(){
    return this.slidesList=this.firebase.list('slides');
  }

  insertMediaSlide(input: FileList, type: string, form: Object){
      let file = input.item(0);
      if(file.type.split('/')[0] !== type){
        console.error('unsupported file type :( ');
        return;
      }
      // Generate id, Optional metadata
      const path = `slides/${new Date().getTime()}_${file.name}`;

      this.task = this.storage.upload(path, file);

      //Obtener url al finalizar
      this.task.snapshotChanges().pipe(
        finalize( async() => {
          let url = await this.storage.ref(path).getDownloadURL().toPromise();  
          form['filename'] = file.name;
          form['url'] = url;
          switch(type){
            case 'image': this.insert({ tipo: 'imagen', ...form}); break;
            case 'video': this.insert({ tipo: 'video', ...form}); break;
            case 'audio': this.insert({ tipo: 'audio', imgurl: "https://luisperis.com/wp-content/uploads/2016/06/podcast.jpg", ...form });
            /*form['url']=url; form['imgurl']="https://luisperis.com/wp-content/uploads/2016/06/podcast.jpg"
                          this.insert(form);*/ break;
          }
        }),
      ).subscribe();

      return this.task;
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
