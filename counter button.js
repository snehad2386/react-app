import React, { Component } from "react";
class Counter extends Component {
constructor(props) {
super(props);
this.state = {
count: 0
};
}
increment = () => {
this.setState({ count: this.state.count + 1 });
};
decrement = () => {
this.setState({ count: this.state.count - 1 });
};

reset = () => {
this.setState({ count: 0 });
};
render() {
return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>React Counter (Class Component)</h1>
<p>Current Count: {this.state.count}</p>
<button onClick={this.increment}>Increment</button>
<button onClick={this.decrement} style={{ marginLeft: "10px" }}>Decrement</button>
<button onClick={this.reset} style={{ marginLeft: "10px" }}>Reset</button>
</div>
);
}
}
export default Counter;