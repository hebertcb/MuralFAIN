import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-agenda',
  templateUrl: './admin-agenda.component.html',
  styleUrls: ['./admin-agenda.component.css']
})
export class AdminAgendaComponent implements OnInit {
  
  eventoList: Observable<Evento[]>;

  constructor(private eventosService: EventosService) { 
    this.eventoList = this.eventosService.getEventos()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
            .sort((a: any, b: any) =>
              new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
          )
        )
      );    
  }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.eventosService.insertEvento(form.value);    
    this.resetForm(form);  
  }  

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    //this.redesService.selectedRed = new Red();
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar este evento?')) {
      this.eventosService.deleteEvento($key);
      //this.toastr.warning('Registro eliminado correctamente...', 'Red removed');
    }
  }
}
