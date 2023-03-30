import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .second {
    background: black;
  }

  .third {
    background: var(--colors-background);
  }
`

export const Section = styled.div`
  position: relative;
`

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`

export const ContactMeTitle = styled(motion.h1)`
  color: white;
  margin: auto;
  width: fit-content;
  font-size: 3rem;
  text-decoration: underline;
`

export const ContactContainer = styled.div`
  margin-top: 40vh;
  height: 50%;
  display: flex;
  justify-content: space-around;
`

export const MapContainer = styled.div`
  width: fit-content;
`

export const SocialMediaContainer = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > a {
    margin: 10px 0;
  }
`