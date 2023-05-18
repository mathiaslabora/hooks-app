import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff=(iterationNumber)=>{
  for(let i = 0; i<iterationNumber; i++){
    console.log("asjasj")
  }
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);
//memoriza cada que counter cambia
  const memorizedMemo = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
    <h4>{heavyStuff(memorizedMemo)}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary ml-2"
       onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
