import React, { Component } from 'react';
import './App.css';
import TextSwap from "./components/TextSwap";
import ConfigPanel from "./components/ConfigPanel";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: [
        ['right here,', 'right now'],
        ['forever', 'inspired'],
        ['no', 'limits'],
        ['total', 'commitment'],
        ['full', 'time', 'perfection'],
        ['bring', 'on the', 'challenge'],
        ['by', 'popular', 'demand'],
        ['limited', 'supply']
      ],
      colors: [
        ['#f5a147','#51cad8','#112b39'],
        ['#314f67','#21e2c3','#fe8056'],
        ['#f5a147','#21e2c3','#87a5d2'],
        ['#324f67','#21e2c3','#87a5d2','#112b39', '#f5a147']
      ],
        duration: 40,
        blend: 0.65,
        height: 500
    };
  }

  componentDidMount() {
    this.setState({colors: this.createRandomColors()});
  }

  createRandomColors = () => {
    const alphaNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
    let colorsArray = [];
    for (let i = 0; i < this.state.text.length; i++) {
      let colors = [];
      for (let j = 0; j < 3 + Math.floor(Math.random() * 5); j++) {
        const color = '#' + [1, 2, 3, 4, 5, 6].map(e => alphaNums[Math.floor(Math.random() * 16)]).join('');
        colors.push(color)
      }
      colorsArray.push(colors);
    }
    return colorsArray;
  };

  applyConfig = options => this.setState({...options});

  render() {
    return (
      <div className="App">
        {/*<Signin/>*/}
        {/*<RectanglesRandom width={1700} height={225} count={225} text={['total mastery']} colors={['#173a4d']}/>*/}
        <TextSwap
          duration={this.state.duration}
          text={this.state.text}
          colors={this.state.colors}
          blend={this.state.blend}
          height={this.state.height}
        />
        <ConfigPanel apply={this.applyConfig}/>
      </div>
    );
  }
}

export default App;
