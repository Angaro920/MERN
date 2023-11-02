import React, { useState } from "react";
import axios from "axios";

function AgregarUsuario() {
  //hooks
  const [name, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefono] = useState(0);

  const addNewNumber = () => {
    axios.post('http://localhost:8080/add-phone',{name,phone,email}).then(alert("Usuario Agregado")).then(window.location.reload());
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Crear</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              telefono
            </label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={addNewNumber}  className="btn btn-success">
            Guardar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
