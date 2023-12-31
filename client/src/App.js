
import './App.css';
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import ActualizarUsuario from './ActualizarUsuario';
import BorrarUsuario from './BorrarUsuario';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRUD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="listausuarios">Read</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="actualizarusuario">Update</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="borrarusuario">Delete</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route
            path="/agregarusuario"
            element={<AgregarUsuario />}
            exact
          ></Route>
          <Route
            path="/actualizarusuario"
            element={<ActualizarUsuario />}
            exact
          ></Route>
           <Route
            path="/listausuarios"
            element={<ListaUsuarios />}
            exact
          ></Route>
          <Route
            path="/borrarusuario"
            element={<BorrarUsuario/>}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
