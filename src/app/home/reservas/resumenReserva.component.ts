import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Reserva} from '../shared/reserva.model';

@Component({
  selector: 'app-inforeserva',
  templateUrl: `resumenReserva.component.html`,
  styleUrls: ['./resumenreserva.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ResumenReservaComponent implements OnInit {
  static URL = 'reservas';
  reserva: Reserva;
  isChecked: boolean;
  form: FormGroup;
  endDate: Date;
  title = 'InfoReserva management';
  columns = ['id', 'value'];

  // data: reserva[];


  constructor(fb: FormBuilder, private dialog: MatDialog, private snackBar: MatSnackBar) {
    /* this.form = new FormGroup({
       initDate: new FormControl(),
       endDate: new FormControl()
     });
     this.isChecked = false;*/
  }

  onChkChange() {
  }


  ngOnInit(): void {
    // this.isChecked = false;

  }
}
