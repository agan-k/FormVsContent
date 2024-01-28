import styled, { keyframes, css } from 'styled-components';
import {theme as staticTheme} from '../theme';
import {mediaQuery} from '../utils';

export const PageWrapper = styled('div')(
  {
    margin: '0 auto',
    paddingTop: staticTheme.space[5],
  },
  mediaQuery({
    width: ['95%', '90%']
  })
);

export const PostsWrapper = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  width: staticTheme.space[9],
  margin: `${staticTheme.space[5]}px auto`,
  ':hover': {
    boxShadow: ({theme}) => theme.shadows.card,
    transition: '0.2s',
  },
  a: {
    width: '49%',
    color: staticTheme.colors.text,
  }
},
mediaQuery({
  display: ['block', 'flex'],
  padding: [staticTheme.space[2]]
})
);

//// LANDING PAGE:
export const LandingWrapper = styled('div')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',

},
mediaQuery({
  
})
);

export const LogoWrapper = styled('div')(
  {
    display: 'block',
    background: 'blue',
    width: '100%',
    height: staticTheme.space[7],
    display: 'flex',
    justifyContent: 'center',
  },

  mediaQuery({

  })
);

const enclose = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 20%;
  }
`

export const BracesWrapper = styled('div')(
  {
    display: 'block',
    position: 'relative',
    fontSize: staticTheme.space[7],
    fontWeight: 100,
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    animation: () => css`${enclose} 2s forwards`
  },
  
  mediaQuery({
    
  })
  );
export const BraceLeft = styled('div')(
  {
    marginTop: - staticTheme.space[3],
    display: 'flex',
    alignItems: 'center',
    // background: 'green',
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
      // background: 'green',
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
    display: 'flex',
    img: {
      height: '80%'
    }
  },

  mediaQuery({

  })
);

