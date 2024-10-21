import { Component, Input, signal } from '@angular/core';
import { Productos, Usuario } from '../../models/test';
import { log } from 'console';

type Data={
  data:Productos | Usuario
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //varials

  text = signal('');

  @Input() data!:Data;
  @Input() clickEvent!:() => void;
  //functions
  onChange(event:any){
    this.text.set(event.target.value);
    this.data.data.description=this.text.arguments();
  }

  onClickListener(){
    console.log(this.data.data);
  }
}
