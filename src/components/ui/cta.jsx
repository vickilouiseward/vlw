import React from 'react'
import { Title, Paragraph } from '.'
import { StyledCtaSection, StyledButton, StyledLinkButton } from './styled'

export const Button = ({ onClick, children }) => (
  <StyledButton {...{ onClick }}>{children}</StyledButton>
)

export const LinkButton = ({ cta, link }) => <StyledLinkButton to={link}>{cta}</StyledLinkButton>

export const CallToAction = ({ title, blurb, cta, link, color }) => (
  <StyledCtaSection>
    <Title level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{blurb}</Paragraph>
    <LinkButton {...{ cta, link }} />
  </StyledCtaSection>
)
