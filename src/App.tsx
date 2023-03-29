import React, { useEffect, useState } from 'react'

import FirstAndSecond from './components/FirstAndSecond'

import { ContactContainer, ContactMeTitle, Main, MapContainer, Section, SocialMediaContainer, Sticky } from './styles'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { LinkButton } from './components/FirstAndSecond/styles'
import { FaCheck, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: -2.425087,
  lng: -54.711913,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCayZ14PBUIs_qXE5hkcnk6G6W11oCjIsU"
  })

  const [emailCopied, setEmailCopied] = useState(false)

  const onCopyEmail = (text: string) => {
    if (emailCopied) return;

    navigator.clipboard.writeText(text);
    setEmailCopied(true)

    const seconds = 4 * 1000

    setTimeout(() => setEmailCopied(false), seconds)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (!isLoaded) return null;

  return (
    <>
      <GlobalStyle />

      <Header />

      <Main style={{ height: '500vh' }}>
        <h1 id="about"></h1>
        <Section style={{ height: '75%' }}>
          <FirstAndSecond />
        </Section>

        <h1 id="contact"></h1>
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
              <MapContainer>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                >
                  <Marker
                    position={center}
                  />
                </GoogleMap>
              </MapContainer>
              <SocialMediaContainer>
                <LinkButton href="https://github.com/joaorodrs" target="_blank">
                  <FaGithub />
                  Github
                </LinkButton>
                <LinkButton href="https://linkedin.com/in/joaorodrs" target="_blank">
                  <FaLinkedin />
                  LinkedIn
                </LinkButton>
                <LinkButton href="https://instagram.com/joaorodrs" target="_blank">
                  <FaInstagram />
                  Instagram
                </LinkButton>
                <LinkButton
                  href="javascript:void(0)"
                  onClick={() => onCopyEmail("joaopauloalencarrodrigues@gmail.com")}
                >
                  {!emailCopied ? (
                      <>
                        <MdContentCopy />
                        joaopauloalencarrodrigues@gmail.com
                      </>
                    ) : (
                      <>
                        <FaCheck />
                        Copiado!
                      </>
                    )
                  }
                </LinkButton>
              </SocialMediaContainer>
            </ContactContainer>
          </Sticky>
        </Section>
      </Main>
    </>
  )
}

export default App
