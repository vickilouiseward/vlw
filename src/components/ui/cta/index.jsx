import React from 'react'
import { Title, Paragraph } from '..'
import {
  StyledButton,
  StyledCtaSection,
  StyledLink,
  StyledLinkButton
} from './styled'

export const Button = ({ onClick, type, $outline, children }) => (
  <StyledButton {...{ onClick, type, $outline }}>{children}</StyledButton>
)

export const LinkButton = ({ cta, link, $outline }) => (
  <StyledLinkButton to={link} {...{ $outline }}>{cta}</StyledLinkButton>
)

export const BodyLink = ({ color, children }) => (
  <StyledLink {...{ color }}>{children}</StyledLink>
)

export const CallToAction = ({ level, title, blurb, cta, link, color, $outline }) => (
  <StyledCtaSection>
    <Title {...{ level, color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{blurb}</Paragraph>
    <LinkButton {...{ cta, link, $outline }} />
  </StyledCtaSection>
)
