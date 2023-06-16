import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from "@angular/common/http";
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CompraJuegoComponent } from './compra-juego/compra-juego.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    ListaVideojuegosComponent,
    IniciarSesionComponent,
    CompraJuegoComponent,
    BibliotecaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
