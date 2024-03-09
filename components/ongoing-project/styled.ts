import styled from 'styled-components';
import {mediaQuery} from '../../utils';

export const Wrapper = styled('div')(
  {
    position: 'relative',
    width: ({theme}) => theme.space[16]+'px',
    margin: ({theme}) => `${theme.space[5]}px auto`,
    textAlign: 'center',
  },
  mediaQuery({
    padding: [({theme}) => theme.space[2]+'px', 'none']
    })
);

export const Name = styled('h2')(
  {
    padding: '0',
    marginBottom: '0',
    a: {
      color: ({theme}) => theme.colors.link,
      // padding: '1rem',
      textDecoration: 'none',
      transition: '0.2s',
    },
    'a:hover': {
      color: '#495057',
      transition: '0.2s',
    }
  },
  mediaQuery({
    fontSize: [
      ({theme}) => theme.fontSizes[5]-6+'px',
      ({theme}) => theme.fontSizes[5]+'px',
    ],
  })
)
export const LogoInfo = styled('div')(
  {
    height: ({theme}) => theme.space[4]+'px',
    marginBottom: ({theme}) => theme.space[3]+'px',
    h3: {
      width: '40%',
      margin: '0 auto',
      backgroundColor: ({theme}) => theme.colors.invertBg,
      color: ({theme}) => theme.colors.invertText,
      fontSize: '2rem',
    }
  },
  mediaQuery({
    display: ['none', 'block'],
  })
);
export const LogosContainer = styled('div')(
  {
    width: 'min-content',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mediaQuery({
    height: [
      ({theme}) => theme.space[4]+'px',
      ({theme}) => theme.space[4]+'px'
    ],
  })
);
export const LogoWrapper = styled('div')({
  height: '3rem',
  width: '3rem',
  img: {
    height: '90%',
    transition: '0.2s',
    border: ({theme}) => `1px solid ${theme.colors.invertText}`,
    borderRadius: '50%',

  },
  'img:hover': {
    height: '99%',
    transition: '0.2s',
  }
});
export const SourceLink = styled('div')({
  marginTop: ({theme}) => theme.space[3]+'px',
  a: {
    color: ({theme}) => theme.colors.anchor
  }
})
export const ScreenshotsContainer = styled('div')(
  {
    position: 'relative',
    marginTop: '2rem',
  },
  mediaQuery({
    width: ['100%'],
  })
)
export const FloatingImagesContainer = styled('div')(
  {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mediaQuery({
    display: ['none', 'flex'],
    width: ['unset', ({theme}) => theme.space[6] + theme.space[5]]+'px',
    height: ['unset', ({theme}) => theme.space[7] + theme.space[6]]+'px',
    top: ['unset', '-20px'],
    right: ['unset', ({theme}) => theme.space[7]+'px'],
  })
  );
  
  export const FloatingImage = styled('div')(
    {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: ({theme}) => theme.shadows.float,
  },
  mediaQuery({
    width: [
      ({theme}) => theme.space[5]+'px',
      ({theme}) => theme.space[6]+theme.space[5]+'px'],
    height: [
      ({theme}) => theme.space[3] + theme.space[4]+'px', 
      ({theme}) => theme.space[6] + theme.space[4]+'px'],
    img: {
      width: '100%',
      height: 'auto'

    }
  })
  );
  
  export const DesktopScreeshots = styled('div')({
    width: '100%',
    margin: '0 auto',
    justifyContent: 'center',
    img: {
      width: '100%',
      height: 'auto',
      border: ({theme}) => theme.borders.understated ,
    }
  },
  mediaQuery({
    display: ['block', 'flex'],
    width: ['90%', '45%'],
    height: ['auto'],
  })
);
export const TabletAndMobileContainer = styled('div')(
  {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaQuery({
    display: ['none', 'flex'],
  })
)
export const MobileScreeshots = styled('div')({
  width: '50%',
  textAlign: 'left',
  img: {
    width: '20%',
    margin: '0 .1rem',
  }
})
export const TabletScreeshots = styled('div')({
  width: '50%',
  textAlign: 'right',
  img: {
    width: '60%',
    margin: '0 .1rem',
  }
})