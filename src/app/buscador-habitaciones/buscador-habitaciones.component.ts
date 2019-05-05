import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-buscador-habitaciones',
  templateUrl: './buscador-habitaciones.component.html',
  styleUrls: ['./buscador-habitaciones.component.css']
})
export class BuscadorHabitacionesComponent implements OnInit {
  get search(): () => void {
    return this._search;
  }

  set search(value: () => void) {
    this._search = value;
  }


  response: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {

  }

  private _search = () => {
    this.http.get('http://localhost:8080/api/v0/hotels/search')
      .subscribe((response) => {
        this.response = response;
      }); }

}
