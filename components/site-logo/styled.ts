import styled from 'styled-components';
import { mediaQuery } from '../../utils';

export const Wrapper = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    // marginTop: '30px'
  }
);

export const Title = styled('span')(
  {
    position: 'absolute',
    paddingRight: 6,
    fontSize: ({fontSize}) => `${fontSize}px`,
    fontFamily: 'courier',
    color: '#c5c7c5',
    wordSpacing: '-10px',
    letterSpacing: '1px',
  },
  mediaQuery({
    top: [-10, 6]
  })
);
export const Avatar = styled('div')({
  width: ({size}) => size,
  height: ({size}) => size,
  marginLeft: '-3px',
  borderRadius: '15%',
  transform: 'rotate(-6deg)',
  boxShadow: '3px 2px 5px 0px grey',
  border: '2px solid rgb(240, 226, 202)',
  backgroundImage: "url('/assets/sailin.jpg')",
  backgroundSize: '100%',
})