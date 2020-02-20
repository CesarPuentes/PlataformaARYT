"use strict";
var Relacion = require("../models/relacionSchema");
var Factura = require("../models/facturaSchema");
var graphql = require("graphql");
var _ = require("lodash");
var GraphQLObjectType = graphql.GraphQLObjectType, GraphQLString = graphql.GraphQLString, GraphQLSchema = graphql.GraphQLSchema, GraphQLID = graphql.GraphQLID, GraphQLInt = graphql.GraphQLInt, GraphQLList = graphql.GraphQLList, GraphQLNonNull = graphql.GraphQLNonNull, GraphQLBoolean = graphql.GraphQLBoolean;
var RelacionType = new GraphQLObjectType({
    name: "Relacion",
    fields: function () { return ({
        id: { type: GraphQLID },
        codigo_consecutivo: { type: GraphQLString },
        tipo_prueba: { type: GraphQLString },
        nombres_candidato: { type: GraphQLString },
        cedula: { type: GraphQLString },
        cargo: { type: GraphQLString },
        cliente: { type: GraphQLString },
        precio: { type: GraphQLString },
        gestor: { type: GraphQLString },
        completada: { type: GraphQLString },
        pagada: { type: GraphQLString },
        fecha_prueba: { type: GraphQLString },
        factura: {
            type: FacturaType,
            resolve: function (parent, args) {
                //console.log("parenttt", parent)
                //return _.find(facturasx,{id: parent.facturaId});
                return Factura.findById(parent.facturaId);
            }
        }
    }); }
});
var FacturaType = new GraphQLObjectType({
    name: "Factura",
    fields: function () { return ({
        id: { type: GraphQLID },
        numero_factura: { type: GraphQLInt },
        nit_cliente: { type: GraphQLInt },
        fecha_emision: { type: GraphQLString },
        relaciones: {
            type: new GraphQLList(RelacionType),
            resolve: function (parent, args) {
                return Relacion.find({ facturaId: parent.id });
            }
        }
    }); }
});
var RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        relacion: {
            type: RelacionType,
            args: { id: { type: GraphQLID } },
            resolve: function (parent, args) {
                //return _.find(relacionesx, {id: args.id})
                return Relacion.findById(args.id);
            },
        },
        factura: {
            type: FacturaType,
            args: { id: { type: GraphQLID } },
            resolve: function (parent, args) {
                //return _.find(facturasx,{id: args.id})
                return Factura.findById(args.id);
            }
        },
        relaciones: {
            type: new GraphQLList(RelacionType),
            resolve: function (parent, args) {
                return Relacion.find({});
            }
        },
        facturas: {
            type: new GraphQLList(FacturaType),
            resolve: function (parent, args) {
                return Factura.find({});
            }
        }
    }
});
var Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addFactura: {
            type: FacturaType,
            args: {
                numero_factura: { type: GraphQLInt },
                nit_cliente: { type: GraphQLInt },
                fecha_emision: { type: GraphQLString }
            },
            resolve: function (parent, args) {
                var factura = new Factura({
                    numero_factura: args.numero_factura,
                    nit_cliente: args.nit_cliente,
                    fecha_emision: args.fecha_emision
                });
                return factura.save();
            }
        },
        addRelacion: {
            type: RelacionType,
            args: {
                codigo_consecutivo: { type: new GraphQLNonNull(GraphQLString) },
                tipo_prueba: { type: new GraphQLNonNull(GraphQLString) },
                nombres_candidato: { type: new GraphQLNonNull(GraphQLString) },
                cedula: { type: new GraphQLNonNull(GraphQLString) },
                cargo: { type: GraphQLString },
                cliente: { type: GraphQLString },
                precio: { type: GraphQLString },
                gestor: { type: GraphQLString },
                completada: { type: GraphQLString },
                pagada: { type: GraphQLString },
                fecha_prueba: { type: GraphQLString },
                facturaId: { type: GraphQLID }
            },
            resolve: function (parent, args) {
                var relacion = new Relacion({
                    codigo_consecutivo: args.codigo_consecutivo,
                    tipo_prueba: args.tipo_prueba,
                    nombres_candidato: args.nombres_candidato,
                    cedula: args.cedula,
                    cargo: args.cargo,
                    cliente: args.cliente,
                    precio: args.precio,
                    gestor: args.gestor,
                    completada: args.completada,
                    pagada: args.pagada,
                    fecha_prueba: args.fecha_prueba,
                    facturaId: args.facturaId
                });
                return relacion.save();
            }
        },
        deleteRelacion: {
            type: RelacionType,
            args: { id: { type: GraphQLID } },
            resolve: function (parent, args) {
                return Relacion.findOneAndDelete(args.id);
            }
        },
        updateRelacion: {
            type: RelacionType,
            args: { id: { type: GraphQLID },
                codigo_consecutivo: { type: (GraphQLString) },
                tipo_prueba: { type: (GraphQLString) },
                nombres_candidato: { type: (GraphQLString) },
                cedula: { type: (GraphQLString) },
                cargo: { type: (GraphQLString) },
                cliente: { type: (GraphQLString) },
                precio: { type: (GraphQLString) },
                gestor: { type: (GraphQLString) },
                pagada: { type: (GraphQLString) },
                completada: { type: (GraphQLString) },
                fecha_prueba: { type: (GraphQLString) },
                factura: { type: (GraphQLString) },
            },
            resolve: function (parent, args) {
                return Relacion.findOneAndUpdate({ _id: args.id }, { "$set": {
                        codigo_consecutivo: args.codigo_consecutivo,
                        tipo_prueba: args.tipo_prueba,
                        nombres_candidato: args.nombres_candidato,
                        cedula: args.cedula,
                        cargo: args.cargo,
                        cliente: args.cliente,
                        precio: args.precio,
                        gestor: args.gestor,
                        pagada: args.pagada,
                        completada: args.completada,
                        fecha_prueba: args.fecha_prueba,
                        factura: args.factura
                    } });
            }
        },
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
