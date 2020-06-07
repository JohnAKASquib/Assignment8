import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);
  }
  getStyle = (color) => {
    return {
      borderStyle: "solid",
      borderColor: "black",
      backgroundColor: color,
      display: "inline-block",
      height: "50px",
      width: "125px",
    };
  };

  render() {
    return <div style={this.getStyle(this.props.color)}></div>;
  }
}

export default TableCell;
