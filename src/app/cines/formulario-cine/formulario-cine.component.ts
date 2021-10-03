import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  @Input()
  modelo!: cineCreacionDTO;

  @Input()
  errores: string[] = [];

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: [
        18.4835660544367319,
        {
          validators: [Validators.required],
        },
      ],
      longitud: [
        -69.939351081848159,
        {
          validators: [Validators.required],
        },
      ],
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }
}
