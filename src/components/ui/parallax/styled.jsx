import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContainer = styled(animated.div)`
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
`

export const StyledParallax = styled(animated.div)`
  ${({ styles }) => styles}
`
