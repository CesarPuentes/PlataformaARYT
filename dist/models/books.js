"use strict";
var Schema = mongoose.Schema;
var relacionSchema = new Schema({
  numero: Number,
  tipo_prueba: String,
  nombres_candidato: String,
  cedula: String,
  cargo: String,
  cliente: String,
  precio: Number,
  gestor: String,
  completada: Boolean,
  pagada: Boolean
});
