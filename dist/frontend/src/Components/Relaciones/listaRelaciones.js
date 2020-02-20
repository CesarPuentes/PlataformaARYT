"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_apollo_1 = require("react-apollo");
//importa mutaciones
var queries_1 = require("../../Queries/queries");
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/core/styles");
//Estos son para hacer la tabla
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableContainer_1 = __importDefault(require("@material-ui/core/TableContainer"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
//Estos son para hacer el dialogo de edición de datos
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
//Calendar
var react_calendar_1 = __importDefault(require("react-calendar"));
var MainNavbar_1 = __importDefault(require("../Navbar/MainNavbar"));
var test_1 = __importDefault(require("./test"));
//Asignar dateformar a una variable homonima
var dateFormat = require("dateformat");
//Declaración estilos material-ui
var useStyles = styles_1.makeStyles({
    table: {
        minWidth: 650
    }
});
//Estilos material-ui para la ventana de edición
var styles = function (theme) { return ({
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
}); };
//Función render que regresa la ventana de edición
var DialogTitle = styles_2.withStyles(styles)(function (props) {
    var children = props.children, classes = props.classes, onClose = props.onClose, other = __rest(props, ["children", "classes", "onClose"]);
    return (<DialogTitle_1.default disableTypography className={classes.root} {...other}>
      <Typography_1.default variant="h6">{children}</Typography_1.default>
      {onClose ? (<IconButton_1.default aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close_1.default />
        </IconButton_1.default>) : null}
    </DialogTitle_1.default>);
});
//Estilos material-ui para la ventana de edición
var DialogContent = styles_2.withStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(2)
    }
}); })(DialogContent_1.default);
//Estilos material-ui para la ventana de edición
var DialogActions = styles_2.withStyles(function (theme) { return ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}); })(DialogActions_1.default);
{
    /* Función principal para renderizar la lista y también para realizar la mutaciones de editado/borrado con graphQL */
}
function ListaRelaciones(props) {
    var _this = this;
    var classes = useStyles();
    //Se declaran los estados para mutaciones con Hooks (useState)
    var _a = react_1.useState(0), id = _a[0], setId = _a[1];
    var _b = react_1.useState(""), codigo_consecutivo = _b[0], setCodigo_consecutivo = _b[1];
    var _c = react_1.useState(""), tipo_prueba = _c[0], setTipo_prueba = _c[1];
    var _d = react_1.useState(""), nombres_candidato = _d[0], setNombres_candidato = _d[1];
    var _e = react_1.useState(""), cedula = _e[0], setCedula = _e[1];
    var _f = react_1.useState(""), cargo = _f[0], setCargo = _f[1];
    var _g = react_1.useState(""), cliente = _g[0], setCliente = _g[1];
    var _h = react_1.useState(0), precio = _h[0], setPrecio = _h[1];
    var _j = react_1.useState(""), gestor = _j[0], setGestor = _j[1];
    var _k = react_1.useState(""), pagada = _k[0], setPagada = _k[1];
    var _l = react_1.useState(""), completada = _l[0], setCompletada = _l[1];
    var _m = react_1.useState(""), fecha_prueba = _m[0], setFecha_prueba = _m[1];
    var _o = react_1.useState(""), factura = _o[0], setFactura = _o[1];
    //Estados con hooks para manejo de interfaz
    var _p = react_1.useState(false), showDate = _p[0], setShowDate = _p[1];
    var _q = react_1.useState(true), openTitle = _q[0], setOpenTitle = _q[1];
    var _r = react_1.default.useState(false), open = _r[0], setOpen = _r[1];
    var submitForm = function (e) {
        e.preventDefault();
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
    };
    {
        /* MUTACIONES */
    }
    //Mutación DELETE
    var handleDelete = function (evt) {
        props.deleteRelacionMutation({
            variables: {
                id: evt
            }
        });
        window.location.reload();
    };
    //Mutación EDITAR
    var handleEdit = function (evt) {
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
    var ClickOpen = function () {
        var e = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
        }
        handleClickOpen();
        focusState(e);
    };
    //Función que abre el dialogo de edición
    var handleClickOpen = function () {
        setOpen(true);
    };
    //Función que agrega los datos deseados al formulario de edición
    var focusState = function (e) {
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
    var onDateClick = function () { return setShowDate(true); };
    var cerrarCalendario = function () { return setShowDate(false); };
    //Convertir la fecha a un formato más corto usando la variable dateFormat
    var onChange = function (date) {
        var fecha_prueba = dateFormat(date, "dddd, mmmm dS, yyyy");
        setFecha_prueba(fecha_prueba);
        cerrarCalendario();
    };
    //Manejando el pop-up con mensaje de exito
    var handleCalendarClick = function () {
        _this.setState({ openTitle: true });
    };
    //función para cerrar ventana
    var handleClose = function () {
        setOpen(false);
    };
    var handleCalendarClose = function (event, reason) {
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
        }
        else {
            return (<div>
          <TableContainer_1.default component={Paper_1.default}>
            <Table_1.default className={classes.table} aria-label="simple table">
              <TableHead_1.default>
                <TableRow_1.default>
                  
                  <TableCell_1.default>Código consecutivo</TableCell_1.default>
                  <TableCell_1.default align="center">Tipo Prueba</TableCell_1.default>
                  <TableCell_1.default align="center">Nombres candidato</TableCell_1.default>
                  <TableCell_1.default align="center">Cedula</TableCell_1.default>
                  <TableCell_1.default align="center">Cargo</TableCell_1.default>
                  <TableCell_1.default align="center">Cliente</TableCell_1.default>
                  <TableCell_1.default align="center">Precio</TableCell_1.default>
                  <TableCell_1.default align="center">Gestor</TableCell_1.default>
                  <TableCell_1.default align="center">Pagada</TableCell_1.default>
                  <TableCell_1.default align="center">Completada</TableCell_1.default>
                  <TableCell_1.default align="center">Fecha de registro</TableCell_1.default>
                  <TableCell_1.default align="center">Factura</TableCell_1.default>
                  <TableCell_1.default align="center">Acción</TableCell_1.default>
                  <TableCell_1.default align="center">Acción</TableCell_1.default>
                  <TableCell_1.default align="center"> </TableCell_1.default>
                  <TableCell_1.default align="center"> </TableCell_1.default>
                </TableRow_1.default>
              </TableHead_1.default>
              
              <TableBody_1.default>
                {data.relaciones.map(function (relacion, index) { return (<TableRow_1.default key={relacion.id}>
                    <TableCell_1.default align="center">
                      {relacion.codigo_consecutivo}
                    </TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.tipo_prueba}</TableCell_1.default>
                    <TableCell_1.default align="center">
                      {relacion.nombres_candidato}
                    </TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.cedula}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.cargo}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.cliente}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.precio}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.gestor}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.completada}</TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.pagada}</TableCell_1.default>
                    <TableCell_1.default align="center">
                      {relacion.fecha_prueba}
                    </TableCell_1.default>
                    <TableCell_1.default align="center">{relacion.facturaId}</TableCell_1.default>

                    
                    <TableCell_1.default align="center">
                      <Button_1.default onClick={function () {
                return ClickOpen(relacion.id, relacion.codigo_consecutivo, relacion.tipo_prueba, relacion.nombres_candidato, relacion.cedula, relacion.cargo, relacion.cliente, relacion.precio, relacion.gestor, relacion.pagada, relacion.completada, relacion.fecha_prueba);
            }}>
                        Editar
                      </Button_1.default>
                    </TableCell_1.default>
                    
                    <Dialog_1.default onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                      <form action="/" onSubmit={function (e) { return submitForm(e); }}>
                      <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
                      <DialogContent dividers>
                        <div className="tabla">
                          
                          <TextField_1.default required id="standard-required" label="Numero consecutivo" onChange={function (e) { return setCodigo_consecutivo(e.target.value); }} value={codigo_consecutivo} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Tipo prueba" onChange={function (e) { return setTipo_prueba(e.target.value); }} value={tipo_prueba} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Nombres candidato" onChange={function (e) { return setNombres_candidato(e.target.value); }} value={nombres_candidato} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="cedula" onChange={function (e) { return setCedula(e.target.value); }} value={cedula} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Cargo al que aspira" onChange={function (e) { return setCargo(e.target.value); }} value={cargo} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Cliente" onChange={function (e) { return setCliente(e.target.value); }} value={cliente} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Precio prueba" onChange={function (e) { return setPrecio(e.target.value); }} value={precio} className="unidadTabla" type="number"/>
                          <TextField_1.default required id="standard-required" label="Gestor" onChange={function (e) { return setGestor(e.target.value); }} value={gestor} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Pagada" onChange={function (e) { return setPagada(e.target.value); }} value={pagada} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Completada" onChange={function (e) { return setCompletada(e.target.value); }} value={completada} className="unidadTabla"/>
                          <TextField_1.default required id="standard-required" label="Fecha prueba" onChange={function (e) { return setFecha_prueba(e.target.value); }} value={fecha_prueba} onClick={onDateClick} className="unidadTabla"/>
                
                          
                          {showDate ? (<div>
                              <react_calendar_1.default className="centerButtons" onChange={onChange}/>
                              <Button_1.default variant="contained" color="primary" href="#contained-buttons" onClick={cerrarCalendario} className="centerButtons">
                                Cerrar Calendario
                              </Button_1.default>
                            </div>) : (<Button_1.default variant="contained" color="primary" href="#contained-buttons" onClick={onDateClick} className="centerButtons">
                              Añadir fecha
                            </Button_1.default>)}
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <button autoFocus onClick={function (e) { return handleCalendarClose(e.target.value); }} color="primary">
                          Salvar cambios
                        </button>
                      </DialogActions>
                      </form>
                    </Dialog_1.default>
                   

                    <TableCell_1.default align="center">
                      
                      <Button_1.default onClick={function (e) { return handleDelete(e.target.value); }}>
                        <div>Borrar</div>
                      </Button_1.default>
                    </TableCell_1.default>
                  </TableRow_1.default>); })}
              </TableBody_1.default>
            </Table_1.default>
          </TableContainer_1.default>
          <test_1.default />
        </div>);
        }
    }
    return (<div>
      <MainNavbar_1.default />
      <br />
      <h1>Lista</h1>
      {displayRelaciones()}
    </div>);
}
exports.default = react_apollo_1.compose(react_apollo_1.graphql(queries_1.GetRelacionesQuery), react_apollo_1.graphql(queries_1.deleteRelacionMutation, { name: "deleteRelacionMutation" }), react_apollo_1.graphql(queries_1.updateMutation, { name: "updateMutation" }))(ListaRelaciones);
