import facepaint from 'facepaint';
import {lightTheme as theme} from '../theme';

export const mediaQuery = facepaint(theme.breakpoints.map(
  bp => `@media(min-width: ${bp})`));
export default mediaQuery;