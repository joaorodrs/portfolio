import React from 'react'

import { useTransform, useScroll } from 'framer-motion'

import { Container, NavItem } from './styles'

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const headerY = useTransform(scrollYProgress, [0, 0.05, 0.7, 0.75], ['0%', '-100%', '-100%', '0%'])

  return (
    <Container style={{ y: headerY }}>
      <nav>
        <NavItem href="#Sobre">Sobre</NavItem>
        <NavItem href="#Contato">Contato</NavItem>
      </nav>
    </Container>
  );
}

export default Header
