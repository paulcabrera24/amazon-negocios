import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TablaregistroService {

  constructor(private http: HttpClient) { }
  tablaregistroSelect(codspecial){
    const ruta ="https://paulcabreraayalaproyecto.000webhostapp.com/Servicios/cancionesCategoria.php"
  
    const formData: FormData = new FormData();
    formData.append("paul",codspecial);


    return this.http.post(ruta,formData).pipe(
      map((res)=>{
        return res;
      })
    )
  }
}
