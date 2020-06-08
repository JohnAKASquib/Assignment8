import React, { Component } from "react";
import Table from "./components/Table";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: 4,
      cols: 3,
      currColor: "white",
      selectedColor: "",
    };
  }
  //increase rows by 1
  handleAddRow = () => {
    this.setState({ rows: this.state.rows + 1 });
  };
  //increase columns by 1
  handleAddColumn = () => {
    this.setState({ cols: this.state.cols + 1 });
  };
  //set color in state
  handleColorChange = (e) => {
    this.setState({ selectedColor: e.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleColorChange}>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <button onClick={this.handleAddRow}>Add Row</button>
        <button onClick={this.handleAddColumn}>Add Column</button>
        <Table
          rows={this.state.rows}
          cols={this.state.cols}
          defColor={this.state.currColor}
          color={this.state.selectedColor}
        />
      </div>
    );
  }
}

export default App;
