import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isMenuOpen:boolean = false;

toggleMenu(){
  this.isMenuOpen = !this.isMenuOpen;
  
}
}
