import React from "react";
import { useEffect, useState } from "react";
import Message from "./Message";
import "./form.css";

const initialState = {
  matricula: "",
  nombre: "",
  apellidos: "",
  edad: "",
  universidad: "",
  carrera: "",
};

export default function SimpleForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(null);

  const { matricula, nombre, apellidos, edad, universidad, carrera } =
    formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formState);      
  };

 
  useEffect(() => {
  }, []);

  useEffect(() => {

  }, [formState]);

  useEffect(() => {
    
    if (universidad.trim() !== "") {
      
    }
  }, [universidad]);

  const onReset = () => {
    setFormState(initialState);
    setSubmitted(null);
  };

  return (
    <div className="container">
      <h1>LAB 3</h1>
      <hr />

      <form onSubmit={onSubmit} className="form">
        <label>
          Matrícula
          <input
            type="text"
            name="matricula"
            placeholder="A0XXXXXXX"
            value={matricula}
            onChange={onInputChange}
          />
        </label>

        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </label>

        <label>
          Apellidos
          <input
            type="text"
            name="apellidos"
            placeholder="Tus apellidos"
            value={apellidos}
            onChange={onInputChange}
          />
        </label>

        <label>
          Edad
          <input
            type="number"
            name="edad"
            placeholder="18"
            value={edad}
            onChange={onInputChange}
            min="0"
          />
        </label>

        <label>
          Universidad
          <input
            type="text"
            name="universidad"
            placeholder="Tec de Monterrey"
            value={universidad}
            onChange={onInputChange}
          />
        </label>

        <label>
          Carrera
          <input
            type="text"
            name="carrera"
            placeholder="Ingeniería en TC"
            value={carrera}
            onChange={onInputChange}
          />
        </label>

        <div className="actions">
          <button type="submit">Enviar</button>
          <button type="button" className="ghost" onClick={onReset}>
            Limpiar
          </button>
        </div>
      </form>

      {}
      {(nombre.trim().toLowerCase() === "strider2" ||
        carrera.trim().toLowerCase() === "sistemas") && <Message />}

      {}
      {submitted && (
        <section className="output">
          <h2>Datos enviados</h2>
          <p><strong>Matrícula:</strong> {submitted.matricula}</p>
          <p><strong>Nombre:</strong> {submitted.nombre}</p>
          <p><strong>Apellidos:</strong> {submitted.apellidos}</p>
          <p><strong>Edad:</strong> {submitted.edad}</p>
          <p><strong>Universidad:</strong> {submitted.universidad}</p>
          <p><strong>Carrera:</strong> {submitted.carrera}</p>
        </section>
      )}
    </div>
  );
}
