import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  /**
   *
   */
  constructor(private router : Router) {
    
  }


  selectMenu(menu: Number) {
    switch(menu) {
      case 1:
        this.router.navigate(['/dashboard']);
        break;
      
      case 2:
        this.router.navigate(['/sistema']);
        break;
      
      case 3:
        this.router.navigate(['/categoria']);
        break;
      
      case 4:
        this.router.navigate(['/despesa']);
        break;
      
      default:
        break;
    }
  }
}