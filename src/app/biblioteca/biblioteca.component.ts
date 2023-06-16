import { Component } from '@angular/core';
import { Videojuego } from '../interfaces/videojuego.interface';
import { VideojuegoService } from '../videojuego.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  videojuegos: Videojuego[];
  id: any = this.getU();

  constructor(private videojuegoServicio: VideojuegoService) {}

  ngOnInit(): void {
    this.obtenerVideojuegos();
  }

  getU():any{
    return sessionStorage.getItem('id')
  }

  obtenerVideojuegos() {
    this.videojuegoServicio.obtenerVideojuegosPorUsuarioId(parseInt(this.id, 10)).subscribe(dato => {
      this.videojuegos = dato;
      console.log(dato); 
    });
  }
  
}

