import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {
    email: '',
    password: ''
  };

  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }
    validaLogin(formLogin: NgForm) {
      console.log('Valor del formulario ' +
      formLogin.value);
      console.log(this.usuario.email);
      console.log(this.usuario.password);

      console.log(formLogin.valid);
      console.log(this.usuario);
      if (formLogin.invalid) {
        return;
      } else {
       // this.almacenamiento.set('datosUsuario', this.usuario);
      }
    }
    async alertaConfirmacion() {
      const alert = await this.alerta.create({
        header: 'Confirmar!',
        message: '<strong>¿Seguro que deseas continuar?</strong>!!!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirmó Cancelación: blah');
            }
          }, {
            text: 'Continuar',
            handler: () => {
              console.log('Confirmó Continuar');
            }
          }
        ]
      });
      await alert.present();
    }
  }
