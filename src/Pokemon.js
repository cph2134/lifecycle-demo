import React from "react";

const myLogger = (message) => {
  console.log(`%c${message}`, "color: red");
};
class Pokemon extends React.Component {
  constructor() {
    super();

    myLogger("constructor");
  }

  componentDidMount() {
    myLogger("componentDidMount");
  }

  componentDidUpdate() {
    myLogger("componentDidUpdate");
  }

  componentWillUnmount() {
    myLogger("componentWillUnmount");
  }

  handleClick() {
    myLogger("User clicked button!");
    this.setState({ newValue: "newValue" });
    this.props.garyCallbackExample("I am a function");
  }

  render() {
    myLogger("render");
    return (
      <div>
        <p>{this.props.foo.text}</p>
        <img src={this.props.imgUrl} />
        <button onClick={() => this.handleClick()}>Some Button</button>
      </div>
    );
  }
}

export default Pokemon;
