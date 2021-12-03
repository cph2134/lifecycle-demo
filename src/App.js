import { render } from '@testing-library/react';
import React from 'react';
import Pokemon from './pokemon'
import axios from "axios";
const myLogger = (message) => {
  console.log(`%c${message}`, "color: blue")
};

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonName: "eevee",
      imageUrl: "",
    }
    myLogger("constructor");
  }
  async componentDidMount()  {
    myLogger("componentDidMount");
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName})
  }

  const imgUrl = data.sprites.font_default;
  this.setState({imageUrl});

  async handleClick(pokemon){
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const imgUrl = data.sprites.font_default;
    this.setState({pokemonName: pokemon, imgUrl });
  }

  componentDidUpdate(){
    myLogger('componentDidUpdate')
  }

  render() {
   myLogger("render");
   return (
    <div>
    <h1>{this.state.pokemonName}</h1>
    <button onClick={()=> {
      this.handleClick("pikachu")}}>Pikachu</button>
    <button onClick={()=> this.handleClick("meowth")}>Meowth</button>
    <Pokemon imgUrl={this.state.imgUrl} />
    </div>
   );

  }
}

export default App

