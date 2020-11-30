import { Component, OnInit } from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formul',
  templateUrl: './formul.component.html',
  styleUrls: ['./formul.component.css']
})
export class FormulComponent implements OnInit {

  //1
  constructor(private formBuilder: FormBuilder) { }


  //2
  user: FormGroup;
  submitted = false;

  ngOnInit(): void {

    //3
    this.user = this.formBuilder.group({

      nombre: ['', Validators.required]
    });
  }

  // creamos un metodo para facilitar el acceso a los controles de formulario desde la plantilla
  //4
  get f(){
    return this.user.controls;
  }


  //5
  enviarDatos(){
    
    this.submitted = true;
    if(this.user.invalid){
      return;
    }

      Swal.fire('Los datos son correctos');
  }





}
