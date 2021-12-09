import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "#ffffff" };
    this.handleClick = this.handleClick.bind(this);
  }

  //---------
  componentDidMount() {
    this.applyColour();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColour();
  }


  //--------
  randNum() {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    return hexArray[Math.floor(Math.random() * hexArray.length)];
  };

  getColour() {
    let hex = "#" + this.randNum() + this.randNum() + this.randNum() + this.randNum() + this.randNum() + this.randNum();
    console.log(hex);
    console.log(typeof hex);
    return hex;

  };

  //----------------------------


  applyColour() {
    const colour = this.getColour(this.state.color);
    document.body.style.background = colour;
  }


  handleClick() {
    this.setState({ color: this.getColour() });
  }


  render() {
    return (
      <div className="App">

        <div className="colourBox">
          <h1>colour is:</h1>
          <h2>{this.hex}</h2>
          <button onClick={this.handleClick}>Click Me</button>
        </div>

      </div>
    );
  }
}


export default App;
