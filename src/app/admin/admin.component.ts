import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AvisosService } from '../services/avisos.service';
import { EventosService } from '../services/eventos.service';
import { SlidesService } from '../services/slides.service';
import { Aviso } from '../models/aviso';
import { Evento } from '../models/evento';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {  
  user : any = {};
  isLogin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.user.nombre = auth.displayName;
        this.user.email = auth.email;
        this.user.picture = auth.photoURL;
        //this.user.id = auth.uid;               
      }else{
        this.isLogin = false;
      }
    });
  }

  logoutUser(){
    this.authService.logout();
  }

}
