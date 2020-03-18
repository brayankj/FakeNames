import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'names...';
  constructor(){
    Swal.fire({
      title: 'Fake Names',
      text: 'Consumo de Rest-API de Terceros',
      footer: 'Desarrollo de aplicación sin ánimo de lucro'
    });
  }
}
