import React, { Component } from 'react';
import './App.css';
import Signin from "./components/Signin";
import RectanglesRandom from "./components/RectanglesRandom";
import TextSwap from "./components/TextSwap";

class App extends Component {
  // colors = ['#f5a147','#51cad8','#112b39', '#3t4f67','#21e2c3','#fe8056','#dedede', '#e561a3', '#87a5d2'];
  // text = ['absolute perfection', 'total chaos', 'full time irridescence', 'nikola kralj', 'mnogo smo jaki'];
  text = [
    ['right here,', 'right now'],
    ['forever', 'inspired'],
    ['no', 'limits'],
    ['total', 'commitment'],
    ['full', 'time', 'perfection'],
    ['bring', 'on the', 'challenge'],
    ['by', 'popular', 'demand'],
    ['limited', 'supply']
  ];

  colors = [
    ['#f5a147','#51cad8','#112b39'],
    ['#314f67','#21e2c3','#fe8056'],
    ['#f5a147','#21e2c3','#87a5d2'],
    ['#324f67','#21e2c3','#87a5d2','#112b39', '#f5a147']
  ];

  render() {
    return (
      <div className="App">
        {/*<Signin/>*/}
        {/*<RectanglesRandom width={1700} height={225} count={225} text={['total mastery']} colors={['#173a4d']}/>*/}
        <TextSwap
          duration={40}
          text={this.text}
          colors={this.colors}
          blend={0.65}
          height={500}
        />
      </div>
    );
  }
}

export default App;
