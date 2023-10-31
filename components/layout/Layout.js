import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {Nav, Footer} from '../../components';
import {Container, Main} from './styled';

export default function Layout({ children, title = 'FormVsContent' }) {
   const router = useRouter()
  
   return (
      <Container>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <Main>{children}</Main>
        <Footer/>
      </Container>
   )
}
