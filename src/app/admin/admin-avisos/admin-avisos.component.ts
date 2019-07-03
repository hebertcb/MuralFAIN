import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-avisos',
  templateUrl: './admin-avisos.component.html',
  styleUrls: ['./admin-avisos.component.css']
})
export class AdminAvisosComponent implements OnInit {
  
  avisoList: Observable<Aviso[]>;

  constructor(private avisosService: AvisosService, private toastr: ToastrService) {
    this.avisoList = this.avisosService.getAvisos()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() {    
  }

  onSubmit(form : NgForm){
    //if(form.value.$key == null)
      this.avisosService.insertAviso(form.value);
    //else
    //  this.redesService.updateRed(form.value);    
    this.resetForm(form);
    this.toastr.success('Operación realizada con éxito', 'Aviso Agregado');    
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    //this.redesService.selectedRed = new Red();
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar este aviso?')) {
      this.avisosService.deleteAviso($key);
      this.toastr.info('Operación realizada con éxito', 'Aviso eliminado');
      //this.toastr.warning('Registro eliminado correctamente...', 'Red removed');
    }
  }

}
