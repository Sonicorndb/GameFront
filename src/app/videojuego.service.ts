import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from './interfaces/videojuego.interface';
import { Usuario } from './interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  //Url del listado de Videojuegos
  private baseURL = "http://localhost:8080/api/videojuegos";
  private bibliotecaURL = "http://localhost:8080/api/biblioteca";
  usuario: Observable<Usuario>;

  constructor(private httpClient: HttpClient) { }

  //obtener la lista de Videojuegos
  obtenerListaDeVideojuegos() : Observable<Videojuego[]> {
    return this.httpClient.get<Videojuego[]>(`${this.baseURL}`);
  }

  obtenerVideojuegosPorUsuarioId(id:number) : Observable<Videojuego[]> {
    return this.httpClient.get<Videojuego[]>(`${this.bibliotecaURL}/${id}/videojuegos`);
  }

  obtenerVideojuegoPorId(id:number):Observable<Videojuego>{
    return this.httpClient.get<Videojuego>(`${this.baseURL}/${id}`);
  }

}
