import { Component, Input} from '@angular/core';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //varials
  @Input() image!:string;
  @Input() name!:string;
  @Input() description!:string;
  @Input() btnContact!:string;
  @Input() clickEvent!:() => void;
  //functions
  onClickListener(){
    this.clickEvent();
  }
}


