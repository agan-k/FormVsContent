import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';

export const Container = styled('div')({
  position: 'relative',
  backgroundColor: 'rgb(253, 253, 253)',
  width: '33%',
  minHeight: '20rem',
  marginTop: '1rem',
  cursor: 'pointer',
  border: '1px solid rgba(128, 128, 128, 0)',
  transition: 'inherit',
  border: staticTheme.borders.gray,
  a: {
    color: 'grey',
    textDecoration: 'none',
  },
  ':hover': {
    backgroundColor: 'white',
    border: '1px solid rgba(128, 128, 128, 0.308)',
  }
});
export const Arrow = styled('span')({
  fontSize: '1.5rem',
   fontWeight: '200',
   color: 'white',
   position: 'absolute',
   top: '.1rem',
   right: '.1rem',
   display: 'block',
   textAlign: 'right',
   zIndex: '99',
});
export const Heading = styled('h2')({
  fontSize: '1rem',
  margin: '1rem',
  color: '#689FF1',
});
export const Description = styled('p')({
  fontSize: '.9rem',
  lineHeight: '1rem',
  margin: '1rem',
});
export const Mask = styled('div')({
  width: '100%',
  backgroundColor: 'rgb(243, 136, 65)',
  height: '7rem',
  overflow: 'hidden',
  borderRadius: 'none',
  img: {
    borderRadius: 'none',
    width: '100%',
    opacity: '.7',
  }
});
