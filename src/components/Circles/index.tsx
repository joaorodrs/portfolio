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
      <Container style={{ y: '20vh' }}>
        {Array.from(Array(30)).map(() => {
            const randomSize = generateRandom(20, 245)

            return (
              <Circle
                animate={{
                  // borderWidth: [
                  //   generateRandom(1, 10),
                  //   generateRandom(1, 10),
                  //   generateRandom(1, 10),
                  //   generateRandom(1, 10),
                  //   generateRandom(1, 10),
                  // ],
                  transition: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2.5,
                    ease: 'easeInOut'
                  }
                }}
                style={{
                  width: randomSize,
                  height: randomSize,
                  borderWidth
                }}
              />
            )
          }
        )}
      </Container>
  )
}

export default Circles