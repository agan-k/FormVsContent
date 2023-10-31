import styled from 'styled-components';
import { theme as staticTheme } from '../../theme';

export const Wrapper = styled('div')({
  position: 'relative',
  background: ({theme}) => theme.colors.background,
  width: staticTheme.space[16],
  margin: `${staticTheme.space[5]}px auto`,
  textAlign: 'center',
});
export const Name = styled('h2')({
  fontSize: `${staticTheme.fontSizes[5]}px`,
  margin: '1rem',
  padding: '0',
  a: {
    padding: '1rem',
    textDecoration: 'none',
    transition: '.2s',
  },
  'a:hover': {
    color: '#495057',
    transition: '.2s',
  }
})
export const Description = styled('div')({
  fontSize: '.7rem',
  width: '30%',
  lineHeight: '.8rem',
  color: 'grey',
  margin: '0 auto',
})
export const LogoInfo = styled('div')({
  height: '2rem;',
  margin: `${staticTheme.space[3]}px`,
  h3: {
    width: '40%',
    margin: '0 auto',
    backgroundColor: 'rgb(250, 248, 248)',
    backgroundColor: ({theme}) => theme.colors.invertBg,
    color: ({theme}) => theme.colors.invertText,
    fontSize: '2rem',
  }
});
export const LogosContainer = styled('div')({
  width: 'min-content',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  justifyItems: 'center',
  height: '3rem',
});
export const LogoWrapper = styled('div')({
  height: '3rem',
  width: '3rem',
  img: {
    height: '90%',
    transition: '.2s',
  },
  'img:hover': {
    height: '99%',
    transition: '.2s',
  }
});
export const SourceLink = styled('div')({
  height: '3rem',
  h3: {
    fontSize: '1rem',
    margin: '.5rem 0 .2rem 0',
  },
  img: {
    height: '90%',
    border: '1px solid rgba(245, 245, 245, 0)',
    transition: '.2s',
  },
  'img:hover': {
    height: '99%',
    transition: '.2s',
  }
})
export const ScreenshotsContainer = styled('div')({
  marginTop: '2rem',
})
export const DesktopScreeshots = styled('div')({
  img: {
    width: '45%',
    margin: '0 1%',
    border: staticTheme.borders.gray,
  }
})
export const TabletAndMobileContainer = styled('div')({
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
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