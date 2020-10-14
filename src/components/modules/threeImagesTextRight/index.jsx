import React, { useState } from 'react'
import {
  StyledArticle,
  StyledContainer,
  StyledImg,
  StyledImageWrapper,
  StyledSection
} from './styled'
import { Title, Paragraph } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const ThreeImagesTextRight = ({ images, title, copy }) => {
  const [inFocus, setInFocus] = useState(0)
  return (
    <StyledContainer>
      <StyledSection>
        {images.map(({ image, alt }, index) => (
          <StyledImageWrapper
            key={index}
            inFocus={inFocus === index}
            onMouseEnter={() => setInFocus(index)}
          >
            <StyledImg fadeIn={false} fluid={image} {...{ alt }} />
          </StyledImageWrapper>
        ))}
      </StyledSection>
      <StyledArticle>
        <Title level={2} color={cream}>
          {title}
        </Title>
        {copy.map((paragraph, index) => (
          <Paragraph key={index} color={cream}>
            {paragraph}
          </Paragraph>
        ))}
      </StyledArticle>
    </StyledContainer>
  )
}
