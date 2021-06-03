import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  //No es un evento del ciclo de vida
  //Se utiliza para inyectar servicios
  constructor() { }

  @Input()
  titulo: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on Destroy');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngOnInit(): void {
    console.log("on Init");
  }

}
