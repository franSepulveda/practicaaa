import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUsuarioService } from '../servicio/api-usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formulario: FormGroup;


  constructor(
    private formC: FormBuilder,
    private apiUsuario: ApiUsuarioService,
    private router: Router

  ) {
    this.formulario = this.formC.group({

      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(9)]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      birthDate: ['', [Validators.required, Validators.min(1991), Validators.max(2022)]],
      gender: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    })
  }
  public campo(control: string) {
    return this.formulario.get(control);
  }

  ngOnInit() {
  }
  public guardarCliente(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    // Guardar
    this.apiUsuario.agregarUsuario({
      ...this.formulario.value
    })
      .then(resultado => {
         {
          this.formulario.reset();
          this.formulario.updateValueAndValidity();
          alert('Guardada');
          this.router.navigate(['']);
        }
      })
  }



}

