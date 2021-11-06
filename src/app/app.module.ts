import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExamenComponent } from './home/examen/examen.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { BodyComponent } from './home/body/body.component';
import { ExamenParcialComponent } from './components/examen-parcial/examen-parcial.component';
import { ArreglosComponent } from './components/arreglos/arreglos.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaregistroComponent } from './components/tablaregistro/tablaregistro.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExamenComponent,
    MainBannerComponent,
    InicioComponent,
    MainNavComponent,
    BodyComponent,
    ExamenParcialComponent,
    ArreglosComponent,
    ServicioComponent,
    RegistroComponent,
    TablaregistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
