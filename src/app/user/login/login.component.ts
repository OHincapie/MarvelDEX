import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GlobalService} from '../../global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginAlert: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private globalService: GlobalService
  ) { 
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    //Alerta de logueado usada para alerta en el DOM
    this.loginAlert=false;
  
  }

  ngOnInit(): void {
  }

  //Manera de loguearse.
  //Valida si el JSON.stringify que esta registrado en el localStorage es igual al ingresado.
  login(event: Event) {
    event.preventDefault();
    
    const login= JSON.stringify(this.form.value); 
    //Obtenemos el registro desde el localStorage
    const registro= localStorage.getItem('Registro')
    if(login==registro){
      //Si esta logueado la variable global es true
      this.globalService.login=true;
      console.log(this.globalService.login)
      this.loginAlert=false;
      Swal.fire('Iniciaste sesión!',
    'Iniciaste sesión con exito!',
    'success')
      this.router.navigateByUrl('/marvelDex');
    } else{
      this.loginAlert=true;
    }
  }

}
