import { useEffect, useState } from 'react'
import { useTrail } from '@react-spring/web'
import { BackBox, Box, Container, FrontBox } from './Styled'

const items = ['E', 'V', 'E', 'R', 'Y', 'O', 'N', 'E', ' ', 'A', 'P', 'P']

const LogoSpringTrail = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }))


  useEffect(() => {
    const interval = setInterval(() => {
      if (isFlipped) {
        api.start({
          rotateX: 0,
        })
        setIsFlipped(false)
      } else {
        api.start({
          rotateX: 180,
        })
        setIsFlipped(true)
      }
    }, 4500)
    return () => clearInterval(interval)
  }, [api, isFlipped])

  return (
    <Container>
      {trail.map(({ rotateX }, i) => (
        <Box key={i}>
          <FrontBox
            key={items[i]}
            style={{
              transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
              transformStyle: 'preserve-3d',
            }}
          >
            {items[i]}
          </FrontBox>
          <BackBox
            style={{
              transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
              transformStyle: 'preserve-3d',
            }}
          >
            {items[i]}
          </BackBox>
        </Box>
      ))}
    </Container>
  )
}

export default LogoSpringTrail;