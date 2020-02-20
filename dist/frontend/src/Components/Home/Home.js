"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MainNavbar_1 = __importDefault(require("../Navbar/MainNavbar"));
function Home() {
    return (<div>
      <MainNavbar_1.default />
      <h1>This is the home page</h1>
    </div>);
}
exports.default = Home;
