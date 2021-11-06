import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../entities/servicio';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  listaServicio: Servicio[];

  constructor(private ServicioService: ServicioService) { }

  ngOnInit(): void {
    this.ServicioService.empleadosSelect().subscribe(
      (res: Servicio[]) => {
        // console.log(res);
        this.listaServicio = res;
      }
    )
  }

}
