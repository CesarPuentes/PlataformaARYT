import React, { useState } from "react";

import { gql } from 'apollo-boost';
import {useQuery, useMutation} from '@apollo/react-hooks'

//Importar estilos
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';



import "./../css/formulario.css";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  largeTexbox: {
    width: "100vw"
  },
  mediumTextbox: {
    width:"50vw"
  },
  smallTextbox: {
    width:"30vw"
  }
}));

const addRelacionMutation = gql`
  mutation AddRelacion(
    $codigo_consecutivo: String!
    $tipo_prueba: String!
    $nombres_candidato: String!
    $cedula: String!
  ) {
    addRelacion(
      codigo_consecutivo: $codigo_consecutivo
      tipo_prueba: $tipo_prueba
      nombres_candidato: $nombres_candidato
      cedula: $cedula
    ) {
      codigo_consecutivo
      tipo_prueba
      nombres_candidato
      cedula
    }
  }
`;

function FormularioEntrevista() {
  const classes = useStyles();
  let [id, setId] = useState(0);
  let [codigo_consecutivo, setCodigo_consecutivo] = useState("");
  let [tipo_prueba, setTipo_prueba] = useState("");
  let [nombres_candidato, setNombres_candidato] = useState("");
  let [cedula, setCedula] = useState("");
  let [nombres, setNombres] = useState("");
  let [fecha_nacimiento, setFecha_nacimiento] = useState("");
  let [edad, setEdad] = useState("");
  let [telefonos, setTelefonos] = useState("");
  let [estado_civil, setEstado_civil] = useState("");
  let [direccion, setDirección] = useState("");
  let [fecha_prueba, setFecha_prueba] = useState("");
  let [objetivo_prueba, setObjetivo_prueba] = useState("");
  let [cliente, setCliente] = useState("");
  let [cargo, setCargo] = useState("");
  const[addRelacion] = useMutation(addRelacionMutation);

  let handleSubmit = evt => {
    evt.preventDefault();
    console.log("Submitted!")
    // use the addBookMutation
  }
  


  return (
    <div className={classes.root}>
     <Grid container spacing={3}>
     <Grid item xs={12}>
       <h5>Ingrese el nombre del candidato</h5>
        <TextField
          required
          data-testid="codigo_consecutivo_field"
          id="standard-required"
          label="Nombre candidato"
          onChange={e => setCodigo_consecutivo(e.target.value)}
          value={nombres}
          className={classes.largeTexbox}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <h5>Ingrese la cedula y fecha de expedición</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Cedula"
          onChange={e => setTipo_prueba(e.target.value)}
          value={cedula}
          className={classes.mediumTextbox}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <h5>Ingrese el lugar y fecha de nacimiento</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Lugar nacimiento"
          onChange={e => setTipo_prueba(e.target.value)}
          value={fecha_nacimiento}
          className={classes.mediumTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={4}>
        <h5>Edad</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Edad"
          onChange={e => setTipo_prueba(e.target.value)}
          value={edad}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={4}>
        <h5>Teléfonos</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Teléfonos"
          onChange={e => setTipo_prueba(e.target.value)}
          value={telefonos}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={4}>
        <h5>Estado Civil</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Estado civil"
          onChange={e => setTipo_prueba(e.target.value)}
          value={estado_civil}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={12}>
       <h5>Dirección actual, localidad y tiempo de estadia.</h5>
        <TextField
          required
          data-testid="codigo_consecutivo_field"
          id="standard-required"
          label="Dirección actual, localidad y tiempo de estadia"
          onChange={e => setCodigo_consecutivo(e.target.value)}
          value={direccion}
          className={classes.largeTexbox}
        />
        </Grid>





        <Grid item xs={12}>
        <h3> Datos del examen </h3>
        </Grid>
        
        <Grid item xs={6} sm={3}>
        <h5>Fecha del examen</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Fecha"
          onChange={e => setTipo_prueba(e.target.value)}
          value={fecha_prueba}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={3}>
        <h5>Ciudad</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Ciudad"
          onChange={e => setTipo_prueba(e.target.value)}
          value={objetivo_prueba}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={3}>
        <h5>Empresa que solicita</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Empresa"
          onChange={e => setTipo_prueba(e.target.value)}
          value={cliente}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={6} sm={3}>
        <h5>Cargo al que aspira</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Cargo"
          onChange={e => setTipo_prueba(e.target.value)}
          value={cargo}
          className={classes.smallTextbox}
        />
        </Grid>
        <Grid item xs={12}>
        <h5>Objetivo</h5>
        <TextField
          required
          data-testid="tipo_prueba_field"
          id="standard-required"
          label="Objetivo"
          onChange={e => setTipo_prueba(e.target.value)}
          value={tipo_prueba}
          className={classes.largeTexbox}
        />
        </Grid>
        <Button
            onClick={()=>addRelacion({variables: {codigo_consecutivo: codigo_consecutivo, tipo_prueba:tipo_prueba, nombres_candidato: nombres_candidato, cedula: cedula}})}
        >Insertar</Button>
    </Grid>
    </div>
  );
}


export default FormularioEntrevista;

