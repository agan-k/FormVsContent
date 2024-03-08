'use client';
import Head from 'next/head'
import {Footer, Header} from '../../components';
import {Container, Main} from './styled';

export default function Layout({ 
  children, 
  title = '(form (vs (content)))',
}) {
  
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
}
