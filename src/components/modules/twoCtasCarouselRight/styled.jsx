import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 940px;
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px 128px;
  width: 50vw;
`

export const StyledSliderSection = styled.section`
  width: 50vw;
`

export const StyledImg = styled(Img)`
  display: block;
  width: 50vw;
  height: 940px;
`
