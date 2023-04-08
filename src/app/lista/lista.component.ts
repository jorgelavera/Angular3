import { Component, OnInit } from '@angular/core';
import { Alumno } from '../data/data';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Jorge', 'Lavera', 'prueba@gmail.com', true),
    new Alumno(3, 'Susana', 'Oria', 'test@gmail.com', true),
    new Alumno(5, 'Pedro', 'Pica', 'prueba@hotmail.com', false),
    new Alumno(6, 'Mirta', 'Blita', 'mblita@yahoo.com', true)
  ];
  ngOnInit(): void {

  }
}
