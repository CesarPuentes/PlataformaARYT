import React, { useState } from "react";
import { graphql, compose } from "react-apollo";

//importa mutaciones
import {
  deleteRelacionMutation,
  updateMutation,
  GetRelacionesQuery
} from "../../Queries/queries";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
//Estos son para hacer la tabla
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//Estos son para hacer el dialogo de edición de datos
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FormControl } from '@material-ui/core';

//Calendar
import Calendar from "react-calendar";

//Componentes importados
import DetallesRelaciones from "./DetallesRelaciones";
import MainNavbar from "../Navbar/MainNavbar";

import Test from "./test";

//Asignar dateformar a una variable homonima
var dateFormat = require("dateformat");

//Declaración estilos material-ui
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

//Estilos material-ui para la ventana de edición
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

//Función render que regresa la ventana de edición
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

//Estilos material-ui para la ventana de edición
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

//Estilos material-ui para la ventana de edición
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

{
  /* Función principal para renderizar la lista y también para realizar la mutaciones de editado/borrado con graphQL */
}
function ListaRelaciones(props) {
  const classes = useStyles();

  //Se declaran los estados para mutaciones con Hooks (useState)
  let [id, setId] = useState(0);
  let [codigo_consecutivo, setCodigo_consecutivo] = useState("");
  let [tipo_prueba, setTipo_prueba] = useState("");
  let [nombres_candidato, setNombres_candidato] = useState("");
  let [cedula, setCedula] = useState("");
  let [cargo, setCargo] = useState("");
  let [cliente, setCliente] = useState("");
  let [precio, setPrecio] = useState(0);
  let [gestor, setGestor] = useState("");
  let [pagada, setPagada] = useState("");
  let [completada, setCompletada] = useState("");
  let [fecha_prueba, setFecha_prueba] = useState("");
  let [factura, setFactura] = useState("");

  //Estados con hooks para manejo de interfaz
  let [showDate, setShowDate] = useState(false);
  let [openTitle, setOpenTitle] = useState(true);
  let [open, setOpen] = React.useState(false);



  let submitForm = (e)=>{
    e.preventDefault()
    setId("");
    setCodigo_consecutivo("");
    setTipo_prueba("");
    setNombres_candidato("");
    setCedula("");
    setCargo("");
    setCliente("");
    setPrecio("");
    setGestor("");
    setCompletada("");
    setPagada("");
    setFecha_prueba("");
    window.location.reload();
  }
  {
    /* MUTACIONES */
  }

  //Mutación DELETE
  const handleDelete = evt => {
    props.deleteRelacionMutation({
      variables: {
        id: evt
      }
    });
    window.location.reload();
  };

  //Mutación EDITAR
  let handleEdit = evt => {
    props.updateMutation({
      variables: {
        id: id,
        codigo_consecutivo: codigo_consecutivo,
        tipo_prueba: tipo_prueba,
        nombres_candidato: nombres_candidato,
        cedula: cedula,
        cargo: cargo,
        cliente: cliente,
        precio: precio,
        gestor: gestor,
        completada: completada,
        pagada: pagada,
        fecha_prueba: fecha_prueba,

      }
    });
  };
  //Función wrap que hereda como argumentos el estado de un componente en particular y lo pasa como parametro a las funciones (e).
  let ClickOpen = (...e) => {
    handleClickOpen();
    focusState(e);
  };
  //Función que abre el dialogo de edición
  const handleClickOpen = () => {
    setOpen(true);
  };
  //Función que agrega los datos deseados al formulario de edición
  let focusState = e => {
    setId(e[0]);
    setCodigo_consecutivo(e[1]);
    setTipo_prueba(e[2]);
    setNombres_candidato(e[3]);
    setCedula(e[4]);
    setCargo(e[5]);
    setCliente(e[6]);
    setPrecio(e[7]);
    setGestor(e[8]);
    setCompletada(e[9]);
    setPagada(e[10]);
    setFecha_prueba(e[11]);
  };
 
  {
    /* sección calendario */
  }
  //Funciones para abrir y cerrar calendario
  let onDateClick = () => setShowDate(true);
  let cerrarCalendario = () => setShowDate(false);

  //Convertir la fecha a un formato más corto usando la variable dateFormat
  let onChange = date => {
    let fecha_prueba = dateFormat(date, "dddd, mmmm dS, yyyy");
    setFecha_prueba(fecha_prueba);
    cerrarCalendario();
  };

  //Manejando el pop-up con mensaje de exito

  let handleCalendarClick = () => {
    this.setState({ openTitle: true });
  };

   //función para cerrar ventana
   const handleClose = () => {
    setOpen(false);
  };

  let handleCalendarClose = (event, reason) => {
    handleEdit(event);
    if (reason === "clickaway") {
      return;
    }
  };

  function displayRelaciones() {
    //asigna los props definidos en ListaRelaciones() a la variable data
    var data = props.data;
    if (data.loading) {
      return <div>Loading relacion...</div>;
    } else {
      return (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* Esto es el nombre de las tablas */}
                  <TableCell>Código consecutivo</TableCell>
                  <TableCell align="center">Tipo Prueba</TableCell>
                  <TableCell align="center">Nombres candidato</TableCell>
                  <TableCell align="center">Cedula</TableCell>
                  <TableCell align="center">Cargo</TableCell>
                  <TableCell align="center">Cliente</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Gestor</TableCell>
                  <TableCell align="center">Pagada</TableCell>
                  <TableCell align="center">Completada</TableCell>
                  <TableCell align="center">Fecha de registro</TableCell>
                  <TableCell align="center">Factura</TableCell>
                  <TableCell align="center">Acción</TableCell>
                  <TableCell align="center">Acción</TableCell>
                  <TableCell align="center"> </TableCell>
                  <TableCell align="center"> </TableCell>
                </TableRow>
              </TableHead>
              {/* Esto es el cuerpo de las tablas. El objeto data se descompone usando '.map' */}
              <TableBody>
                {data.relaciones.map((relacion, index) => (
                  <TableRow key={relacion.id}>
                    <TableCell align="center">
                      {relacion.codigo_consecutivo}
                    </TableCell>
                    <TableCell align="center">{relacion.tipo_prueba}</TableCell>
                    <TableCell align="center">
                      {relacion.nombres_candidato}
                    </TableCell>
                    <TableCell align="center">{relacion.cedula}</TableCell>
                    <TableCell align="center">{relacion.cargo}</TableCell>
                    <TableCell align="center">{relacion.cliente}</TableCell>
                    <TableCell align="center">{relacion.precio}</TableCell>
                    <TableCell align="center">{relacion.gestor}</TableCell>
                    <TableCell align="center">{relacion.completada}</TableCell>
                    <TableCell align="center">{relacion.pagada}</TableCell>
                    <TableCell align="center">
                      {relacion.fecha_prueba}
                    </TableCell>
                    <TableCell align="center">{relacion.facturaId}</TableCell>

                    {/* Función de edición */}
                    <TableCell align="center">
                      <Button
                        onClick={() =>
                          ClickOpen(
                            relacion.id,
                            relacion.codigo_consecutivo,
                            relacion.tipo_prueba,
                            relacion.nombres_candidato,
                            relacion.cedula,
                            relacion.cargo,
                            relacion.cliente,
                            relacion.precio,
                            relacion.gestor,
                            relacion.pagada,
                            relacion.completada,
                            relacion.fecha_prueba
                          )
                        }
                      >
                        Editar
                      </Button>
                    </TableCell>
                    
                    <Dialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <form action="/" onSubmit={e => submitForm(e)}>
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      ></DialogTitle>
                      <DialogContent dividers>
                        <div className="tabla">
                          {/* Formulario para edición. Hereda los estados de cada columna (map(parameter, index)) */}
                          <TextField
                            required
                            id="standard-required"
                            label="Numero consecutivo"
                            onChange={e => setCodigo_consecutivo( e.target.value )}
                            value={codigo_consecutivo}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Tipo prueba"
                            onChange={e => setTipo_prueba( e.target.value )}
                            value={tipo_prueba}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Nombres candidato"
                            onChange={e => setNombres_candidato( e.target.value )}
                            value={nombres_candidato}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="cedula"
                            onChange={e => setCedula( e.target.value )}
                            value={cedula}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Cargo al que aspira"
                            onChange={e => setCargo( e.target.value )}
                            value={cargo}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Cliente"
                            onChange={e => setCliente( e.target.value )}
                            value={cliente}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Precio prueba"
                            onChange={e => setPrecio( e.target.value )}
                            value={precio}
                            className="unidadTabla"
                            type="number"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Gestor"
                            onChange={e => setGestor( e.target.value )}
                            value={gestor}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Pagada"
                            onChange={e => setPagada( e.target.value )}
                            value={pagada}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Completada"
                            onChange={e => setCompletada( e.target.value )}
                            value={completada}
                            className="unidadTabla"
                          />
                          <TextField
                            required
                            id="standard-required"
                            label="Fecha prueba"
                            onChange={e => setFecha_prueba( e.target.value )}
                            value={fecha_prueba}
                            onClick={onDateClick}
                            className="unidadTabla"
                          />
                
                          {/* Sección calendario. Render condicional. */}
                          {showDate ? (
                            <div>
                              <Calendar
                                className="centerButtons"
                                onChange={onChange}
                              />
                              <Button
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={cerrarCalendario}
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
                              onClick={onDateClick}
                              className="centerButtons"
                            >
                              Añadir fecha
                            </Button>
                          )}
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <button
                          autoFocus
                          onClick={e => handleCalendarClose(e.target.value)}
                          color="primary"
                        >
                          Salvar cambios
                        </button>
                      </DialogActions>
                      </form>
                    </Dialog>
                   

                    <TableCell align="center">
                      {/* Función de borrado */}
                      <Button onClick={e => handleDelete(e.target.value)}>
                        <div>Borrar</div>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Test />
        </div>
      );
    }
  }
  return (
    <div>
      <MainNavbar />
      <br />
      <h1>Lista</h1>
      {displayRelaciones()}
    </div>
  );
}

export default compose(
  graphql(GetRelacionesQuery),
  graphql(deleteRelacionMutation, { name: "deleteRelacionMutation" }),
  graphql(updateMutation, { name: "updateMutation" })
)(ListaRelaciones);


