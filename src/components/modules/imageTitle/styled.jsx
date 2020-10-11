import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledContainer = styled.section`
  position: relative;
`
export const StyledSection = styled.section`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
`

export const StyledImg = styled(Img)`
  display: block;
  height: 630px;
  width: 100vw;
`
