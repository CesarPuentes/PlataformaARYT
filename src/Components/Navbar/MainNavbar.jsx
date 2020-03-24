import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function MainNavbar({ history }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push("/listado")}>
            Listado
          </Button>
          <Button color="inherit" onClick={() => history.push("/formulario")}>
            Formulario
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MainNavbar);
