import React from 'react'
import { graphql } from 'gatsby'
import { GlobalStyles, Header, TwoCtasCarouselRight } from '../components'

const Home = ({ data }) => (
  <>
    <GlobalStyles />
    <Header />
    <TwoCtasCarouselRight
      title="Let's work together"
      ctas={[
        {
          title: 'Bespoke originals',
          blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. ',
          cta: 'Find out more',
          link: '/'
        },
        {
          title: 'Commercial commissions',
          blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. ',
          cta: 'Find out more',
          link: '/'
        }
      ]}
      image={data.carouselImage1.childImageSharp.fluid}
    />
  </>
)

export const query = graphql`
  query {
    carouselImage1: file(relativePath: { eq: "IMG_3610.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Home
