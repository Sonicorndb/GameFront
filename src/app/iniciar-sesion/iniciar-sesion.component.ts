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
  requestFailed: boolean;
  error: string;
  constructor(private usuarioServicio : UsuarioService, private router:Router) { }

  ngOnInit(): void {

  }

  ActivarUsuario(){
    this.usuarioServicio.obtenerUsuarioPorEmail(this.emailActivar).subscribe(dato => {
      this.usuarioActivado = dato;  
      if(this.contrasenaActivar == dato.contrasena && this.contrasenaActivar != ""){
      //console.log(dato);
      this.dataSave(dato.nombre)
      this.dataSaveuser(dato.id)
      this.irALaListaDeVideojuegos();
      }
      else{
        this.requestFailed = true;
      }
    }, res => {
      console.log(Error);
      this.requestFailed = true;});
  }


  irALaListaDeVideojuegos() {
    this.router.navigate(['/videojuegos']);
  }

  onSubmit() {
    //console.log("submit")
    this.ActivarUsuario();
  }

  dataSave(nombreUsuario: string){
    //console.log("guardado")
    sessionStorage.setItem('name', nombreUsuario);
  }

  dataSaveuser( userid: string){
    //console.log("guardado")
    sessionStorage.setItem('id', userid);
  }

}
