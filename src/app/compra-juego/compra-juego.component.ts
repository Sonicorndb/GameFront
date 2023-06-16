import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../interfaces/videojuego.interface';
import { VideojuegoService } from '../videojuego.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-compra-juego',
  templateUrl: './compra-juego.component.html',
  styleUrls: ['./compra-juego.component.css']
})
export class CompraJuegoComponent implements OnInit{
  id:number;
  idUser: any = this.getU();
  videojuego:Videojuego;
  constructor(private videojuegoService:VideojuegoService, private UsuarioService: UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.videojuegoService.obtenerVideojuegoPorId(this.id).subscribe((dato) =>{
      this.videojuego = dato;
    },error => console.log(error));
  }

  getU():any{
    return sessionStorage.getItem('id');
  }

  irALaBiblioteca() {
    this.router.navigate(['/biblioteca/' + this.getU() + '/videojuegos']);
  }

  anadirJuego() {

    this.UsuarioService.AnadirJuegoAUsuario(this.idUser, this.videojuego.id).subscribe(); 
    this.irALaBiblioteca();
  }
}
