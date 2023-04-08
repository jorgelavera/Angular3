import { Component, OnInit } from '@angular/core';
import { Alumno } from '../data/data';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Jorge', 'Lavera', true),
    new Alumno(3, 'Susana', 'Oria', true),
    new Alumno(5, 'Pedro', 'Pica', false),
    new Alumno(6, 'Mirta', 'Blita', true)
  ];
  ngOnInit(): void {

  }
}
