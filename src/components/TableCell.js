import React, { Component } from "react";

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
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

  handleClick = () => {
    this.setState({ color: this.props.color });
  };
  render() {
    return (
      <div
        style={this.getStyle(this.state.color)}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default TableCell;
