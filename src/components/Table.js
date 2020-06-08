import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  render() {
    // console.log("Props is: " + this.props.color);

    let tablerows = new Array(this.props.rows);

    return (
      <table>
        <tbody>
          {tablerows.fill(
            <div>
              <TableRow
                length={this.props.cols}
                color={this.props.color}
                defColor={this.props.defColor}
              />
            </div>
          )}
        </tbody>
        {/* <tbody>{tablerows}</tbody>*/}
      </table>
    );
  }
}
export default Table;
