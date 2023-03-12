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

      <Main style={{ height: '1000vh' }}>
        <h1 id="Sobre"></h1>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <h1 id="Contato"></h1>
        <Section style={{ height: '27.3%' }}>
          <Sticky className="third" />
        </Section>
      </Main>
    </>
  )
}

export default App
