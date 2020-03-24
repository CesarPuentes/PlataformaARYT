import React from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";

import { addRelacionMutation, GetRelacionesQuery } from "../../Queries/queries";

import "./../css/formulario.css";
import MainNavbar from "../Navbar/MainNavbar";

var dateFormat = require("dateformat");

class FormularioRelaciones extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  submitForm(e) {
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
  }

  onDateClick = () => this.setState({ showDate: true });
  cerrarCalendario = () => this.setState({ showDate: false });

  //Convertir la fecha a un formato más corto usando la variable dateFormat
  onChange = date => {
    let fecha_prueba = dateFormat(date, "dddd, mmmm dS, yyyy");
    this.setState({ fecha_prueba });
    this.cerrarCalendario();
  };

  //Manejando el pop-up con mensaje de exito

  handleBorrar = () => {
    this.setState({ codigo_consecutivo: "" });
    this.setState({ tipo_prueba: "" });
    this.setState({ nombres_candidato: "" });
    this.setState({ cedula: "" });
    this.setState({ cargo: "" });
    this.setState({ cliente: " " });
    this.setState({ precio: 0 });
    this.setState({ gestor: "" });
    this.setState({ fecha_prueba: "" });
  };

  handleClick = () => {
    this.setState({ openTitle: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ openTitle: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainNavbar />
        <br />
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="tabla">
            <TextField
              required
              data-testid="codigo_consecutivo_field"
              id="standard-required"
              label="Numero consecutivo"
              defaultValue="ARYT_"
              value={this.state.codigo_consecutivo}
              onChange={e =>
                this.setState({ codigo_consecutivo: e.target.value })
              }
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Tipo prueba"
              defaultValue=""
              value={this.state.tipo_prueba}
              onChange={e => this.setState({ tipo_prueba: e.target.value })}
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Nombres candidato"
              defaultValue=""
              value={this.state.nombres_candidato}
              onChange={e =>
                this.setState({ nombres_candidato: e.target.value })
              }
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="cedula"
              defaultValue=""
              value={this.state.cedula}
              onChange={e => this.setState({ cedula: e.target.value })}
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Cargo al que aspira"
              defaultValue=""
              value={this.state.cargo}
              onChange={e => this.setState({ cargo: e.target.value })}
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Empresa cliente"
              defaultValue=""
              value={this.state.cliente}
              onChange={e => this.setState({ cliente: e.target.value })}
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Precio prueba"
              defaultValue=""
              value={this.state.precio}
              onChange={e => this.setState({ precio: e.target.value })}
              className="unidadTabla"
              type="number"
            />
            <TextField
              required
              id="standard-required"
              label="Gestor"
              defaultValue=""
              value={this.state.gestor}
              onChange={e => this.setState({ gestor: e.target.value })}
              className="unidadTabla"
            />
            <TextField
              required
              id="standard-required"
              label="Fecha"
              defaultValue={this.state.date}
              value={this.state.fecha_prueba}
              onClick={this.onDateClick}
              onChange={e => this.setState({ gestor: e.target.value })}
              className="unidadTabla"
            ></TextField>
          </div>

          <div className="centerObjects">
            <div>
              {/* Esta parte hace un render condicional sobre lo que se va a mostrar.
            Si el estado showDate es falso mostrará el botón añadir fecha, de lo
            contratio mostrará el calendario */}

              {this.state.showDate ? (
                <div>
                  <Calendar
                    className="centerButtons"
                    onChange={this.onChange}
                    value={this.state.date}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    onClick={this.cerrarCalendario}
                    className="centerButtons"
                  >
                    Cerrar Calendario
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={this.onDateClick}
                  className="centerButtons"
                >
                  Añadir fecha
                </Button>
              )}
            </div>
            <div>
              <Popup
                trigger={
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                    className="centerButtons button"
                    type="submit"
                  >
                    Ingresar datos
                  </Button>
                }
                position="right center"
              >
                <div>Datos enviados exitosamente!!</div>
              </Popup>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleBorrar}
                className="centerButtons button"
              >
                Borrar todo
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(GetRelacionesQuery, { name: "GetRelacionesQuery" }),
  graphql(addRelacionMutation, { name: "addRelacionMutation" })
)(FormularioRelaciones);
