import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../models/test';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products:Productos[] = [
    {
      name:'producto 1',
      description:'Descripcion del procudto 1',
      precio:0.9,
      img:'/images/producto1.jpg',
    },
    {
      name:'producto 2',
      description:'Descripcion del procudto 2',
      precio:0,
      img:'/images/producto2.jpg',
    },
    {
      name:'producto 3',
      description:'Descripcion del procudto 3',
      precio:0,
      img:'/images/producto5.jpg',
    }
  ]

}
