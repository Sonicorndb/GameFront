import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  usuarioActivado: Usuario={id:0,nombre:'',email:'',contrasena:''};
  emailActivar: string;
  contrasenaActivar: string;

  constructor(private usuarioServicio : UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

  ActivarUsuario(){
    this.usuarioServicio.obtenerUsuarioPorEmail(this.emailActivar).subscribe(dato => {
      console.log(dato);
      this.usuarioActivado = dato;  
      this.dataSave(dato.nombre)
      this.irALaListaDeVideojuegos();
    }, error => console.log(error));
  }

  irALaListaDeVideojuegos() {
    this.router.navigate(['/videojuegos']);
  }

  onSubmit() {
    console.log("submit")
    this.ActivarUsuario();
  }

  dataSave(nombreUsuario: string){
    console.log("uardado")
    sessionStorage.setItem('name', nombreUsuario );
  }

}
