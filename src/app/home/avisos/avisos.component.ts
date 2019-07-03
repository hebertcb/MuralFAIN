import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  avisoList: Observable<Aviso[]>;

  constructor(private avisosService: AvisosService) {
    this.avisoList = this.avisosService.getAvisos()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() {
  }

}
