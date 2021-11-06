import { Component, Input, OnInit } from '@angular/core';
import { Canciones } from '../../entities/canciones';
import { Tablaregistro } from '../../entities/tablaregistro';
import { TablaregistroService } from '../../services/tablaregistro.service';

@Component({
  selector: 'app-tablaregistro',
  templateUrl: './tablaregistro.component.html',
  styleUrls: ['./tablaregistro.component.css']
})
export class TablaregistroComponent implements OnInit {

  @Input() categoriaX:Canciones;
  listaTablaregistro: Tablaregistro[];
  CancionElegida: Canciones

  constructor(private tablaregistroService: TablaregistroService) { }

  ngOnInit(): void {
    // console.log("productos");
    // console.log(this.categoriaX);
  }
  ngOnChanges():void{
    // console.log("productos");
    // console.log(this.categoriaX);
    this.leerProductos()
  }
  leerProductos(){
    const codspecial = this.categoriaX.codspecial;
    this.tablaregistroService.tablaregistroSelect(codspecial).subscribe(
      (res: Tablaregistro[]) =>{
        console.log(res);
        this.listaTablaregistro = res;
      }
    )
  }
  seleccionar(cancionSeleccionada:Canciones){
    console.log(cancionSeleccionada)
    this.CancionElegida=cancionSeleccionada
  }
}
