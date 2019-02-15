import React from "react";
import styled from "styled-components";

const Base = styled.div`
  position: relative;
  z-index: 100;
  height: ${props => props.height}px;
`;

export const StackBase = props => (<Base height={props.height}>{props.children}</Base>);
