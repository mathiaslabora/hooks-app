import React, { useEffect } from "react";
//import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const  {formState, onInputChange, username, password, email, onResetForm} = useForm({
    username: '',
    email: '',
    password:''
  })

  //const{ username, email, password }=formState;

  useEffect(() => {
    console.log("useEffect llamado");
  }, []); //segndo arg es la dependencia(condiciones xa dispararlo)
  //arreglo vacio=> solo una vez
  //recomendado un useffect x cada cosa que quiero cambiar
  //cuando el form cambia:
  useEffect(() => {
    console.log("formstate cambiado");
  }, [formState]);
  //solo el correo:
  useEffect(() => {
    console.log("email cambiado");
  }, [email]);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
    

      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contrasenia"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
