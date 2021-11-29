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

  render() {
    myLogger("render");
    return (
      <div>
        <p>{this.props.foo.text}</p>
        <img src={this.props.imgUrl} />
      </div>
    );
  }
}

export default Pokemon;
