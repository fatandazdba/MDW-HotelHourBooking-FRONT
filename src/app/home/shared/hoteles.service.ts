import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Habitacion} from '../../ver-habitacion-dialog/habitacion.model';
import {ApiEndpoint} from './api-endpoint.model';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private httpService: HttpService) {
  }

  searchByHotel(nameHotel: string, direccionPostal: string): Observable<Habitacion[]> {
    return this.httpService.get(ApiEndpoint.HOTELS + '/search?direccionPostal=' + direccionPostal + '&nombre=' + nameHotel);
  }

}
