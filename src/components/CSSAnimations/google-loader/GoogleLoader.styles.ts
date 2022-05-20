import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const shape1 = keyframes`
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, 20px);
        transform: translate(20px, 20px);
    }
`;

const shape2 = keyframes`
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, 20px);
        transform: translate(-20px, 20px);
    }
`;

const shape3 = keyframes`
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(20px, -20px);
        transform: translate(20px, -20px);
    }
`;

const shape4 = keyframes`
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    to {
        -webkit-transform: translate(-20px, -20px);
        transform: translate(-20px, -20px);
    }
`;

export const DotsWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  -webkit-animation: ${rotation} 1s infinite;
  animation: ${rotation} 1s infinite;
`;

export const Circle = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  :nth-child(1) {
    left: 0;
    background-color: #4285f4;

    -webkit-animation: ${shape1} 0.5s infinite alternate;
    animation: ${shape1} 0.5s infinite alternate;
  }

  :nth-child(2) {
    right: 0;
    background-color: #34a853;

    -webkit-animation: ${shape2} 0.5s infinite alternate;
    animation: ${shape2} 0.5s infinite alternate;
  }

  :nth-child(3) {
    bottom: 0;
    background-color: #fbbc05;

    -webkit-animation: ${shape3} 0.5s infinite alternate;
    animation: ${shape3} 0.5s infinite alternate;
  }

  :nth-child(4) {
    bottom: 0;
    right: 0;
    background-color: #ea4335;

    -webkit-animation: ${shape4} 0.5s infinite alternate;
    animation: ${shape4} 0.5s infinite alternate;
  }
`;
