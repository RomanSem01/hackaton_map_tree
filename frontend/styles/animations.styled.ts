import { keyframes } from 'styled-components';

export const inputAnimation = keyframes`
0% {
    transform: translate(0);
  }
  40% {
    transform: translate(-9px, -9px);
  }
  60% {
    transform: translate(-7px, -7px);
  }`;

export const sidebarAnimation = keyframes`

  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  
}`;
