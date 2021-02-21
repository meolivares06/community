import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-vacio';
  options = [
    {
      label: 'Populares', // Mas comentados
      href: '/question_list',
      data:{
        filter: 'populares'
      }
    },
    {
      label: 'Nuevos',  // Ultimos agregados
      href: '/question_list',
      data:{
        filter: 'nuevos'
      }
    },
    {
      label: 'Seguidos', // Pinned
      href: '/question_list',
      data:{
        filter: 'seguidos'
      }
    }
  ]
}
