import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoDTO } from './genero';

@Injectable({
  providedIn: 'root', //Es un singleton siempre se va servir la misma instancia en toda la aplicación
})
export class GenerosService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  public obtenerTodos(): Observable<generoDTO[]> {
    return this.http.get<generoDTO[]>(this.apiURL);
  }
}
