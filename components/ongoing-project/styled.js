import styled from 'styled-components';
import { theme as staticTheme } from '../../theme';
import {mediaQuery} from '../../utils';

export const Wrapper = styled('div')({
  position: 'relative',
  background: ({theme}) => theme.colors.background,
  width: staticTheme.space[16],
  margin: `${staticTheme.space[5]}px auto`,
  textAlign: 'center',
},
mediaQuery({
  padding: [staticTheme.space[2], 'none']
  }),);
export const Name = styled('h2')({
  fontSize: `${staticTheme.fontSizes[5]}px`,
  padding: '0',
  a: {
    padding: '1rem',
    textDecoration: 'none',
    transition: '0.2s',
  },
  'a:hover': {
    color: '#495057',
    transition: '0.2s',
  }
})
export const LogoInfo = styled('div')(
  {
    height: staticTheme.space[4],
    marginBottom: staticTheme.space[3],
    h3: {
      width: '40%',
      margin: '0 auto',
      backgroundColor: 'rgb(250, 248, 248)',
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
    // height: '3rem',
  },
  mediaQuery({
      height: [staticTheme.space[4], staticTheme.space[4]],
    })
);
export const LogoWrapper = styled('div')({
  height: '3rem',
  width: '3rem',
  img: {
    height: '90%',
    transition: '0.2s',
  },
  'img:hover': {
    height: '99%',
    transition: '0.2s',
  }
});
export const SourceLink = styled('div')({
  marginTop: staticTheme.space[3],
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
    width: ['unset', staticTheme.space[6]+ staticTheme.space[5]],
    height: ['unset', staticTheme.space[7] + staticTheme.space[6]],
    top: ['unset', '-20px'],
    right: ['unset', staticTheme.space[7]],
  })
  );
  
  export const FloatingImage = styled('div')(
    {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: ({theme}) => theme.shadows.float,
  },
  mediaQuery({
    width: [staticTheme.space[5], staticTheme.space[6]+ staticTheme.space[5]],
    height: [staticTheme.space[3] + staticTheme.space[4], staticTheme.space[6] + staticTheme.space[4]],
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