import React, { useState, useEffect } from "react";
import Axios from "axios";

function ActualizarUsuario() {
  const estilo = {
    width: "18rem",
  };
  const [phonebook, setPhonebook] = useState([]);
  const [phone, setNewPhone] = useState(0);
  const [email, setNewEmail] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);

  const updatePhone = (id) => {
    Axios.put("http://localhost:8080/update-phone/", { id, phone, email }).then(alert("Usuario Actualizado")).then(window.location.reload());
  };

  return (
    <div className="container">
      <p></p>
      <h1>Lista de Contactos</h1>
      <div className="album">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 "></div>
        {phonebook.map((val, key) => {
          return (
            <div key={key} className="phone">
              <p></p>

              <div className="card" style={estilo}>
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">
                    {val.phone}
                    <p>{val.email}</p>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Actualizar Numero"
                      onChange={(e) => {
                        setNewPhone(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Actualizar Correo"
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-warning mt-1"
                      onClick={() => {
                        updatePhone(val._id);
                      }}
                    >
                      Update
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActualizarUsuario;
