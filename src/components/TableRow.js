import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TCArr: Array(this.props.length).fill(
        <TableCell color={this.props.color} />
      ),
    };
  }

  render() {
    return this.state.TCArr;
  }
}

export default TableRow;
