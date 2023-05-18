import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import {useGeolocation}from "./GeoLocation"
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

//   const incrementFunc=  useCallback(
//       () => {
//         setCounter((value)=>value+1);
//       },
//       [],
//     )
//con argumento:
const { status, latitude, longitude } = useGeolocation()
console.log(status, latitude, longitude)
    const incrementFunc=  useCallback(
        (value) => {
          setCounter((c)=>c+value);
        },
        [],
      )
    
//   const incrementFunc = () => {
//     setCounter(counter + 1);
//   };
  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFunc}/>
    </>
  );
};
