import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiEndpoint} from './api-endpoint.model';
import {HttpService} from '../core/http.service';
import {Habitacion} from '../ver-habitacion-dialog/habitacion.model';

@Injectable()
export class HabitacionService {

  constructor(private httpService: HttpService) {
  }

  readOne(code: String): Observable<Habitacion> {
    return this.httpService.get(ApiEndpoint.ROOMS + '/' + code);
  }
}
