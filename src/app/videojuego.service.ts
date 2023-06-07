import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from './interfaces/videojuego.interface';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  //Url del listado de Videojuegos
  private baseURL = "http://localhost:8080/api/videojuegos";

  private anadirVideojuego = "http://localhost:8080/api/videojuegos";

  private Videojuego = "videojuegos";

  constructor(private httpClient: HttpClient) { }

  //obtener la lista de Videojuegos
  obtenerListaDeVideojuegos() : Observable<Videojuego[]> {
    return this.httpClient.get<Videojuego[]>(`${this.baseURL}`);
  }

  obtenerVideojuegoPorId(id:number):Observable<Videojuego>{
    return this.httpClient.get<Videojuego>(`${this.baseURL + "/id"}/${id}`);
  }

  registrarVideojuego(Videojuego:Videojuego):Observable<Object> {
    return this.httpClient.post(`${this.anadirVideojuego}/${this.Videojuego}`, Videojuego);
  }
}
