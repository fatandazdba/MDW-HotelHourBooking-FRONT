import {Cliente} from './cliente.model';

export interface Reserva {
  id: string;
  hotel: string;
  precioTotal: number;
  fechainicio?: Date;
  fechafin?: Date;
  cliente: Cliente;
}
