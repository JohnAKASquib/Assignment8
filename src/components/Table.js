import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     rows: this.props.rows,
  //     cols: this.props.cols,
  //     defColor: this.props.defColor,
  //     color: this.props.color,
  //   };
  // }

  render() {
    console.log("Props is: " + this.props.color);
    // console.log("State is: " + this.state.color);
    let tablerows = new Array(this.props.rows);
    //i = 0;
    // for (i; i < this.state.rows; i++) {
    //   tablerows.push(

    //   );
    // }
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
