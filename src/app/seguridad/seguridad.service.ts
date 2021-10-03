import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  constructor() {}

  ngOnInit(): void {}

  estaLogueado(): boolean {
    return false;
  }

  obtenerRol(): string {
    return 'admin';
  }
}
