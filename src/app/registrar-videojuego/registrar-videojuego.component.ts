import { Component } from '@angular/core';
import { Videojuego } from '../interfaces/videojuego.interface';
import { VideojuegoService } from '../videojuego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-videojuego',
  templateUrl: './registrar-videojuego.component.html',
  styleUrls: ['./registrar-videojuego.component.css']
})
export class RegistrarVideojuegoComponent {

  videojuego : Videojuego = new Videojuego();

  constructor(private videojuegoServicio : VideojuegoService, private router : Router) {}

  ngOnInit(): void { 

  }

  guardarVideojuego() {
    this.videojuegoServicio.registrarVideojuego(this.videojuego).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeVideojuegos();
    }, error => console.log(error));
  }

  irALaListaDeVideojuegos() {
    this.router.navigate(['/videojuegos']);
  }

  onSubmit() {
    this.guardarVideojuego();
  }
}
