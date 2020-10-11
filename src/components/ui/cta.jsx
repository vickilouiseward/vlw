import React from 'react'
import { Title, Paragraph } from '.'
import { StyledBodyLink, StyledButton, StyledCtaSection, StyledLinkButton } from './styled'

export const Button = ({ onClick, children }) => (
  <StyledButton {...{ onClick }}>{children}</StyledButton>
)

export const LinkButton = ({ cta, link }) => <StyledLinkButton to={link}>{cta}</StyledLinkButton>

export const BodyLink = ({ color, children }) => (
  <StyledBodyLink {...{ color }}>{children}</StyledBodyLink>
)

export const CallToAction = ({ title, blurb, cta, link, color }) => (
  <StyledCtaSection>
    <Title level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{blurb}</Paragraph>
    <LinkButton {...{ cta, link }} />
  </StyledCtaSection>
)
