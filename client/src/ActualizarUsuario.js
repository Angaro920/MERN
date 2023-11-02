import React, { useState, useEffect } from "react";
import Axios from "axios";

function ActualizarUsuario() {
  const estilo = {
    width: "18rem",
  };
  const [phonebook, setPhonebook] = useState([]);
  const [phone, setNewPhone] = useState(0);
    useEffect(() => {
      Axios.get("http://localhost:8080/get-phone").then((res) => {
        setPhonebook(res.data.data.phoneNumbers);
      });
    }, []);

  const updatePhone = (id) =>{
       Axios.put('http://localhost:8080/update-phone/',{ id,phone })
  }

  return (
    
    <div className="container">
      {
        phonebook.map((val,key) => {
          return <div key={key} className="phone" >
            <h1>{val.name}</h1>
            <p>{val.phone}</p>
            <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }}/>
            <button className="update-btn"  onClick={() => {updatePhone(val._id)}}>Update</button>
          </div>
        })
      }
    </div>  
  )
}

export default ActualizarUsuario;
