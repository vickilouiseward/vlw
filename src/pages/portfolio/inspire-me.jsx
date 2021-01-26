import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeader,
  ImageGrid,
  Footer
} from '../../components'
import { colours } from '../../styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { midnight, white } = colours

const Page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    })
    window.sessionStorage.setItem('introComplete', 1)
  }, [])
  console.log(data)
  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>Portfolio - Inspire Me | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Find inspiring illustrations and artwork by Vicki Louise Ward, for brands and themes including: SkinCeuticals, Perricone MD, Net-A-Porter &amp; Mr Porter, Smooth Skin, BySarah, Fashion Week, Interiors, Urban Decay, YSL, Florals, Beauty products, STYLIST, Yoga' />
      </Helmet>
      <GlobalStyles />
      <BodyWrapper>
        <SiteHeader />
        <PageHeader
          color={white}
          bgcolor={midnight}
          image={data.splash_bp4_1.childImageSharp.fluid}
          title='Get inspired'
          text='SkinCeuticals / Perricone MD / Net-A-Porter &amp; Mr Porter / Smooth Skin / BySarah / Fashion Week / Interiors / Urban Decay / YSL / Florals / Beauty products / STYLIST / Yoga'
        />
        <ImageGrid
          columns={[
            [
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid
            ],
            [
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid
            ],
            [
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid,
              data.placeholder.childImageSharp.fluid
            ]
          ]}
        />
        <Footer />
      </BodyWrapper>
    </>
  )
}
export const query = graphql`
  query {
    splash_bp4_1: file(relativePath: { eq: "homepage/splashscreen/Image-exportsbp4_home_splash_1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
