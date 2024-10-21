import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  usuarios:Usuario[] = [
    {
      id:1,
      name:"Alfonso R",
      description:"Cliente de la web",
      rol:{
        rol:"cliente"
      }
    },
    {
      id:2,
      name:"Edith Estefania",
      description:"Administrador",
      rol:{
        rol:"Admin"
      }
    },
    {
      id:3,
      name:"Jennifer Jovana",
      description:"Vendedora",
      rol:{
        rol:"vendedor"
      }
    },
    {
      id:4,
      name:"Daniel Esqueda",
      description:"Administrador",
      rol:{
        rol:"Admin"
      }
    },
    {
      id:5,
      name:"Brayan Bertrand",
      description:"Facturador",
      rol:{
        rol:"Facturador"
      }
    },
    {
      id:6,
      name:"Daniel Isai",
      description:"Usuario de la app",
      rol:{
        rol:"Usuario"
      }
    },

  ];

  

}
