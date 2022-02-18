import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  //Guarda en el localStorage el formulario como un JSON.stringify
  register(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    localStorage.setItem('Registro',JSON.stringify(this.form.value) )
    Swal.fire('Registrado!',
    'Te has registrado con exito!',
    'success')
    this.router.navigateByUrl('/user/login')
  }

 
}
