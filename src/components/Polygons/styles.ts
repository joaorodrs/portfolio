import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  position: absolute;
  width: 40%;
  height: 100%;
  margin: auto;
  overflow-y: hidden;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(40deg);
  margin-left: 5vw;
  overflow: visible;
`

export const Circle = styled(motion.div)`
  border: 1px solid;
  border-color: var(--colors-secondary);
  margin: 10px 20px;  
  transform: rotateZ(45deg)
`