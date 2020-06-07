import React, { Component } from "react";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: 4,
      cols: 3,
      currColor: "blue",
    };
  }
  render() {
    return (
      <Table
        rows={this.state.rows}
        cols={this.state.cols}
        color={this.state.currColor}
      />
    );
  }
}

export default App;
