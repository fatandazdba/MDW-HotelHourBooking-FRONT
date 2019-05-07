import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {HabitacionService} from './habitacion.service';
import {VerHabitacionDialogComponent} from '../ver-habitacion-dialog/ver-habitacion-dialog.component';
import {Habitacion} from '../ver-habitacion-dialog/habitacion.model';
import {RoomModel} from './room.model';
import {RoomsModel} from './rooms.model';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  static URL = 'home';

  habitacion: Habitacion;
  data: RoomsModel[];
  title = 'Rooms ';
  columns = ['id', 'tipo', 'precioHora', 'precioDia' ];
  dialogConfig: MatDialogConfig;

  constructor(private dialog: MatDialog, private habitacionService: HabitacionService) {
    this.habitacionService.readAll().subscribe(
      data => this.data = data
    );
  }


  verHabitacion() {
    this.dialogConfig = {
      data: {
        mode: 'Create',
        article: {}
      }
    };

    this.dialog.open(VerHabitacionDialogComponent, this.dialogConfig);
  }

  readAll() {
    this.habitacionService.readAll().subscribe(
      data => this.data = data
    );
    console.log('data: ' +  this.data);
  }
}
