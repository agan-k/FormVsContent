import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import { mediaQuery } from '../../utils';

export const GreetingWrapper = styled('div')(
  {
    p: {
      color: ({theme}) => theme.colors.text,
      margin: `${staticTheme.space[3]}px auto`,
    }
  },
  mediaQuery({
    marginBottom: staticTheme.space[4],
    p: {
      fontSize: [staticTheme.fontSizes[2], staticTheme.fontSizes[3]],
      width: ['95%', '70%'],
      lineHeight: ['1.2rem', staticTheme.lineHeights.body],
    }
  })
)