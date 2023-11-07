import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from '../../utils';

export const ResumeContainer = styled('div')({
  margin: '0 auto',
  h2: {
    fontWeight: staticTheme.fontWeights.body,
    letterSpacing: '.3rem',
    color: staticTheme.colors.link,
    marginBottom: staticTheme.space[1],
    fontSize: staticTheme.fontSizes[3],
  },
  h3: {
    fontWeight: staticTheme.fontWeights.body,
    fontStyle: 'italic',
    fontSize: staticTheme.fontSizes[3],
    marginTop: staticTheme.space[2],
    marginBottom: staticTheme.space[1],
  },
  h4: {
    margin: '0',
    fontWeight: staticTheme.fontWeights.body,
    fontSize: staticTheme.fontSizes[2]

  },
  p: {
    margin: `${staticTheme.space[2]}px 0`,
  },
  ul: {
    margin: '0',
    fontSize: staticTheme.fontSizes[1]
  },
  strong: {
    fontWeight: staticTheme.fontWeights.heading
  },
},
mediaQuery({
  width: ['95%', '60%'],
  ul: {
    paddingLeft: '25px',
  }
})
);