import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${midnight};
  color: ${white};
  display: flex;
  flex-direction: row;
  ${respondTo.S`
    flex-direction: column;
  `}
`

export const StyledFormSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 24px 64px;
  text-align: center;
  width: 50vw;
  ${respondTo.S`
    width: 100vw;
    order: 1;
  `}
  > p {
    max-width: 520px;
  }
  > form {
    width: 100%;
  }
`

export const PageWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 424px;
  padding-bottom: 0;
  text-align: left;
  width: 100%;
  > section {
    width: 100%;
  }
  input, 
  textarea {
    margin-bottom: 28px
  }
  input ~ div,
  textarea ~ div {
    bottom: 0;
  }
  button {
    margin-top: 16px;
  }
`

export const StyledImgSection = styled.section`
  width: 50vw;
  ${respondTo.S`
    width: 100vw;
    height: 100vw;
    order: 0;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: 1200px;
  width: 50vw;
  ${respondTo.S`
    width: 100vw;
    height: 120vw;
  `}
`
