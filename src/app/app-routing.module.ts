import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CompraJuegoComponent } from './compra-juego/compra-juego.component';

const routes: Routes = [
  {path : 'usuarios', component : ListaUsuariosComponent},
  {path : '', redirectTo : 'videojuegos', pathMatch : 'full'},
  {path : 'registrar-usuario', component : RegistrarUsuarioComponent},
  {path : 'actualizar-usuario/:id',component : ActualizarUsuarioComponent},

  {path : 'videojuegos', component : ListaVideojuegosComponent},
  {path : '', redirectTo : 'videojuegos', pathMatch : 'full'},
  {path : 'comprar-juego/:id',component : CompraJuegoComponent},

  {path : 'Login', component : IniciarSesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
