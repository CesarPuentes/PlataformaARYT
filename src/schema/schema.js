const Relacion = require("../models/relacionSchema");
const Factura = require("../models/facturaSchema");
const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;

const RelacionType = new GraphQLObjectType({
  name: "Relacion",
  fields: () => ({
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
    pagada: { type: GraphQLString  },
    fecha_prueba: { type: GraphQLString },
    factura: {
        type: FacturaType,
        resolve(parent, args){
          //console.log("parenttt", parent)
            //return _.find(facturasx,{id: parent.facturaId});
            return Factura.findById(parent.facturaId);
        }
    }
  })
});

const FacturaType = new GraphQLObjectType({
  name: "Factura",
  fields: () => ({
    id: { type: GraphQLID },
    numero_factura: { type: GraphQLInt },
    nit_cliente: { type: GraphQLInt },
    fecha_emision: { type: GraphQLString },
    relaciones: {
      type: new GraphQLList(RelacionType),
      resolve(parent, args) {
        return Relacion.find({ facturaId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    relacion: {
      type: RelacionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //return _.find(relacionesx, {id: args.id})
        return Relacion.findById(args.id);
      },
    },     
    factura: {
        type: FacturaType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
           //return _.find(facturasx,{id: args.id})
            return Factura.findById(args.id);
        }
    },
    relaciones: {
      type: new GraphQLList(RelacionType),
      resolve(parent, args) {
        return Relacion.find({});
      }
    },
    facturas: {
      type: new GraphQLList(FacturaType),
      resolve(parent, args) {
        return Factura.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFactura: {
        type: FacturaType,
        args: {
          numero_factura: { type: GraphQLInt },
          nit_cliente: { type: GraphQLInt },
          fecha_emision: { type: GraphQLString }
        },
        resolve(parent, args) {
          let factura = new Factura({
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
        codigo_consecutivo: { type: new GraphQLNonNull( GraphQLString ) },
        tipo_prueba: { type: new GraphQLNonNull( GraphQLString) },
        nombres_candidato: { type: new GraphQLNonNull( GraphQLString )},
        cedula: { type: new GraphQLNonNull( GraphQLString )},
        cargo: { type: GraphQLString },
        cliente: { type: GraphQLString },
        precio: { type: GraphQLString},
        gestor: { type: GraphQLString},
        completada: { type: GraphQLString  },
        pagada: { type: GraphQLString  },
        fecha_prueba: { type: GraphQLString },
        facturaId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let relacion = new Relacion({
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
      resolve(parent, args) {
        return Relacion.findOneAndDelete(args.id);
      }
    },
    updateRelacion: {
      type: RelacionType,
      args: { id: { type: GraphQLID },
      codigo_consecutivo: { type: ( GraphQLString ) },
      tipo_prueba: { type: ( GraphQLString ) },
      nombres_candidato: { type: ( GraphQLString ) },
      cedula: { type: ( GraphQLString ) },
      cargo: { type: ( GraphQLString ) },
      cliente: { type: ( GraphQLString ) },
      precio: { type: ( GraphQLString ) },
      gestor: { type: ( GraphQLString ) },
      pagada: { type: ( GraphQLString ) },
      completada: { type: ( GraphQLString ) },
      fecha_prueba: { type: ( GraphQLString ) },
      factura: { type: ( GraphQLString ) },
     },
      resolve(parent, args) {
        return Relacion.findOneAndUpdate(
          {_id: args.id},
          { "$set": { 
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
          }}
 )
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
