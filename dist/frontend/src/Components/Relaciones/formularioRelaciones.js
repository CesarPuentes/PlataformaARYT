"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var react_calendar_1 = __importDefault(require("react-calendar"));
var reactjs_popup_1 = __importDefault(require("reactjs-popup"));
var queries_1 = require("../../Queries/queries");
require("./formulario.css");
var MainNavbar_1 = __importDefault(require("../Navbar/MainNavbar"));
var dateFormat = require("dateformat");
var FormularioRelaciones = /** @class */ (function (_super) {
    __extends(FormularioRelaciones, _super);
    function FormularioRelaciones(props) {
        var _this = _super.call(this, props) || this;
        _this.onDateClick = function () { return _this.setState({ showDate: true }); };
        _this.cerrarCalendario = function () { return _this.setState({ showDate: false }); };
        //Convertir la fecha a un formato más corto usando la variable dateFormat
        _this.onChange = function (date) {
            var fecha_prueba = dateFormat(date, "dddd, mmmm dS, yyyy");
            _this.setState({ fecha_prueba: fecha_prueba });
            _this.cerrarCalendario();
        };
        //Manejando el pop-up con mensaje de exito
        _this.handleClick = function () {
            _this.setState({ openTitle: true });
        };
        _this.handleClose = function (event, reason) {
            if (reason === "clickaway") {
                return;
            }
            _this.setState({ openTitle: false });
        };
        _this.state = {
            codigo_consecutivo: "ARYT_",
            tipo_prueba: "",
            nombres_candidato: "",
            cedula: "",
            cargo: "",
            cliente: "",
            precio: "",
            gestor: "",
            fecha_prueba: "",
            showDate: false,
            openTitle: true
        };
        return _this;
    }
    FormularioRelaciones.prototype.submitForm = function (e) {
        e.preventDefault();
        // use the addBookMutation
        this.props.addRelacionMutation({
            variables: {
                codigo_consecutivo: this.state.codigo_consecutivo,
                tipo_prueba: this.state.tipo_prueba,
                nombres_candidato: this.state.nombres_candidato,
                cedula: this.state.cedula,
                cargo: this.state.cargo,
                cliente: this.state.cliente,
                precio: this.state.precio,
                gestor: this.state.gestor,
                fecha_prueba: this.state.fecha_prueba
            }
        });
        this.setState({ codigo_consecutivo: "" });
        this.setState({ tipo_prueba: "" });
        this.setState({ nombres_candidato: "" });
        this.setState({ cedula: "" });
        this.setState({ cargo: "" });
        this.setState({ cliente: " " });
        this.setState({ precio: 0 });
        this.setState({ gestor: "" });
        this.setState({ fecha_prueba: "" });
        window.location.reload();
    };
    FormularioRelaciones.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        return (<div>
        <MainNavbar_1.default />
        <br />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="tabla">
            <TextField_1.default required id="standard-required" label="Numero consecutivo" defaultValue="ARYT_" value={this.state.codigo_consecutivo} onChange={function (e) {
            return _this.setState({ codigo_consecutivo: e.target.value });
        }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Tipo prueba" defaultValue="" value={this.state.tipo_prueba} onChange={function (e) { return _this.setState({ tipo_prueba: e.target.value }); }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Nombres candidato" defaultValue="" value={this.state.nombres_candidato} onChange={function (e) {
            return _this.setState({ nombres_candidato: e.target.value });
        }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="cedula" defaultValue="" value={this.state.cedula} onChange={function (e) { return _this.setState({ cedula: e.target.value }); }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Cargo al que aspira" defaultValue="" value={this.state.cargo} onChange={function (e) { return _this.setState({ cargo: e.target.value }); }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Empresa cliente" defaultValue="" value={this.state.cliente} onChange={function (e) { return _this.setState({ cliente: e.target.value }); }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Precio prueba" defaultValue="" value={this.state.precio} onChange={function (e) { return _this.setState({ precio: e.target.value }); }} className="unidadTabla" type="number"/>
            <TextField_1.default required id="standard-required" label="Gestor" defaultValue="" value={this.state.gestor} onChange={function (e) { return _this.setState({ gestor: e.target.value }); }} className="unidadTabla"/>
            <TextField_1.default required id="standard-required" label="Fecha" defaultValue={this.state.date} value={this.state.fecha_prueba} onClick={this.onDateClick} onChange={function (e) { return _this.setState({ gestor: e.target.value }); }} className="unidadTabla"></TextField_1.default>
          </div>

          <div className="centerObjects">
            <div>
              

              {this.state.showDate ? (<div>
                  <react_calendar_1.default className="centerButtons" onChange={this.onChange} value={this.state.date}/>
                  <Button_1.default variant="contained" color="primary" href="#contained-buttons" onClick={this.cerrarCalendario} className="centerButtons">
                    Cerrar Calendario
                  </Button_1.default>
                </div>) : (<Button_1.default variant="contained" color="primary" href="#contained-buttons" onClick={this.onDateClick} className="centerButtons">
                  Añadir fecha
                </Button_1.default>)}
            </div>
            <div>
              <reactjs_popup_1.default trigger={<button onClick={this.handleClick} className="centerButtons button">
                    Ingresar datos
                  </button>} position="right center">
                <div>Datos enviados exitosamente!!</div>
              </reactjs_popup_1.default>
            </div>
          </div>
        </form>
      </div>);
    };
    return FormularioRelaciones;
}(react_1.default.Component));
exports.default = react_apollo_1.compose(react_apollo_1.graphql(queries_1.GetRelacionesQuery, { name: "GetRelacionesQuery" }), react_apollo_1.graphql(queries_1.addRelacionMutation, { name: "addRelacionMutation" }))(FormularioRelaciones);
