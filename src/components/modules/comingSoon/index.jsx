import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  StyledContainer,
  StyledSection,
  StyledImg
} from './styled'
import { Logo, Tagline, Newsletter } from '..'

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
      </StyledSection>
      <Newsletter
        title='Coming soon!'
        text='Be the first to know when we launch and sign up to the brand new monthly newsletter'
      />
    </StyledContainer>
  )
}

export default ComingSoon
