import { Component, Input} from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// los componentes se llevaron al card.components.ts

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
  goToProducts(){
    window.location.href = '/products'
  }
}


