import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    return (
      <tr>
        {Array(this.props.length).fill(
          <TableCell color={this.props.color} defColor={this.props.defColor} />
        )}
      </tr>
    );
  }
}

export default TableRow;
