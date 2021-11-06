import { Component, OnInit } from '@angular/core';
import { Canciones } from '../../entities/canciones';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cancionElegida: Canciones;
  listaCancion: Canciones[];

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.registroService.registroSelect().subscribe(
      (res: Canciones[]) => {
         console.log(res);
        this.listaCancion = res;
      }
    )
  }
  seleccionar(cancionSeleccionada:Canciones){
    console.log(cancionSeleccionada)
    this.cancionElegida=cancionSeleccionada
  }


}
