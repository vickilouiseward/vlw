import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeader,
  ImageCtaWrapper,
  ImageCta,
  Footer
} from '../../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
        <ImageCtaWrapper>
          <ImageCta
            image={data.placeholder.childImageSharp.fluid}
            cta={{
              title: 'Bespoke originals',
              blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
              cta: 'Find out more',
              link: '/lets-work-together/bespoke-originals'
            }}
          />
          <ImageCta
            image={data.placeholder.childImageSharp.fluid}
            cta={{
              title: 'Commercial',
              blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
              cta: 'Find out more',
              link: '/lets-work-together/commercial-commissions'
            }}
          />
        </ImageCtaWrapper>
        <Footer />
      </BodyWrapper>
    </>
  )
}

export const query = graphql`
  query {
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
