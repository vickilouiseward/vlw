import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { midnight } = colours

export const StyledContainer = styled.section`
  align-items: center;
  background-color: ${midnight};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 0;
  text-align: center;
  width: 100%;
  ${respondTo.M`
    padding: 64px 32px;
  `}
`

export const StyledSection = styled.section`
  max-width: 800px;
  width: 100%;
`
