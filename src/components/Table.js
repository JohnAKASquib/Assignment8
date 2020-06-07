import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.props.rows,
      cols: this.props.cols,
      color: this.props.color,
    };
  }

  render() {
    let tablerows = [],
      i = 0;
    for (i; i < this.state.rows; i++) {
      tablerows.push(
        <div>
          <TableRow length={this.state.cols} color={this.state.color} />
        </div>
      );
    }
    return (
      <table>
        <tbody>{tablerows}</tbody>
      </table>
    );
  }
}
export default Table;
