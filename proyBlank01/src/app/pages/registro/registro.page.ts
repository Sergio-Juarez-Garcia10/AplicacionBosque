import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    Nombre: '',
    APaterno: '',
    AMaterno: '',
    Correo: '',
    Telefono: '',
    Contrasenia: '',
    Fecha: '',
    Sexo: '',
    Direccion: ''
  };

  constructor() { }

  ngOnInit() {
  }

  validaRegistro(formRegistro: NgForm) {
    console.log('valor del formulario' +
    formRegistro.value);
    console.log(this.registro.Nombre);
    console.log(this.registro.APaterno);
    console.log(this.registro.AMaterno);
    console.log(this.registro.Correo);
    console.log(this.registro.Telefono);
    console.log(this.registro.Contrasenia);
    console.log(this.registro.Fecha);
    console.log(this.registro.Sexo);
    console.log(this.registro.Direccion);

    console.log(formRegistro.valid);
    console.log(this.registro);
    if (formRegistro.invalid) {
      return;
    } else {
    }


  }
}
