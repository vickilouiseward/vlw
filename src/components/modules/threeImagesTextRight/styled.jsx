import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { royalBlue } = colours

export const StyledContainer = styled.section`
  background-color: ${royalBlue};
  display: flex;
  flex-direction: row;
  ${respondTo.S`
    flex-direction: column;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 75vw;
  ${respondTo.S`
    width: 100vw;
  `}
`

export const StyledImageWrapper = styled.div`
  transition: width 0.6s ease-in-out;
  width: ${({ inFocus }) => (inFocus ? '800px' : 'calc((100% - 800px) / 2)')};
  ${respondTo.S`
    width: ${({ inFocus }) => (inFocus ? '60vw' : '20vw')};
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: 800px;
  width: 100%;
  ${respondTo.S`
    height: 100vw;
  `}
`

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 25vw;
  ${respondTo.S`
    width: auto;
  `}
`
