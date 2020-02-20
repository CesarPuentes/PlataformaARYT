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
  facturaId: String
});

module.exports = mongoose.model("Relacion", relacionSchema);
