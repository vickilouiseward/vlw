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
  ${respondTo.S`
    padding: 64px 0;
  `}
`

export const StyledWrapper = styled.section`
  height: 610px;
  overflow: hidden;
  width: 100%;
`
export const StyledSection = styled.section`
  align-items: end;
  display: flex;
  flex-direction: column;
  height: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  width: 610px;
  scroll-snap-type: y mandatory;
  transform: rotate(-90deg) translateY(-610px);
  transform-origin: right top;
  & ::-webkit-scrollbar {
    display: none;
  }
  & > * {
    margin-bottom: calc(-610px + (100vw / 3));
    scroll-snap-align: start;
    transform: rotate(90deg) translateY(-610px);
    transform-origin: left top;
    ${respondTo.M`
      margin-bottom: calc(-610px + 50vw);
    `}
    ${respondTo.S`
      margin-bottom: calc(-610px + 100vw);
    `}
  }
`
