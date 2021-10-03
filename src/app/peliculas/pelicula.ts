import { cineDTO } from '../cines/cine';
import { generoDTO } from '../generos/genero';

export interface PeliculaCreacionDTO {
  titulo: string;
  resumen: string;
  enCines: boolean;
  fechaLanzamiento: Date;
  trailer: string;
  poster: File;
  generosIds: number[];
  cinesIds: number[];
}

export interface PeliculaDTO {
  id: number;
  titulo: string;
  resumen: string;
  enCines: boolean;
  fechaLanzamiento: Date;
  trailer: string;
  poster: string;
  generos: generoDTO[];
  cines: cineDTO[];
}

export interface PeliculaPostGet {
  generos: generoDTO[];
  cines: cineDTO[];
}
