'use client';

import Head from 'next/head'
import {Nav, Footer, Header} from '../../components';
import { useMediaQuery } from '../../utils/hooks';
import { MOBILE_BREAKPOINT } from '../../utils/constants';
import {Container, Main} from './styled';

export default function Layout({ 
  children, title = '(form (vs (content)))',
  theme, toggleTheme 
}) {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main>{children}</Main>
      <Footer/>
    </Container>
  );
}
