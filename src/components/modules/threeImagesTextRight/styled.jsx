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
  ${respondTo.M`
    width: 50vw;
  `}
  ${respondTo.S`
    width: 100vw;
  `}
`

export const StyledImgWrapper = styled.div`
  overflow: hidden;
  transition: width 0.8s ease-in-out;
  width: ${({ inFocus }) => (inFocus ? '45vw' : '15vw')};
  ${respondTo.M`
    width: ${({ inFocus }) => (inFocus ? '30vw' : '10vw')};
  `}
  ${respondTo.S`
    width: ${({ inFocus }) => (inFocus ? '60vw' : '20vw')};
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: 800px;
  width: 100%;
  ${respondTo.M`
    height: 50vw;
    width: 50vw;
  `}
  ${respondTo.S`
    height: 100vw;
    width: 100vw;
  `}
`

export const StyledArticle = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 40px 40px;
  width: 25vw;
  text-align: center;
  ${respondTo.M`
    width: 50vw;
  `}
  ${respondTo.S`
    width: 100vw;
  `}
`
