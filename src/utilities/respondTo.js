import { css } from 'styled-components'

export const breakpoints = {
  S: 600,
  M: 900,
  L: 1200
}

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
