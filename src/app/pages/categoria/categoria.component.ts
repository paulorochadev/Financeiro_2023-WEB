import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SelectModel } from '../../models/select.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ CommonModule, NavbarComponent, SidebarComponent, ReactiveFormsModule, NgSelectModule, FormsModule ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
    
  }

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();

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