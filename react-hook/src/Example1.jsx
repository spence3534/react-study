import React, { Component } from 'react';

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
    }
  }
  render() { 
    return (
      <div>
        <p> You clicked { this.state.count } times </p>
        <button onClick={this.handleAddItem.bind(this)}>
          click me
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log(`comonentDidMount=> You clicked ${this.state.count} times`);
  }

  componentDidUpdate() {
    console.log(`comonentDidMount=> You clicked ${this.state.count} times`);
  }
  handleAddItem() {
    this.setState({
      count: this.state.count+1
    })
  }
}

export default Example1;