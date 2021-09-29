import { Injectable } from '@angular/core';
import { generoDTO } from './genero';

@Injectable({
  providedIn: 'root', //Es un singleton siempre se va servir la misma instancia en toda la aplicación
})
export class GenerosService {
  constructor() {}
  public obtenerTodos(): generoDTO[] {
    return [{ id: 1, nombre: 'Drama' }];
  }
}
