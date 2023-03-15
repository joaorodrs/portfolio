import React, { useEffect } from 'react'

import FirstAndSecond from './components/FirstAndSecond'

import { Main, Section, Sticky } from './styles'
import GlobalStyle from './styles/global'
import Header from './components/Header'

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyle />

      <Header />

      <Main style={{ height: '500vh' }}>
        <h1 id="Sobre"></h1>
        <Section style={{ height: '75%' }}>
          <FirstAndSecond />
        </Section>

        <h1 id="Contato"></h1>
        <Section style={{ height: '25%' }}>
          <Sticky className="third" />
        </Section>
      </Main>
    </>
  )
}

export default App
