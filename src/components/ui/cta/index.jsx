import React from 'react'
import { Title, Paragraph } from '..'
import {
  StyledButton,
  StyledCtaSection,
  StyledLink,
  StyledLinkButton
} from './styled'

export const Button = ({ onClick, type, children }) => (
  <StyledButton {...{ onClick, type }}>{children}</StyledButton>
)

export const LinkButton = ({ cta, link }) => (
  <StyledLinkButton to={link}>{cta}</StyledLinkButton>
)

export const BodyLink = ({ color, children }) => (
  <StyledLink {...{ color }}>{children}</StyledLink>
)

export const CallToAction = ({ level, title, blurb, cta, link, color }) => (
  <StyledCtaSection>
    <Title {...{ level, color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{blurb}</Paragraph>
    <LinkButton {...{ cta, link }} />
  </StyledCtaSection>
)
