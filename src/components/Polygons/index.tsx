import { useScroll, useTransform } from "framer-motion";
import { Circle, Container } from "./styles"

function generateRandom(min = 0, max = 1000) {
  let difference = max - min;

  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;

  return rand;
}

function Circles() {
  const { scrollYProgress } = useScroll()

  const borderWidth = useTransform(scrollYProgress,
    [0, 0.05],
    [1, 20]
  )

  return (
      <Container layout style={{ y: '20vh' }}>
        {Array.from(Array(30)).map(() => {
            const randomSize = generateRandom(20, 245)

            return (
              <Circle
                animate={{
                  width: [
                    randomSize * 0.9,
                    randomSize,
                  ],
                  height: [
                    randomSize * 0.9,
                    randomSize,
                  ],
                }}
                style={{
                  borderWidth,
                }}
              />
            )
          }
        )}
      </Container>
  )
}

export default Circles