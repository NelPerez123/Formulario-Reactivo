import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

//importar Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formul',
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.css']
})
export class FormulComponent implements OnInit {

  //inicializo la variable formBuilder
  constructor(private formBuilder: FormBuilder) { }

  //creo la variable user donde almaceno los datos que recibo del formulario
  user: FormGroup;
  submitted = false;

  ngOnInit(): void {

    //pongo las condiciones de los campos
    this.user = this.formBuilder.group({

      nombre: ['', Validators.required]
    });
  }

  // creamos un metodo para facilitar el acceso a los controles de formulario desde la plantilla
  get f(){
    return this.user.controls;
  }


  //metodo enviar
  enviarDatos(){
    
    this.submitted = true;
    //si algun campo no cumple las condiciones
    if(this.user.invalid){
      return;
    }

    //si todos los campos son correctos muestra la siguiente ventana emergente
      Swal.fire('Los datos son correctos');
  }





}
