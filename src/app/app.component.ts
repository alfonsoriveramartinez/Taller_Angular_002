import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    Contact(){
      alert('Contacto:1234567890');
    }
    Show(){
      alert('Show: una buena persona y estudiosa :)');
    }
    SeeMore(){
      alert('See More: Main veigar desde la beta');
    }
    verInfo(){
      alert('Ver Info: Main Yasuo desde la beta');
    }

}
