import React from "react";
import Axios from 'axios';

const myLogger = (message) => {
  console.log(`%c${message}`, "color: red")
};

class Pokemon extends React.Component {
  constructor(){
    super();

    "
    }
    myLogger("constructor");
  }
  componentDidMount() {
    myLogger("componentDidMount")
  }



  render() {
   myLogger("render");
   return <img src={this.props.imgUrl}/>
  
  }
}

export default Pokemon

