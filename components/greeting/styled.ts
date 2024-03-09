import styled from 'styled-components';
import { mediaQuery } from '../../utils';

export const GreetingWrapper = styled('div')(
  {
    p: {
      color: ({theme}) => theme.colors.text,
      margin: ({theme}) => `${theme.space[3]}px auto`,
      lineHeight: ({theme}) => theme.lineHeights.body
    }
  },
  mediaQuery({
    marginBottom: ({theme}) => theme.space[4]+'px',
    p: {
      fontSize: [
        ({theme}) => theme.fontSizes[2]+'px', 
        ({theme}) => theme.fontSizes[3]+'px'],
      width: ['100%', '70%'],
    }
  })
)