import styled from 'styled-components';
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
    height: '33Vh',
    display: 'flex',
    justifyContent: 'center',
    img: {
    }
  },

  mediaQuery({

  })
);
export const LogoContainer = styled('div')(
  {
    display: 'block',
    position: 'relative',
    background: 'red',
    width: '100%',
    height: '33Vh',
    display: 'flex',
    justifyContent: 'center',
    img: {
    }
  },

  mediaQuery({

  })
);
export const ImageContainer = styled('div')(
  {
    display: 'block',
    background: 'blue',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    img: {
      height: '300px'
    }
  },

  mediaQuery({

  })
);

