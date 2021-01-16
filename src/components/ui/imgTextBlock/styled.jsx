import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black } = colours

export const StyledSection = styled.section`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 610px;
  justify-content: flex-start;
  min-height: 610px;
  padding: 64px 40px 0;
  text-align: left;
  width: calc(100vw / 3);
  ${respondTo.M`
    width: 50vw;
  `}
  ${respondTo.S`
    width: 100vw;
  `}
`

export const StyledImg = styled(Img)`
  border-left: 4px solid ${black};
  height: auto;
  margin-bottom: 32px;
  order: ${({ $textFirst }) => ($textFirst ? 1 : 0)};
  width: 100%;
`
