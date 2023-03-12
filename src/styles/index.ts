import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .second {
    background: green;
  }

  .third {
    background: yellow;
  }

  .fourth {
    background: blue;
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
