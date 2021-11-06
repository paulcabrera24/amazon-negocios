import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  empleadosSelect(){
     const ruta ="https://makeup-api.herokuapp.com/api/v1/products.json"
     return this.http.get(ruta);
  }
}
