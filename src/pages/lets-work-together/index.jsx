import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeader,
  ImageCtaLeft,
  ImageCtaRight,
  Keyline,
  Footer
} from '../../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    })
    window.sessionStorage.setItem('introComplete', 1)
  }, [])

  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>Let&apos;s work together | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content="Let's work together - fashion, beauty &amp; lifestyle illustrator" />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <BodyWrapper>
        <PageHeader
          title="Let's work together"
          text='I offer two custom services, Bespoke Originals for those looking for something niche or personal and the other is Commercial Commissions for those looking to enhance their brand story and luxury presence.'
        />
        <Keyline />
        <ImageCtaLeft
          cta={{
            title: 'Bespoke originals',
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
            cta: 'Find out more',
            link: '/lets-work-together/bespoke-originals'
          }}
          images={[
            data.bo1.childImageSharp.fluid,
            data.bo2.childImageSharp.fluid
          ]}
        />
        <Keyline />
        <ImageCtaRight
          cta={{
            title: 'Commercial',
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
            cta: 'Find out more',
            link: '/lets-work-together/commercial-commissions'
          }}
          images={[
            data.cc1.childImageSharp.fluid,
            data.cc2.childImageSharp.fluid
          ]}
        />
        <Footer />
      </BodyWrapper>
    </>
  )
}

export const query = graphql`
  query {
    bo1: file(relativePath: { eq: "lets-work-together/floral_skull.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bo2: file(relativePath: { eq: "lets-work-together/dior.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc1: file(relativePath: { eq: "lets-work-together/beauty_selection.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc2: file(relativePath: { eq: "lets-work-together/fashionistas.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
