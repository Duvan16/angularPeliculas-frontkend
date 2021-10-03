import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css'],
})
export class IndiceCinesComponent implements OnInit {
  constructor(private cinesService: CinesService) {}

  cines: cineDTO[] = [];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros = 0;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadRegistrosAMostrar: number) {
    this.cinesService.obtenerTodos(pagina, cantidadRegistrosAMostrar).subscribe(
      (respuesta: HttpResponse<cineDTO[]>) => {
        if (respuesta.body) this.cines = respuesta.body;
        let cantidadReg = respuesta.headers.get('cantidadTotalRegistros');
        if (cantidadReg) this.cantidadTotalRegistros = parseInt(cantidadReg);
      },
      (error) => console.error(error)
    );
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number) {
    this.cinesService.borrar(id).subscribe(
      () => {
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
      },
      (error) => console.error(error)
    );
  }
}
