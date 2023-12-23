import {CurlyBracket, Container, Wrapper, Title} from './styled';
import { CurlyBrackets } from '../../components';
import { theme as staticTheme } from '../../theme';

export default function SectionTitle({children}) {
  return (
    <CurlyBrackets size={staticTheme.space[6]}>
      <Title>{children}</Title>
    </CurlyBrackets>
  )
}