import {Component, EventEmitter, Output} from '@angular/core';

import {RoomModel} from '../home/room.model';
import {HabitacionService} from '../home/habitacion.service';

@Component({
  selector: 'app-ver-habitacion-dialog',
  templateUrl: './ver-habitacion-dialog.component.html',
  styleUrls: ['./ver-habitacion-dialog.component.css']
})
export class VerHabitacionDialogComponent {
  habitacion: RoomModel;
  @Output() emitter = new EventEmitter<RoomModel>();
  constructor( private habitacionService: HabitacionService) {
    this.habitacion = {id: null, precioDia: null, precioHora: null, servicios: null, tipo: null};
  }

show() {
    this.habitacionService.readOne(this.habitacion.id).subscribe(
      habitacion => {
        this.habitacion = habitacion;
        console.log(this.habitacion);
        this.emitter.emit(this.habitacion);
      }
    );
}

}
