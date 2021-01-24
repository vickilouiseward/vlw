import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white, midnight } = colours

export const StyledContainer = styled.section`
  background-color: ${white};
  color: ${midnight};
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  text-align: center;
  ${({ styles }) => styles}
  ${respondTo.S`
    padding: 64px 0;
  `}
`

export const StyledWrapper = styled.section`
  position: sticky;
  top: 120px;
`

export const StyledSection = styled.section`
  align-items: end;
  display: flex;
  flex-direction: row;
  width: fit-content;
`
