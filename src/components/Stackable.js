import React from "react";
import styled from "styled-components";

const StackElement = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => ((props.order + 1) * 100)};
  mix-blend-mode: multiply;
`;

class Stackable extends React.Component {

  render() {
    return (
      <StackElement order={this.props.order}>
        {this.props.children}
      </StackElement>
    )
  }

}

export default Stackable;