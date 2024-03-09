import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',
  backgroundColor: ({theme}) => theme.colors.backgroundColor,
  minHeight: `calc(${({theme}) => theme.space[5]}px + ${({theme}) => theme.space[7]}px)`,
  marginTop: '1rem',
  cursor: 'pointer',
  border: ({theme}) => theme.borders.understated,
  '*': {
    pointerEvents: 'none',
  },
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
