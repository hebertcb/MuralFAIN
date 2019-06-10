import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  eventoList: Evento[];

  constructor(private eventosService:EventosService) { }

  ngOnInit() {
    return this.eventosService.getEventos()
    .snapshotChanges().subscribe(item=>{
      this.eventoList=[];
      item.forEach( element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.eventoList.push(x as Evento);
      });
    });
  }


}
