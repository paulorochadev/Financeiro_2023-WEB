import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ NavbarComponent, SidebarComponent ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService) {
    
  }

  ngOnInit(): void {
    this.menuService.menuSelecionado = 3;
  }
}