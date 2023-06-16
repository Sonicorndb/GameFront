import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../interfaces/videojuego.interface';
import { VideojuegoService } from '../videojuego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-videojuego',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})

export class ListaVideojuegosComponent implements OnInit {
  videojuegos: Videojuego[];

  constructor(private videojuegoServicio: VideojuegoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerVideojuegos();
  }

  comprarJuego(id:number) {
    this.router.navigate(['compra-juego', id]);
  }

  private obtenerVideojuegos() {
    this.videojuegoServicio.obtenerListaDeVideojuegos().subscribe(dato => {
      this.videojuegos = dato; 
    });
  }
}
