import React, { PureComponent, ReactNode } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Components/Home/Home";
import listaRelaciones from "./Components/Relaciones/listaRelaciones";
import FormularioRelaciones from "./Components/Relaciones/formularioRelaciones";
import EditarListaRelaciones from "./Components/Relaciones/editarListaRelaciones";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listado" component={listaRelaciones} />
      <Route exact path="/formulario" component={FormularioRelaciones} />
      <Route exact path="/editar" component={EditarListaRelaciones} />
    </Switch>
  );
}

export default App;
