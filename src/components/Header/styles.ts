import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 4rem;
  background: var(--colors-primary);
  position: fixed;
  z-index: 999;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding-right: 5%;
  }
`

export const NavItem = styled(motion.a)`
  color: white;
  display: flex;
  margin: 0 1rem;

  :hover {
    color: var(--colors-secondary);
  }
`