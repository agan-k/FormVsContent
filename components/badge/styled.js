import styled from 'styled-components';
import {theme as staticTheme} from '../../theme';
import {mediaQuery} from '../../utils';

export const Container = styled('div')(
  {
    position: 'relative',
    textAlign: 'center',
    height: '6rem',
    width: '100%',
    marginTop: '0rem',
    backgroundSize: '100%',
    backgroundPosition: 'top right',
    a: {
      color: ({theme}) => theme.colors.anchor,
    }
  },
  mediaQuery({
    marginBottom: [staticTheme.space[6]]
  })
);
