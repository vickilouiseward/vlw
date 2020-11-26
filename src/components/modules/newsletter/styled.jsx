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
  padding: 64px 0;
  text-align: center;
  width: 100%;
  ${respondTo.M`
    padding: 64px 24px;
  `}
`

export const StyledSection = styled.section`
  max-width: 600px;
  width: 100%;
`

export const StyledPageWrapper = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 900px;
  text-align: left;
  width: 100%;
  > section {
    width: 320px;
  }
  input, 
  textarea {
    margin-bottom: 0;
  }
  input ~ div,
  textarea ~ div {
    bottom: -28px;
  }
  button {
    margin-top: 0;
  }
`

export const StyledFormSection = styled.section`
  width: 100%;
  > form {
    width: 100%;
  }
`
