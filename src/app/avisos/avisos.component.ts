import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Aviso } from '../models/aviso';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  avisoList: Aviso[];

  constructor(private avisosService: AvisosService) { }

  ngOnInit() {
    return this.avisosService.getAvisos()
    .snapshotChanges().subscribe(item=>{
      this.avisoList=[];
      item.forEach( element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.avisoList.push(x as Aviso);
      });
    });
  }

}
