import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosFBService {
  private url: 'https://identitytoolkit.googleapis.com/v1/';
private apiKey: 'AIzaSyBpNQdtp7xPcdBMTNMoMStzhEZWH5QSVGo';

  constructor(private http: HttpClient) {}
 // registrarUsuario(usuario: Usuarios) {

   // const datosAutenticacion = {
      // ...usuario,
     // returnSecureToken: true
   // };
    // tslint:disable-next-line: max-line-length
   // return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBpNQdtp7xPcdBMTNMoMStzhEZWH5QSVGo', datosAutenticacion );

  }
  // loguarUsuario() {

 // }

 ///  }

