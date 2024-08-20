import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sistema',
  standalone: true,
  imports: [ CommonModule, NavbarComponent, SidebarComponent, ReactiveFormsModule ],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})
export class SistemaComponent {
  
  /**
   *
   */
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
    
  }

  sistemaForm: FormGroup;

  ngOnInit(): void {
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  dadosForm() {
    return this.sistemaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadosForm();

    alert(dados["name"].value)
  }
}