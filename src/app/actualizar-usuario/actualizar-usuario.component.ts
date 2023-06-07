import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import  swal  from 'sweetalert2';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  id:number;
  usuario:Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    alert('Usuario actualizado');
  }

  onSubmit(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irAlaListaDeUsuarios();
      console.log(dato)
    },error => console.log(error));
  }
}
