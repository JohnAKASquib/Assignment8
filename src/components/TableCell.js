import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defColor: this.props.defColor,
    };
  }
  getStyle = (color) => {
    return {
      borderStyle: "solid",
      borderColor: "black",
      backgroundColor: this.state.color,
      display: "inline-block",
      height: "50px",
      width: "125px",
    };
  };

  handleClick = () => {
    //console.log(this.state.color);
    this.setState({ color: this.props.color });
  };

  render() {
    console.log("In tableCell the color is:" + this.props.color);
    return (
      <td
        style={this.getStyle(this.state.defColor)}
        onClick={this.handleClick}
      ></td>
    );
  }
}

export default TableCell;
