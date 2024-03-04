import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 139, 0.2);
`;

const borderColor = '#ffe4e1';
const backgroundColor = '#332e2e';
const borderRadiusBig = '6px';
const fontSizeHeader = '16px';
const carColor = borderColor;
// const spinDeg = '36deg';

const spinAnimation = keyframes`
  0% {
    transform: translate(2px, 1px) rotate(36deg * 0);
  }
  10% {
    transform: translate(-1px, -3px) rotate(36deg * 1);
  }
  20% {
    transform: translate(-2px, 0px) rotate(36deg * 2);
  }
  30% {
    transform: translate(1px, 2px) rotate(36deg * 3);
  }
  40% {
    transform: translate(1px, -1px) rotate(36deg * 4);
  }
  50% {
    transform: translate(-1px, 3px) rotate(36deg * 5);
  }
  60% {
    transform: translate(-1px, 1px) rotate(36deg * 6);
  }
  70% {
    transform: translate(3px, 1px) rotate(36deg * 7);
  }
  80% {
    transform: translate(-2px, -1px) rotate(36deg * 8);
  }
  90% {
    transform: translate(2px, 1px) rotate(36deg * 9);
  }
  100% {
    transform: translate(1px, -2px) rotate(36deg * 10);
  }
`;

const speed = keyframes`
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const strikes = keyframes`
  from {
    left: 25px;
  }
  to {
    left: -80px;
    opacity: 0;
  }
`;

const dots = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 15px;
  }
`;

export const LoadingWindow = styled.div`
  animation: ${fadeIn} 0.4s both;
  background: ${backgroundColor};
  border-radius: ${borderRadiusBig};
  border: 3px solid ${borderColor};
  color: ${carColor};
  height: 200px;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  position: fixed;
  top: 50%;
  width: 300px;
  z-index: 99;
`;

export const Text = styled.div`
  font-size: ${fontSizeHeader};
  position: absolute;
  width: auto;
  top: 75%;
  left: 38%;
  margin: 0 auto;

  span {
    display: inline-block;
    width: 5px;
    overflow: hidden;
    vertical-align: bottom;
    animation: ${dots} 1.5s linear infinite;
    transition: 1;
  }
`;

export const Car = styled.div`
  position: absolute;
  width: 117px;
  height: 42px;
  left: 92px;
  top: 70px;
`;

export const Strike = styled.div`
  position: absolute;
  width: 11px;
  height: 1px;
  background: ${carColor};
  animation: ${strikes} 0.2s linear infinite;
`;

export const Strike2 = styled(Strike)`
  top: 11px;
  animation-delay: 0.05s;
`;

export const Strike3 = styled(Strike)`
  top: 22px;
  animation-delay: 0.1s;
`;

export const Strike4 = styled(Strike)`
  top: 33px;
  animation-delay: 0.15s;
`;

export const Strike5 = styled(Strike)`
  top: 44px;
  animation-delay: 0.2s;
`;

export const Spoiler = styled.div`
  position: absolute;
  display: block;
  animation: ${speed} 0.5s linear infinite;

  width: 0;
  height: 0;
  top: 7px;
  border: 20px solid transparent;
  border-bottom: 8px solid ${carColor};
  border-left: 20px solid ${carColor};
`;

export const Back = styled.div`
  height: 20px;
  width: 92px;
  top: 15px;
  left: 0px;

  position: absolute;
  display: block;
  background: ${carColor};
  animation: ${speed} 0.5s linear infinite;
`;

export const Center = styled.div`
  position: absolute;
  display: block;

  height: 35px;
  width: 75px;
  left: 12px;
  border-top-left-radius: 30px;
  border-top-right-radius: 45px 40px;
  border: 4px solid ${carColor};
  box-sizing: border-box;

  animation: ${speed} 0.5s linear infinite;
`;

export const Center1 = styled.div`
  position: absolute;
  display: block;

  height: 35px;
  width: 35px;
  left: 12px;
  border-top-left-radius: 30px;

  background: ${carColor};
  animation: ${speed} 0.5s linear infinite;
`;

export const Front = styled.div`
  position: absolute;
  display: block;
  background: ${carColor};
  animation: ${speed} 0.5s linear infinite;

  height: 20px;
  width: 50px;
  top: 15px;
  left: 67px;
  border-top-right-radius: 50px 40px;
  border-bottom-right-radius: 10px;
`;

const СarDetail = styled.div`
  position: absolute;
  display: block;
  background: ${carColor};
  animation: ${speed} 0.5s linear infinite;
`;

export const Wheel = styled(СarDetail)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: 20px;
  left: 12px;
  border: 3px solid ${backgroundColor};
  background: linear-gradient(
      45deg,
      transparent 45%,
      ${borderColor} 46%,
      ${borderColor} 54%,
      transparent 55%
    ),
    linear-gradient(
      -45deg,
      transparent 45%,
      ${borderColor} 46%,
      ${borderColor} 54%,
      transparent 55%
    ),
    linear-gradient(
      90deg,
      transparent 45%,
      ${borderColor} 46%,
      ${borderColor} 54%,
      transparent 55%
    ),
    linear-gradient(
      0deg,
      transparent 45%,
      ${borderColor} 46%,
      ${borderColor} 54%,
      transparent 55%
    ),
    radial-gradient(
      ${borderColor} 29%,
      transparent 30%,
      transparent 50%,
      ${borderColor} 51%
    ),
    ${backgroundColor};
  animation-name: ${spinAnimation} 0.5s linear infinite;
`;

export const Wheel2 = styled(Wheel)`
  left: 82px;
`;
