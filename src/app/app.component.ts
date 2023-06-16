import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'GameShop';
  nombreDeusuario:any;

  dataRemove(){
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('id')
  }

  get():any{
  return sessionStorage.getItem('name')
  }

  getU():any{
    return sessionStorage.getItem('id')
  }
}
