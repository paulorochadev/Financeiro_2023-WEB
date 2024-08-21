import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ CommonModule, NavbarComponent, SidebarComponent, ReactiveFormsModule ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
    
  }

  categoriaForm: FormGroup;

  ngOnInit(): void {
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  dadosForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadosForm();

    alert(dados["name"].value)
  }
}