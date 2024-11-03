import { Component, NgModule} from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';
import { RequresApiService } from '../../services/requres-api.service';
import { error } from 'console';
import { BrowserModule } from '@angular/platform-browser';


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

  constructor(private ApiRequres:RequresApiService) {

  }

  login(user:string, password:string){
    //User tipo de usuario y correo
    // if(user === '1 = 1' || passwd === '1 = 1'){
    //   return false;
    // }
    //llamar a la API
   // user = document.getElementById('email');
    console.log(`User: ${user}, Password: ${password}`);

    this.ApiRequres.login(user,password).subscribe(
      res => {
        alert('login succesfully: '+ res.token);
      },
      err => {
        alert(err.error.error);
      }
    )
  }

}


