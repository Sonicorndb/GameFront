import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usuarios: Usuario[];
  
  constructor(private usuarioServicio: UsuarioService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id:number) {
    this.router.navigate(['actualizar-usuario', id]);
  }

  private obtenerUsuarios() {
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  eliminarUsuario(usuario:Usuario) {
    this.usuarioServicio.eliminarUsuario(usuario.id).subscribe({
      next: (() => {
        alert("Usuario eliminado");
        this.usuarios = this.usuarios.filter(p => p !== usuario);
        window.location.reload();
        
      }),
      error: () => {
        if(usuario.id = 1){
          alert("No puede eliminar el usuario administrador");
        }else{alert("Usuario eliminado");}
        window.location.reload();
      },
      complete: () => {
        console.log("Observable eliminar usuario completado");
        window.location.reload();
      }
    });
  }
}
