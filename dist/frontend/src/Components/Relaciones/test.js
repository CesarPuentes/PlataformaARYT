"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var queries_1 = require("../../Queries/queries");
function Test(props) {
    var data = props.data;
    console.log("TESSSTTTT", data);
    return <div></div>;
}
exports.default = react_apollo_1.graphql(queries_1.GetRelacionesQuery)(Test);
