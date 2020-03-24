import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

import client from "./apolloClient"

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';


require("dotenv").config();


console.log("The process env is");
console.log(process.env.PORT);

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
