import React, { useState, useEffect } from 'react'
import {
  StyledArticle,
  StyledContainer,
  StyledImg,
  StyledImgWrapper,
  StyledSection
} from './styled'
import { Title, Paragraph } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const ThreeImagesTextRight = ({ images, title, text }) => {
  const [inFocus, setInFocus] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(true)

    const timer = setTimeout(() => {
      setAnimating(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [inFocus])

  return (
    <StyledContainer>
      <StyledSection>
        {images.map((image, index) => (
          <StyledImgWrapper
            key={index}
            inFocus={inFocus === index}
            onMouseEnter={() => {
              if (!animating) {
                setInFocus(index)
              }
            }}
          >
            <StyledImg fadeIn={false} fluid={image} alt={title} />
          </StyledImgWrapper>
        ))}
      </StyledSection>
      <StyledArticle>
        <Title data-aos='fade-in' level={2} color={cream}>
          {title}
        </Title>
        {text.map((paragraph, index) => (
          <Paragraph key={index} data-aos='fade-in' color={cream}>
            {paragraph}
          </Paragraph>
        ))}
      </StyledArticle>
    </StyledContainer>
  )
}
