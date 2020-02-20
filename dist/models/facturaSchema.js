"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var facturaSchema = new Schema({
    numero_factura: String,
    nit_cliente: String,
    fecha_emision: String
});
module.exports = mongoose.model("Factura", facturaSchema);
