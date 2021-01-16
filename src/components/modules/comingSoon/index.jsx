import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  StyledContainer,
  StyledSection,
  StyledImg,
  StyledSocialSection,
  StyledLink
} from './styled'
import { Newsletter } from '..'
import { Logo, Tagline, InstaIcon } from '../..'
import { colours } from '../../../styles'

const { midnight } = colours

export const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      jimmychoo: file(relativePath: { eq: "jimmychoo_shoe.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <StyledContainer>
      <StyledSection>
        <StyledImg fadeIn={false} fluid={data.jimmychoo.childImageSharp.fluid} alt='Jimmy Choo shoe illustration' />
        <Logo />
        <Tagline>Fashion, beauty &amp; lifestyle illustrator</Tagline>
        <StyledSocialSection>
          <InstaIcon fill={midnight} />
          Follow me on Instagram
          <StyledLink
            href='https://www.instagram.com/vickilouiseward'
            title='Instagram @vickilouiseward '
          >
            @vickilouiseward
          </StyledLink>
        </StyledSocialSection>
      </StyledSection>
      <Newsletter
        title='Coming soon!'
        text='Be the first to know when we launch and sign up to the brand new monthly newsletter'
      />
    </StyledContainer>
  )
}

export default ComingSoon
