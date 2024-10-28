import { Component, NgModule} from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// los componentes se llevaron al card.components.ts

email:string='';
password:string='';

  login(user:string, password:string){
    //User tipo de usuario y correo
    // if(user === '1 = 1' || passwd === '1 = 1'){
    //   return false;
    // }


    //llamar a la API
   // user = document.getElementById('email');
    console.log(`User: ${user}, Password: ${password}`);
  }

}


