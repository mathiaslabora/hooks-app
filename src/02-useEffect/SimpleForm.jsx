import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState]= useState({
        username:'mathias',
        email:'mathiaslabora@gmail.com'
    })
const { username, email }=formState;

const onInputChange=({target})=>{
const {name, value}=target;
setFormState({
    ...formState,
    [name]:value
})
}


useEffect( ()=>{
    console.log('useeffect llamado')
}, []);//segndo arg es la dependencia(condiciones xa dispararlo)
//arreglo vacio=> solo una vez
//recomendado un useffect x cada cosa que quiero cambiar
//cuando el form cambia:
useEffect( ()=>{
    console.log('formstate cambiado')
}, [formState]);
//solo el correo:
useEffect( ()=>{
    console.log('email cambiado')
}, [email]);





  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
    {(username==="Mathias")&&<Message/>}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
