import { ReactNode } from 'react';
import Head from 'next/head'
import {Footer, Header} from '..';
import {Container, Main} from './styled';

interface LayoutProps {
  children: ReactNode
  title?: string
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = '(form (vs (content)))',
}) => {
  
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer/>
    </Container>
  );
};
