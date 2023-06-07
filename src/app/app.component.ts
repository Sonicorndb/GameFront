import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'Game';
  nombreDeusuario:any;

  dataRemove(){
    sessionStorage.removeItem('name')
  }

  get():any{
  return sessionStorage.getItem('name')
  }
}
