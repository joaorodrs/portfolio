import React, { useEffect } from 'react'

import FirstAndSecond from './components/FirstAndSecond'

import { ContactContainer, ContactMeTitle, Main, MapContainer, Section, SocialMediaContainer, Sticky } from './styles'
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
          <Sticky className="third">
            <ContactMeTitle animate={{
              y: ['20vh', '25vh'],
              transition: {
                duration: 1.5,
                times: [0, 1],
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }}>
              Contact me!
            </ContactMeTitle>
            <ContactContainer>
              <MapContainer></MapContainer>
              <SocialMediaContainer></SocialMediaContainer>
            </ContactContainer>
          </Sticky>
        </Section>
      </Main>
    </>
  )
}

export default App
