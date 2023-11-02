import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function ListaUsuarios() {
  const estilo = {
    width: "18rem",
  };
  const [phonebook, setPhonebook] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);

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

export default ListaUsuarios;
