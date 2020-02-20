import { gql } from "apollo-boost";

const GetRelacionQuery = gql`
  query GetRelacion($id: ID) {
    relacion(id: $id) {
      codigo_consecutivo
      tipo_prueba
      nombres_candidato
      cedula
      cargo
      precio
      gestor
      facutra {
        id
        numero_factura
      }
    }
  }
`;

const GetRelacionesQuery = gql`
  {
    relaciones {
      id
      codigo_consecutivo
      tipo_prueba
      nombres_candidato
      cedula
      cargo
      cliente
      precio
      gestor
      pagada
      completada
      fecha_prueba
    }
  }
`;

const GetFacturasQuery = gql`
  {
    facturas {
      id
      numero_factura
      nit_cliente
      fecha_emision
    }
  }
`;

const addRelacionMutation = gql`
  mutation AddRelacion(
    $codigo_consecutivo: String!
    $tipo_prueba: String!
    $nombres_candidato: String!
    $cedula: String!
    $cargo: String!
    $cliente: String!
    $precio: String!
    $gestor: String!
    $fecha_prueba: String!
  ) {
    addRelacion(
      codigo_consecutivo: $codigo_consecutivo
      tipo_prueba: $tipo_prueba
      nombres_candidato: $nombres_candidato
      cedula: $cedula
      cargo: $cargo
      cliente: $cliente
      precio: $precio
      gestor: $gestor
      fecha_prueba: $fecha_prueba
    ) {
      codigo_consecutivo
      tipo_prueba
      nombres_candidato
      cedula
      cargo
      cliente
      precio
      gestor
      fecha_prueba
    }
  }
`;

const updateMutation =  gql`
mutation UpdateRelacion(
  $id: ID
  $codigo_consecutivo: String!
  $tipo_prueba: String!
  $nombres_candidato: String!
  $cedula: String!
  $cargo: String!
  $cliente: String!
  $precio: String!
  $gestor: String!
  $pagada: String!
  $completada: String!
  $fecha_prueba: String!
) {
  updateRelacion(
    id: $id
    codigo_consecutivo: $codigo_consecutivo
    tipo_prueba:$tipo_prueba
    nombres_candidato:$nombres_candidato
    cedula:$cedula
    cargo: $cargo 
    cliente: $cliente
    precio:$precio 
    gestor: $gestor
    pagada: $pagada
    completada:$completada 
    fecha_prueba:$fecha_prueba
  ) {
    id
    codigo_consecutivo
    tipo_prueba
    nombres_candidato
    cedula
    cargo
    cliente
    precio
    gestor
    completada
    pagada
    fecha_prueba

  }
}
  `;

const deleteRelacionMutation = gql`
  mutation DeleteRelacion($id: ID) {
    deleteRelacion(id: $id) {
      id
    }
  }
`;

export {
  GetRelacionQuery,
  GetRelacionesQuery,
  GetFacturasQuery,
  addRelacionMutation,
  updateMutation,
  deleteRelacionMutation
};
