import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiEndpoint} from './shared/api-endpoint.model';
import {HttpService} from '../core/http.service';
import {RoomModel} from './room.model';


@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private httpService: HttpService) {
  }

  // code = id
  readOne(code: number): Observable<RoomModel> {
    return this.httpService.get(ApiEndpoint.ROOMS + '/' + code);
  }
}
