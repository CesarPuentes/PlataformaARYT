const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relacionSchema = new Schema({
  codigo_consecutivo: String,
  tipo_prueba: String,
  nombres_candidato: String,
  cedula: String,
  cargo: String,
  cliente: String,
  precio: Number,
  gestor: String,
  completada: String,
  pagada: String,
  fecha_prueba: String,
  fecha_nacimiento: String,
  edad: Number,
  telefonos: String,
  estado_civil: String,
  dirección: String,
  ciudad_prueba: String,
  objetivo_prueba: String,
  facturaId: String,
  estado_salud: String,
  observaciones: String
});

module.exports = mongoose.model("Relacion", relacionSchema);
