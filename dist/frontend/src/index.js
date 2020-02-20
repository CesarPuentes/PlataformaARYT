"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
var react_router_dom_1 = require("react-router-dom");
var apollo_boost_1 = __importDefault(require("apollo-boost"));
var react_apollo_1 = require("react-apollo");
var client = new apollo_boost_1.default({
    uri: "http://localhost:4000/graphql"
});
react_dom_1.default.render(<react_apollo_1.ApolloProvider client={client}>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_apollo_1.ApolloProvider>, document.getElementById("root"));
