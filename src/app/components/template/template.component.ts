import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'hombre',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    nombre: 'Costa Rica'
  }, {
    codigo: 'ESP',
    nombre: 'España'
  }];

  sexos = ['Hombre', 'Mujer', 'Indefinido'];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm: ', forma);
    console.log('Valor forma: ', forma.value);
    console.log('Usuario: ', this.usuario);
  }

}
