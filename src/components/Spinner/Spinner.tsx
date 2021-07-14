import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="/images/spinner.png"/>
    </Svg>
  );
};


const RotatingSpinnerIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;


const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingSpinnerIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
