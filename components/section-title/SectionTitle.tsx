import { ReactNode } from 'react';
import {Title} from './styled';
import { CurlyBrackets } from '../../components';

interface SectionTitleProps {
  children: string | ReactNode
}

export const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
  return (
    <CurlyBrackets size={({theme}) => theme.space[6]+'px'}>
      <Title>{children}</Title>
    </CurlyBrackets>
  )
}