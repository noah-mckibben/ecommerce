import { Component } from '@angular/core';
import { CartButtonComponent} from '../cart-button/cart-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CartButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showButtonClicked(){
  console.log('clicked');
  }
}
