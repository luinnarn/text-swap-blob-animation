import React from "react";
import {StackBase} from "./StackBase";
import Stackable from "./Stackable";
import BlobTextRand from "./BlobTextRand";

class TextSwap extends React.Component {

  render() {
    const {text, duration, blend, height, colors, ...props} = this.props;
    const steps = text.length;
    return (
      <StackBase>
        {text.map((text, index) => (
          <Stackable order={index + 1}>
            <BlobTextRand
              duration={duration}
              steps={steps}
              order={index + 1}
              blend={blend}
              height={height}
              text={text}
              colors={colors[Math.floor(Math.random() * colors.length)]}/>
          </Stackable>)
        )}
      </StackBase>

    )
  }
}

export default TextSwap;