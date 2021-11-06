import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }
  registroSelect(){
    const ruta ="https://paulcabreraayalaproyecto.000webhostapp.com/Servicios/canciones.php"
    return this.http.get(ruta);
  }
}
