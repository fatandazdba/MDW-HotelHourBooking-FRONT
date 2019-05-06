import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSnackBar} from '@angular/material';
import {Reserva} from '../shared/reserva.model';
import {Cliente} from '../shared/cliente.model';


@Component({
  selector: 'app-inforeserva',
  templateUrl: `resumenReserva.component.html`,
  styleUrls: ['resumenreserva.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ResumenReservaComponent implements OnInit {
  static URL = 'reservas';
  finicio = new Date('20190613T00:00:00');
  ffin = new Date('20190613T00:00:00');

  clienteR: Cliente = {
    nombre: 'Juan', dni: '12345678T',
    apellidos: 'Perez Quintana', telefono: '913453333',
    email: 'jperez@prueba.com', direccion: 'av euro 2'
  };
  reserva1: Reserva =
    {id: '1', cliente: this.clienteR, hotel: 'NH', fechainicio: this.finicio, fechafin: this.ffin, precioTotal: 100};
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, fb: FormBuilder, private snackBar: MatSnackBar) {


  }
  onChkChange() {
  }

  save() {
    this.showMessage('Reservation made');
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000
    });
  }

  convertToDate = function (stringDate) {
    const dateOut = new Date(stringDate);
    dateOut.setDate(dateOut.getDate() + 1);
    return dateOut;
  };
}
