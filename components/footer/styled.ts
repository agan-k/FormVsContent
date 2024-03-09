import styled from 'styled-components';

export const FooterContainer = styled('footer')({
  height: 'min-content',
  width: '100%',
  paddingTop: '1rem',
  marginTop: '2rem',
  backgroundTolor: 'white',
  borderRadius: '0',
});
export const LogosContainer = styled('div')({
  display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-evenly',
   img: {
    height: '100%',
    border: ({theme}) => `1px solid ${theme.colors.invertText}`,
    borderRadius: '50%',
   },
});
export const LogoWrapper = styled('div')({
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
})
export const Copyright = styled('p')({
  fontSize: '.7rem',
  textAlign: 'center',
  opacity: '.4',
  margin: ({theme}) => theme.space[4],
})