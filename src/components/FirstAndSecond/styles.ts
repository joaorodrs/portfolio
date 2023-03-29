import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background: red;
  overflow: hidden;
`;

export const FirstSection = styled(motion.div)`
  width: 100%;
  height: 100%;
  
  .reactChatSection {
    background: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .gameStoreSection {
    background: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`

export const IntroInfo = styled(motion.div)`
  background: var(--colors-background);
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const LeftSide = styled(motion.div)`
  width: 50%;
  height: 100%;
  background: var(--colors-primary);
  padding: 2rem;
  z-index: 2;
`

export const RightSide = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const RoleTitle = styled(motion.h1)`
  color: white;
`

export const RoleDescription = styled(motion.p)`
  color: white;
  font-size: 1.2rem;
  width: 80%;
  margin: auto;
`

export const IntroContainer = styled(motion.div)``

export const IntroTitle = styled(motion.h1)`
  color: white;
  text-align: center;
  font-size: 3rem;
`

export const IntroDescription = styled(motion.p)`
  color: white;
  text-align: center;
`

export const ButtonStack = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: .5rem;
  width: 50%;
`

export const LinkButton = styled(motion.a)`
  color: white;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`

export const QuoteContainer = styled(motion.div)`
  background: var(--colors-primary);
  width: 100%;
  height: 100%;
`

export const QuoteText = styled(motion.h2)`
  margin: auto;
  font-family: sans-serif;
  font-style: italic;
  color: white;
  width: 50%;
`

export const QuoteAuthor = styled(motion.p)`
  margin: auto;
  color: white;
  width: 50%;
`