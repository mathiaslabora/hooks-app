import React, { useLayoutEffect, useRef, useState } from "react";

export const Cap = ({ name, episode }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  
  //espera a que se renderice todo para aplicar
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [episode]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1">Name: {name}</p>
        <p className="mb-1" ref={pRef}>
          Episode: {episode}
        </p>
        <hr />
        <footer className="blockquote-footer">Mathias Labora</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
