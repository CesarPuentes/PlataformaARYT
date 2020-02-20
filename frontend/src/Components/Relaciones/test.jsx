import React, { useState } from "react";
import { graphql } from "react-apollo";
import { GetRelacionQuery, GetRelacionesQuery } from "../../Queries/queries";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import DetallesRelaciones from "./DetallesRelaciones";
import MainNavbar from "../Navbar/MainNavbar";

function Test(props) {
  var data = props.data;
  console.log("TESSSTTTT", data);
  return <div></div>;
}

export default graphql(GetRelacionesQuery)(Test);
