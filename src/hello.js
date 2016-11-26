import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Component started'
    }
  }
  render() {
    return (
      <h1>{this.state.name}</h1>
    );
  }
}

export default Hello;
