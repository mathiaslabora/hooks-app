import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingCap, Cap } from "./";

export const MultipleCustomHooks = () => {

    const {increment, /* decrement, reset, */ counter} =useCounter(1);


  const { data, isLoading, /* hasError */ } = useFetch(
    `https://rickandmortyapi.com/api/episode/${counter}`
  );

  const {name, episode} = !!data && data;
    //!!data pasa de si es undefined a false
  return (
    <>
      <h1>Rick and Morty caps</h1>
      <hr />

      {isLoading 
      ?<LoadingCap/>
      :<Cap name={name} episode={episode}/>
      }
      <button onClick={()=>{increment()}} 
      disabled={isLoading}
      className="btn btn-primary">Next Cap</button>
    </>
  );
};
