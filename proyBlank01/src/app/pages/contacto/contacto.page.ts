import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { error } from 'util';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  cordenadas = {
    longitud: null,
    latitud: null,

  };

  constructor(private geolocalizacion: Geolocation) {}

  ngOnInit() {
  }
  obtenerPosicion() {
    this.geolocalizacion.getCurrentPosition().then((resp) => {
      const latitud = resp.coords.latitude;
      const longitud = resp.coords.longitude;
      this.cordenadas.latitud = latitud;
      this.cordenadas.longitud = longitud;
      console.log('La Posición actual es: ' +
      this.cordenadas.latitud + ',' + this.cordenadas.longitud );
    });
    try {
    } catch (error) {
      console.log('El error es' + error);
    }
  }
}
