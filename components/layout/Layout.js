import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {Nav, Footer} from '../../components';
import {Container, Main} from './styled';

export default function Layout({ children, title = '(form (vs (content)))', theme, toggleTheme }) {
  const router = useRouter()
  
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Main>{children}</Main>
      <Footer/>
    </Container>
  );
}
