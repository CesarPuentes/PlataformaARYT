"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var react_router_dom_1 = require("react-router-dom");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}); });
function MainNavbar(_a) {
    var history = _a.history;
    var classes = useStyles();
    return (<div className={classes.root}>
      <AppBar_1.default position="static">
        <Toolbar_1.default>
          <Button_1.default color="inherit" onClick={function () { return history.push("/"); }}>
            Home
          </Button_1.default>
          <Button_1.default color="inherit" onClick={function () { return history.push("/listado"); }}>
            Listado
          </Button_1.default>
          <Button_1.default color="inherit" onClick={function () { return history.push("/formulario"); }}>
            Formulario
          </Button_1.default>
        </Toolbar_1.default>
      </AppBar_1.default>
    </div>);
}
exports.default = react_router_dom_1.withRouter(MainNavbar);
