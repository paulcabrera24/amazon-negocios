import { Component, OnInit } from '@angular/core';
import { CULTURASANTIGUAS } from '../../entities/culturasAntiguas';
import { Culturas } from '../../entities/culturas';

@Component({
  selector: 'app-arreglos',
  templateUrl: './arreglos.component.html',
  styleUrls: ['./arreglos.component.css']
})
export class ArreglosComponent implements OnInit {
  listaCulturas = CULTURASANTIGUAS;
  CulturaElegida: Culturas


  
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(culturaSeleccionada:Culturas){
    console.log(culturaSeleccionada)
    this.CulturaElegida=culturaSeleccionada
  }

}

