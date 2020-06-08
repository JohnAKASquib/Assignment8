import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //      />
  //     ),
  //   };
  // }

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
