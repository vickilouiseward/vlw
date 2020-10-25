import React from 'react'
import styled from 'styled-components'
import { GlobalStyles, Header } from '../components'
import { Title, LinkButton } from '../components/ui'

const StyledSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PageNotFound = ({ data }) => (
  <>
    <GlobalStyles lightmode />
    <Header />
    <StyledSection>
      <Title level={2}>Page not found.</Title>
      <LinkButton cta='Return to home' link='/' />
    </StyledSection>
  </>
)

export default PageNotFound
