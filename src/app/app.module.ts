import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraEstadoComponent } from './barra-estado/barra-estado.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraEstadoComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
