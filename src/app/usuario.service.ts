import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';
import { Videojuego } from './interfaces/videojuego.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Esta utl devulve todas las usuarios
  private baseURL = "http://localhost:8080/api/usuarios";
  private eliminar = "eliminar"

  usuario: Usuario;

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  registrarUsuario(usuario:Usuario):Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

  obtenerUsuarioPorEmail(email:string):Observable<any>{
    return this.httpClient.get<Usuario>(`${this.baseURL + "/email"}/${email}`);
  }

  actualizarUsuario(id:number, usuario:Usuario):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  obtenerUsuarioPorId(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL + "/id"}/${id}`);
  }

  AnadirJuegoAUsuario(iduser: number, idjuego: number):Observable<String>{
    return this.httpClient.get<String>(`${this.baseURL}/${iduser}/${idjuego}`)
  }

  eliminarUsuario(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${this.eliminar}/${id}`);
  }
}
