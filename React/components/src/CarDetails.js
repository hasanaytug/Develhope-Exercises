import React, { useRef } from "react";
import { useEffect } from "react";

function CarDetails({ initialData }) {
  let { model, year, color } = initialData;

  const yearRef = useRef(null);
  const modelRef = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    modelRef.current.value = model;
    colorRef.current.value = color;
    yearRef.current.value = year;
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your selection is: ${year} ${color} ${model}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={yearRef} name="year" type="text" />
        <input ref={modelRef} name="model" type="text" />
        <input ref={colorRef} vname="color" type="text" />
        <button type="submit">Select Car</button>
      </form>
    </div>
  );
}

export default CarDetails;
