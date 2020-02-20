"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_apollo_1 = require("react-apollo");
var queries_1 = require("../../Queries/queries");
var DetallesRelaciones = /** @class */ (function (_super) {
    __extends(DetallesRelaciones, _super);
    function DetallesRelaciones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetallesRelaciones.prototype.displayBookDetails = function () {
        var relacion = this.props.data.relacion;
        if (relacion) {
            return (<div>
          <h2>{relacion.numero}</h2>
          <p>{relacion.tipo_relacion}</p>
        </div>);
        }
        else {
            return <div>No relacion selected...</div>;
        }
    };
    DetallesRelaciones.prototype.render = function () {
        return <div id="relacion-details">{this.displayBookDetails()}</div>;
    };
    return DetallesRelaciones;
}(react_1.PureComponent));
exports.default = react_apollo_1.graphql(queries_1.GetRelacionQuery, {
    options: function (props) {
        return {
            variables: {
                id: props.relacionId
            }
        };
    }
})(DetallesRelaciones);
