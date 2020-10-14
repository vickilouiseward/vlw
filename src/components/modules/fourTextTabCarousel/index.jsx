import React from 'react'
import { StyledContainer, StyledImg } from './styled'
import { Parallax, TabSlider, TextTab } from '../..'
import { colours } from '../../../styles'

const { cream } = colours
const height = 460

export const FourTextTabCarousel = ({ image, title, textTabs }) => (
  <StyledContainer>
    <TabSlider tabs={textTabs.map((tab, index) => <TextTab key={index} color={cream} {...tab} />)} {...{ height, title }}>
      <Parallax {...{ height }}>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </Parallax>
      <Parallax {...{ height }}>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </Parallax>
      <Parallax {...{ height }}>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </Parallax>
      <Parallax {...{ height }}>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </Parallax>
    </TabSlider>
    {/* <StyledImg fadeIn={false} fluid={image} alt={title} />
    <Title level={2} color={cream}>
      {title}
    </Title>
    <StyledSection>
      {textTabs.map((tab, index) => (
        <TextTab key={index} color={cream} {...tab} />
      ))}
    </StyledSection> */}
  </StyledContainer>
)
