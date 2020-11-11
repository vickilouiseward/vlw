import Img from 'gatsby-image'
import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSection = styled.section`
  align-items: center;
  background-color: ${white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 0 72px;
  width: 100vw;
`

export const StyledImg = styled(Img)`
  display: block;
  height: auto;
  width: 160px;
  ${respondTo.S`
    width: 90px;
  `}
`

export const StyledSocialSection = styled.section`
  align-items: center;
  border-top: 1px solid rgba(162,162,162, 0.5);
  color: ${midnight};
  display: flex;
  margin-top: 32px;
  padding-top: 32px;
`

export const StyledLink = styled.a`
  color: ${midnight};
  display: inline-block;
  padding: 0 8px;
  text-decoration: none;
`
