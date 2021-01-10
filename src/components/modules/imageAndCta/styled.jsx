import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight, white } = colours

export const StyledContainer = styled.section`
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || midnight};
  color: ${({ bgcolor }) => bgcolor ? midnight : white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 72px 120px;
  ${respondTo.M`
    flex-direction: column;
    padding: 64px 24px;
  `}
`

export const StyledSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  ${respondTo.M`
    align-items: center;
    width: 100%;
    order: 3;
  `}
`

export const StyledImg = styled(Img)`
  display: block;
  height: 100%;
  width: 50vw;
  ${respondTo.M`
    width: 100%;
    order: 1;
  `}
`

export const StyledSpacer = styled.div`
  display: block;
  height: 100%;
  width: 120px;
  ${respondTo.M`
    height: 64px;
    width: 100%;
    order: 2;
  `}
`

export const StyledWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${respondTo.M`
    flex-direction: column;
  `}
  & > ${StyledContainer} {
    box-sizing: border-box;
    flex-direction: column;
    padding: 0 64px 80px;
    ${respondTo.M`
      padding: 0 24px 80px;
    `}
  }
  & ${StyledSection} {
    width: 100%;
  }
  & ${StyledImg} {
    width: 100%;
  }
  & ${StyledSpacer} {
    display: none;
  }
`
