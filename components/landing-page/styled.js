import styled, { css } from "styled-components";
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from '../../utils';
import * as animationKeyframes from '../../styles/animationKeyframes';
import { Z_INDEX } from "../../utils/constants";


export const Wrapper = styled('div')(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'white',
    height: '100vh',
    width: '100%',
    paddingTop: '20%',
    alignItems: 'center',
    zIndex: Z_INDEX.landing[1],
    animation: () => css`
      ${animationKeyframes.hideLanding} 2s 7s forwards;
    `,
  },
  mediaQuery({
    
  })
);
export const Container = styled('div')(
  {
    maxWidth: '820px',
    margin: '0 auto',
  },
  mediaQuery({
  })
);

export const LogoWrapper = styled('div')(
  {
    display: 'block',
    width: '100%',
    height: staticTheme.space[7],
    display: 'flex',
    justifyContent: 'center',
    opacity: 0,
    animation: () => css`
      ${animationKeyframes.show} 0s 4s forwards
    `
  },
  mediaQuery({
  })
);
export const BracesWrapper = styled('div')(
  {
    display: 'block',
    position: 'relative',
    fontSize: staticTheme.space[7],
    color: 'orange',
    fontWeight: '100',
    display: 'flex',
    justifyContent: 'center',
  },
  mediaQuery({
    animation: [
      () => css`${animationKeyframes.encloseMobile} 2s 4s forwards`,
      () => css`${animationKeyframes.enclose} 2s 4s forwards`,
    ]
  })
);
export const BraceLeft = styled('div')(
  {
    marginTop: - staticTheme.space[3],
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  mediaQuery({
  })
);
export const BraceRight = styled('div')(
  {
    marginTop: - staticTheme.space[3],
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  mediaQuery({
  })
);
export const ImageWrapper = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      height: '80%',
      borderRadius: '15%',
      animation: () => css`${animationKeyframes.emerge} 2s 4s forwards`,
    }
  },
  mediaQuery({
  })
);

export const TitleWrapper = styled.div`
  padding-left: 10%;
`;

export const Title = styled.div`
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  font-family: ${staticTheme.fonts.monospace};
  font-size: ${staticTheme.fontSizes[2]};
  letter-spacing: 6px;
  color: grey;
  border-right: .2rem solid orange;
  animation: 
    ${animationKeyframes.type} steps(22, end) 1.5s 2s forwards,
    ${animationKeyframes.blink} 1s infinite;
`;