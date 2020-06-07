import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor(props) {
    super(props);
    // Array of TableRows
    this.state = {
      tablerows: new Array(this.props.rows).fill(
        <TableRow length={this.props.cols} color={this.props.color} />
      ),
    };
  }

  displayEachRow = () => {
    return (
      <div className="tablerows">
        {this.state.tablerows.map((tablerow, index) => (
          <div className="tablerow" key={index}>
            {tablerow}
          </div>
        ))}
      </div>
    );
  };

  render() {
    return this.displayEachRow;
  }
}
export default Table;
