import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavbarComponent, SidebarComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  /**
   *
   */
  constructor(public menuService: MenuService) {
    
  }

  ngOnInit(): void {
    this.menuService.menuSelecionado = 1;
  }
}