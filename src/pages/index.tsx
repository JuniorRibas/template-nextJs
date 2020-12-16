import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Template NextJs</title>
      </Head>

      <h1>Bem vindo ao seu template</h1>
    </Container>
  )
}

export default Home
