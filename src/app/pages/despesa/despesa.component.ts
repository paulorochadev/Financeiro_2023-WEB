import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [ NavbarComponent, SidebarComponent ],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService) {
    
  }

  ngOnInit(): void {
    this.menuService.menuSelecionado = 4;
  }
}