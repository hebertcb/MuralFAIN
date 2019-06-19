import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Aviso } from '../models/aviso';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../models/evento';
import { SlidesService } from '../services/slides.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {  
  user : any = {};
  isLogin: boolean;

  avisoList: Aviso[];
  eventoList: Evento[];
  slideList: any[];

  constructor(private avisosService: AvisosService,
              private eventosService: EventosService,
              private slidesService: SlidesService,
              private authService: AuthService) { }

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

    this.avisosService.getAvisos()
      .snapshotChanges().subscribe(item=>{
        this.avisoList=[];
        item.forEach( element => {
          let x = element.payload.toJSON();
          x["$key"]=element.key;
          this.avisoList.push(x as Aviso);
        });
      }); 
     this.eventosService.getEventos()
      .snapshotChanges().subscribe(item=>{
        this.eventoList=[];
        item.forEach( element => {
          let x = element.payload.toJSON();
          x["$key"]=element.key;
          this.eventoList.push(x as Evento);
        });
      });     
      this.slidesService.getSlides()
        .snapshotChanges().subscribe(item => {
          this.slideList=[];
          item.forEach( element => {
          let x = element.payload.toJSON();
          x["$key"]=element.key;
          this.slideList.push(x as any);
        });
      });
  }

  onSubmitAviso(form : NgForm){
    //if(form.value.$key == null)
    
      this.avisosService.insertAviso(form.value);
    //else
    //  this.redesService.updateRed(form.value);
    
    this.resetForm(form);
    //this.toastr.success('Operación realizada con éxito', 'Red Registered');    
  }

  onSubmitEvento(form : NgForm){

    this.eventosService.insertEvento(form.value);    
    this.resetForm(form);  
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    //this.redesService.selectedRed = new Red();
  }

}
