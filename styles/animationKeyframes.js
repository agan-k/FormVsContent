import { keyframes } from 'styled-components';
import {theme} from '../theme';

export const type = keyframes`
  from {width: 0;}
  to {width: 21rem;}
`;
export const blink = keyframes`
  from {border-color: orange;}
  to {border-color: ${theme.colors.background};}
`;
export const hideLanding = keyframes`
  from {
    top: 0;
  }
  to {
    top: -9999px;
  }
  }
`;
export const show = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;
export const enclose = keyframes`
  from {width: 100%;}
  to { width: 53%;}
`;
export const encloseMobile = keyframes`
  from {width: 100%;}
  to { width: 87%;}
`;
export const emerge = keyframes`
  0% {opacity: 0;}
  50% {
    opacity: .5;
    box-shadow: 7px 7px 9px 3px rgb(94, 98, 99, 0);
    border: 2px solid rgb(240, 226, 202, 0);
  }
  70% {
    opacity: .8;
    transform: rotate(-4deg);
    box-shadow: 7px 7px 9px 3px rgb(94, 98, 99, .1);
    border: 2px solid rgb(240, 226, 202, .1)
  }
  100% {
    opacity: 1;
    transform: rotate(-6deg);
    box-shadow: 7px 7px 9px 3px rgb(94, 98, 99, .6);
    border: 2px solid rgb(240, 226, 202, 1);
  }
`;