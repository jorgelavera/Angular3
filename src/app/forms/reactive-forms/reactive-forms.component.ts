import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  nameControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  lastNameControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  formAlumno: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.formAlumno = this.formBuilder.group({
      nombres: this.nameControl,
      apellidos: this.lastNameControl,
      email: this.emailControl,
      tieneBeca: []
    })
  }
  onSubmit(): void {
    if (this.formAlumno.valid) {
      //por ahora nada
    } else {
      alert('Faltan datos');
    }
  }
}
