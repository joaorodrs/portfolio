import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import profilePic from '../../assets/joao.jpeg'
import reactchatPic from '../../assets/reactchat.png'
import gameStorePic from '../../assets/game-store.png'

import { Sticky } from '../../styles'
import {
  ButtonStack,
  Container,
  FirstSection,
  IntroContainer,
  IntroDescription,
  IntroInfo,
  IntroTitle,
  LeftSide,
  LinkButton,
  QuoteAuthor,
  QuoteContainer,
  QuoteText,
  RightSide,
  RoleDescription,
  RoleTitle
} from './styles'
import { FaClipboardList, FaGithub, FaLinkedin } from 'react-icons/fa'
import Circles from '../Polygons'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.19, 0.25], [0, 1])

  const frameScale = useTransform(scrollYProgress, [0.55, 0.57], [0.5, 0.8])

  return (
    <Sticky className="second">
      <First />

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid white',
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const containerScale = useTransform(scrollYProgress,
    [0.2, 0.22, 0.55, 0.57],
    [1, 0.5, 0.5, 1]
  )

  const containerRadius = useTransform(scrollYProgress,
    [0.2, 0.22, 0.55, 0.57],
    [0, 10, 10, 0]
  )

  const firstSectionOffsetY = useTransform(scrollYProgress,
    [0.25, 0.3, 0.40, 0.45, 0.50, 0.55],
    ['0%', "-100%", "-100%", "-200%", "-200%", "-300%"]
  )

  const leftSideHeight = useTransform(scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh']
  )

  const firstRoleDescriptionY = useTransform(scrollYProgress,
    [0.020, 0.060, 0.12, 0.14],
    ['5vh', '40vh', '40vh', '30vh']
  )

  const secondRoleDescriptionY = useTransform(scrollYProgress,
    [0.12, 0.14],
    ['60vh', '40vh']
  )

  const secondRoleDescriptionOpacity = useTransform(scrollYProgress,
    [0.12, 0.135],
    [0, 1]
  )

  const introTitleY = useTransform(scrollYProgress,
    [0, 0.058],
    ['45vh', '10vh']
  )

  const introLinksOpacity = useTransform(scrollYProgress,
    [0.030, 0.058],
    [0, 1]
  )

  const rightSideY = useTransform(scrollYProgress,
    [0.020, 0.060],
    ['58vh', '0vh']
  )

  const rightSideScale = useTransform(scrollYProgress,
    [0.030, 0.070],
    [0, 0.551]
  )

  const quoteOffsetY = useTransform(scrollYProgress,
    [0.60, 0.65],
    ['-10vh', '45vh']
  )

  const quoteOpacity = useTransform(scrollYProgress,
    [0.60, 0.65],
    [0, 1]
  )

  return (
    <Container
      style={{
        scale: containerScale,
        borderRadius: containerRadius
      }}
    >
      <FirstSection style={{
        y: firstSectionOffsetY
      }}>
        <Circles />
        <IntroInfo>
          <LeftSide
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          >
            <RoleTitle>Software Developer</RoleTitle>
            <RoleDescription style={{ y: firstRoleDescriptionY }}>
              I’m a Software Developer based in Santarém with 2 years
              of experience working complex React (Web) and React Native
              (Mobile) solutions for varied types of consumers and business.
              Currently I’m working as a Junior Front-end Developer.
            </RoleDescription>
            <RoleDescription
              style={{
                y: secondRoleDescriptionY,
                opacity: secondRoleDescriptionOpacity
              }}
            >
              Never running from bigger problems, always thinking that
              great skills come from solving once 'unsolvable' problems.
            </RoleDescription>
          </LeftSide>
          <RightSide>
            <IntroContainer layout style={{ y: introTitleY }}>
              <IntroTitle>My Website.</IntroTitle>
              <IntroDescription>
                Hey! I'm João Paulo Rodrigues, but you can call me lil' John.
              </IntroDescription>
              <ButtonStack style={{ opacity: introLinksOpacity }}>
                <LinkButton href="https://github.com/joaorodrs" target="_blank">
                  <FaGithub />
                  <span>Github</span>
                </LinkButton>
                <LinkButton href="https://linkedin.com/in/joaorodrs" target="_blank">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </LinkButton>
                <LinkButton href="/curriculo.pdf" target="_blank">
                  <FaClipboardList />
                  <span>Resume</span>
                </LinkButton>
              </ButtonStack>
            </IntroContainer>
            <motion.img
              src={profilePic}
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            />
          </RightSide>
        </IntroInfo>
        <div className="reactChatSection">
          <img src={reactchatPic} height="100%" />
        </div>
        <div className="gameStoreSection">
          <img src={gameStorePic} height="100%" />
        </div>
        <QuoteContainer>
          <QuoteText  style={{ y: quoteOffsetY, opacity: quoteOpacity }}>
            "Freedom is not about doing what you want to do,
            rather it's about doing what you don't want to do."
          </QuoteText>
          <QuoteAuthor style={{ y: quoteOffsetY, opacity: quoteOpacity }}>- Immanuel Kant</QuoteAuthor>
        </QuoteContainer>
      </FirstSection>
    </Container>
  )
}

export default FirstAndSecond
