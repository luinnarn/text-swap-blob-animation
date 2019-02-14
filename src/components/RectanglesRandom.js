import React from "react";
import styled, {keyframes} from "styled-components";

function* generateColor(colors) {
  yield colors[Math.floor(Math.random() * colors.length)];
}

const pulse = random => keyframes`
    0%, 95%, 100% { transform: scaleX(0); }
    ${((random * 30)) + '%'},  ${((random * 60) + 30) + '%'} { transform: scaleX(1); }
`;
const Rect = styled.rect`
  stroke-width: 0;
  animation: ${props => pulse(props.random)} 6s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite;
  transform-origin: 50% 50%;
  transform-box: fill-box;
`;

const RectWithRandom = props => (
  <Rect {...props} random={Math.random()} >
  </Rect>
);

class RectanglesRandom extends React.Component {
  id = 'textClip' + Math.random() * 9000;

  render() {
    return (
      <svg height={this.props.height + 'px'} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
        <clipPath id={this.id} className="filled-heading">
          {this.props.text.map((row, index) => (
            <text x="50%" textAnchor="middle" fontSize={`calc(2em + ${(10 - ((Math.max(row.length, 10) - 8)/2))/this.props.text.length}vw)`} y={(index + 1) * this.props.height/this.props.text.length - 10}>{row}</text>
          ))}
        </clipPath>
        <g className="background" clip-path={`url(#${this.id})`} >
          {Array.apply(null, Array(this.props.count)).map((element, index) => {
            const color = generateColor(this.props.colors).next().value
            return (
            <RectWithRandom
              x={0}
              y={index * this.props.height/this.props.count}
              fill={color}
              width={this.props.width}
              height={Math.round(this.props.height/this.props.count)} />)}
          )}
        </g>
      </svg>
    );
  }
}

export default RectanglesRandom;