import React, { useState, useEffect } from "react";
import Axios from "axios";

function BorrarUsuario() {
  const estilo = {
    width: "18rem",
  };
  const [phone, setNewPhone] = useState(0);
  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);
  const [phonebook, setPhonebook] = useState([]);
  const deletePhone = (id) => {
    Axios.delete(`http://localhost:8080/delete-phone/${id}`)
      .then(alert("Usuario eliminado"))
      .then(window.location.reload());
  };

  return (
    <div className="container text-center">
      <p></p>
      <h1>Lista de Contactos</h1>
      <div className="album">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
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
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deletePhone(val._id);
                        }}
                      >
                        Borrar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default BorrarUsuario;
