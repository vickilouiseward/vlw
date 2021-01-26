import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledColumn, StyledImgWrapper, StyledImg } from './styled'
import { breakpoints } from '../../../utilities'

export const ImageGrid = ({ columns }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })

  let cols = columns

  if (mobile) {
    const f = columns.flat(1)
    const m = Math.floor(f.length / 3)
    cols = [f.slice(0, m), f.slice(m, f.length)]
  }

  return (
    <StyledContainer>
      {cols.map((column, index) => (
        <StyledColumn key={index}>
          {column.map((image, index) => (
            <StyledImgWrapper key={index}>
              <StyledImg fadeIn={false} fluid={image} alt='' />
            </StyledImgWrapper>
          ))}
        </StyledColumn>
      ))}
    </StyledContainer>
  )
}

export default ImageGrid

// 24 column pad
