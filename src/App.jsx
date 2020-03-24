import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import listaRelaciones from "./Components/Relaciones/listaRelaciones";
import FormularioRelaciones from "./Components/Relaciones/formularioRelaciones";
import FormularioEntrevista from "./Components/Entrevista/FormularioEntrevista";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listado" component={listaRelaciones} />
      <Route exact path="/formulario" component={FormularioRelaciones} />
      <Route exact path="/entrevista" component={FormularioEntrevista} />
    </Switch>
  );
}

export default App;
