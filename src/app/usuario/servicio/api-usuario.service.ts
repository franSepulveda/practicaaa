import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {
  public URL_USUARIO = 'https://dummyjson.com/users/add';
  public URL_LOGIN = 'https://dummyjson.com/auth/login';
  constructor(private usuario: HttpClient) { }

  async agregarUsuario(usuario: Usuario) {
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: usuario.firstName,
        lastName: usuario.lastName,
        age: usuario.age,
        username: usuario.username,
        password: usuario.password,
        birthdate: usuario.birthDate,
        gender: usuario.gender
      })
    })
      .then(res => res.json())
      .then(console.log);
  }
  async Logearse(usuario: Usuario) {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: usuario.username,
        password: usuario.password,
        // expiresInMins: 60, // optional
      })
    })
      .then(res => res.json())
      .then(console.log);

  }


}
