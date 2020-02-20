const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facturaSchema = new Schema({
  numero_factura: String,
  nit_cliente: String,
  fecha_emision: String
});

module.exports = mongoose.model("Factura", facturaSchema);
