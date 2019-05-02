import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {HabitacionService} from './habitacion.service';
import {VerHabitacionDialogComponent} from '../ver-habitacion-dialog/ver-habitacion-dialog.component';
import {Habitacion} from '../ver-habitacion-dialog/habitacion.model';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit{

  static URL = 'habitaciones';

  habitacion: Habitacion;

  title = 'Articles Management';
  columns = ['code', 'description', 'retailPrice', 'stock'];
  data: Habitacion[];
  dialogConfig: MatDialogConfig;

  constructor(private dialog: MatDialog, private habitacionService: HabitacionService) {
  }

  ngOnInit(): void {
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
}
