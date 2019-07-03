import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  eventoList: Observable<Evento[]>;

  constructor(private eventosService:EventosService) {
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


}
