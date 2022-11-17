export interface Usuario {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  birthDate:Date;
  gender:string;
}

export interface UsuarioConIdo extends Usuario {
  id: number;
}

