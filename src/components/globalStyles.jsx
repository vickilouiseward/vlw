import { createGlobalStyle } from 'styled-components'
import {
  AmiriBold,
  AmiriBoldItalic,
  AmiriItalic,
  AmiriRegular,
  Northwell
} from '../fonts'
import { colours } from '../styles'

const { midnight, white } = colours

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amiri';
    src: url(${AmiriRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Amiri';
    src: url(${AmiriItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Amiri';
    src: url(${AmiriBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Amiri';
    src: url(${AmiriBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Northwell';
    src: url(${Northwell}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${({ lightmode }) => lightmode ? white : midnight};
    color: ${({ lightmode }) => lightmode ? midnight : white};
    font-family: Amiri, serif;
    font-size: 16px;
    line-height: 1.2;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
