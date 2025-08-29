import React from "react";
import { useEffect, useState } from "react";

export default function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => setCoords({ x, y });

    window.addEventListener("mousemove", onMouseMove);
    // cleanup como en tu imagen de referencia
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <pre style={{ marginTop: 8 }}>{JSON.stringify(coords)}</pre>
    </>
  );
}
