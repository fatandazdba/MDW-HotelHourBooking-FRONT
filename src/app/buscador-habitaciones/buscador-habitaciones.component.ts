import {Component, OnInit} from '@angular/core';
import {HotelesService} from '../home/shared/hoteles.service';
import {Habitacion} from '../ver-habitacion-dialog/habitacion.model';
import {MatSnackBar} from '@angular/material';
import {Hotel} from '../home/shared/hotel.model';


@Component({
  selector: 'app-buscador-habitaciones',
  templateUrl: './buscador-habitaciones.component.html',
  styleUrls: ['./buscador-habitaciones.component.css']
})
export class BuscadorHabitacionesComponent implements OnInit {
  static URL = 'Habitaciones';
  namehotel = 'NH';
  dpostal = '28919';
  response: any;
  data: Habitacion[];
  hotels: Hotel[] = [
    {id: '1', name: 'NH'},
    {id: '2', name: 'IBIS'},
    {id: '3', name: 'EXCELSIOR'}
  ];

  constructor(private hotelService: HotelesService, private snackBar: MatSnackBar) {
  }


  ngOnInit() {

  }

  searchRoomsByHotel() {
    this.hotelService.searchByHotel(
      this.namehotel,
      this.dpostal
    ).subscribe(
      resp => {
        this.data = resp;
      }, error => {
        this.showMessage('Error when searching room by hotel.');
      }
    );
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000
    });
  }
}
