import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './superior/barra-navegacion/barra-navegacion.component';
import { MenuLateralComponent } from './izquierda/menu-lateral/menu-lateral.component';
import { ContenidoComponent } from './centro/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    MenuLateralComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
