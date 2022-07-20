import React from 'react';

class Series extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

class Counter extends React.Component {
  state = {
    count: 0,
  };
  increase = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  decrease = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };
  render() {
    return (
      <>
        <button onClick={this.increase}>Increase</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrease}>Decrease</button>
      </>
    );
  }
}

class Count extends React.Component {
  render() {
    return (
      <>
        <div>
          <Counter />
        </div>
      </>
    );
  }
}

export default Count;
