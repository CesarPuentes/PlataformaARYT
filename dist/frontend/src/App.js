"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./Components/Home/Home"));
var listaRelaciones_1 = __importDefault(require("./Components/Relaciones/listaRelaciones"));
var formularioRelaciones_1 = __importDefault(require("./Components/Relaciones/formularioRelaciones"));
var editarListaRelaciones_1 = __importDefault(require("./Components/Relaciones/editarListaRelaciones"));
function App() {
    return (<react_router_dom_1.Switch>
      <react_router_dom_1.Route exact path="/" component={Home_1.default}/>
      <react_router_dom_1.Route path="/listado" component={listaRelaciones_1.default}/>
      <react_router_dom_1.Route exact path="/formulario" component={formularioRelaciones_1.default}/>
      <react_router_dom_1.Route exact path="/editar" component={editarListaRelaciones_1.default}/>
    </react_router_dom_1.Switch>);
}
exports.default = App;
