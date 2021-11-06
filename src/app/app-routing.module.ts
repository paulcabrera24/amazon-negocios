import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { ArreglosComponent } from './components/arreglos/arreglos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { BodyComponent } from './home/body/body.component';
import { ExamenComponent } from './home/examen/examen.component';

const routes: Routes = [
  { path: '', component:InicioComponent},
  { path: 'arreglos', component: ArreglosComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'servicio', component: ServicioComponent},
  { path: 'main-banner', component: MainBannerComponent},
  { path: 'body', component: BodyComponent},
  { path: 'examen', component: ExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
