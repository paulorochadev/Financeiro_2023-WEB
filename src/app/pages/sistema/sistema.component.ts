import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sistema',
  standalone: true,
  imports: [ NavbarComponent, SidebarComponent ],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})
export class SistemaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService) {
    
  }

  ngOnInit(): void {
    this.menuService.menuSelecionado = 2;
  }
}