import React, { PureComponent, ReactNode } from "react";
import { graphql } from "react-apollo";
import { GetRelacionQuery } from "../../Queries/queries";

class DetallesRelaciones extends PureComponent {
  displayBookDetails() {
    const { relacion } = this.props.data;
    if (relacion) {
      return (
        <div>
          <h2>{relacion.numero}</h2>
          <p>{relacion.tipo_relacion}</p>
        </div>
      );
    } else {
      return <div>No relacion selected...</div>;
    }
  }
  render() {
    return <div id="relacion-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(GetRelacionQuery, {
  options: props => {
    return {
      variables: {
        id: props.relacionId
      }
    };
  }
})(DetallesRelaciones);
