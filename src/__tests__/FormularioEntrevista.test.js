import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost';
import {
  deleteRelacionMutation,
  updateMutation,
  GetRelacionesQuery
} from "../Queries/queries";



import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormularioEntrevista from "./../Components/Entrevista/FormularioEntrevista"

const mocks = [
    {
      request: {
        query: GetRelacionesQuery,
        variables: {
          codigo_consecutivo: "1",
          tipo_prueba: "1",
          nombres_candidato: "1",
          cedula:"1"
        },
      },
      result: {
        data: {
          relaciones: { id: '5e6415bf25277e31e090f66e',  codigo_consecutivo:"1",
          tipo_prueba:"1",
          nombres_candidato:"1",
          cedula:"1" },
        },
      },
    },
  ];

it('should render without error', () => {
    TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <FormularioEntrevista/>
        </MockedProvider>);
  });
  

  it('check if form displays', () => {

    const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
        <FormularioEntrevista/>
    </MockedProvider>);
    const form = getByTestId('codigo_consecutivo_field');
    expect(form).toBeInTheDocument();

  });