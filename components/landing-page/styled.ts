import styled, { css } from "styled-components";
import {mediaQuery} from '../../utils';
import * as animationKeyframes from '../../styles/animationKeyframes';
import { Z_INDEX } from "../../utils/constants";


export const Wrapper = styled('div')(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    background: ({theme}) => theme.colors.background,
    boxShadow: ({theme}) => theme.shadows.landing,
    alignItems: 'center',
    zIndex: Z_INDEX.landing[1],
    animation: () => css`
      ${animationKeyframes.hideLanding} 7s 7s forwards;
    `,
  },
  mediaQuery({
    
  })
);
export const Container = styled('div')(
  {
    maxWidth: '820px',
    margin: '0 auto',
    marginTop: '20%',
  },
  mediaQuery({
  })
);

export const LogoWrapper = styled('div')(
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    opacity: 0,
    animation: () => css`
      ${animationKeyframes.show} 0s 4s forwards
    `
  },
  mediaQuery({
    height: [
      ({theme}) => theme.space[6]+'px',
      ({theme}) => theme.space[7]+'px',
    ]
  })
);
export const BracesWrapper = styled('div')(
  {
    position: 'relative',
    color: 'orange',
    fontWeight: '100',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Courier New'
  },
  mediaQuery({
    fontSize: [
      ({theme}) => theme.space[5]+theme.space[4]+'px',
      ({theme}) => theme.space[6]+theme.space[4]+'px',
    ],
    animation: [
      () => css`${animationKeyframes.encloseMobile} 2s 4s forwards`,
      () => css`${animationKeyframes.enclose} 2s 4s forwards`,
    ]
  })
);
export const BraceLeft = styled('div')(
  {
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
    marginTop: - 1+'px',
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
  padding-left: 5%;
`;

export const Title = styled.div`
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  letter-spacing: 6px;
  color: grey;
  border-right: .2rem solid orange;
  animation: 
    ${animationKeyframes.type} steps(22, end) 1.5s 2s forwards,
    ${animationKeyframes.blink} 1s infinite;
`;