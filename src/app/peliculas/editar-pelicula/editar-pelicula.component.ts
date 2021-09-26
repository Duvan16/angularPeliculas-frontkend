import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor() {}

  modelo: PeliculaDTO = {
    titulo: 'Spider-Man',
    trailer: 'abc',
    enCines: true,
    resumen: 'cosa',
    fechaLanzamiento: new Date(),
    poster:
      'https://lh3.googleusercontent.com/L9y16_4RatUhIlt-USplip8bCDJSckyJdTFxa-GK8GLeoLfY85K7Pgv7xiCGvT3fkOvWBBf8kH91',
  };

  ngOnInit(): void {}

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }
}
