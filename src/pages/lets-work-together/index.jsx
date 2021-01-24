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
      <BodyWrapper>
        <SiteHeader />
        <PageHeader
          title="Let's work together"
          text='I offer two custom services, Bespoke Originals for those looking for something niche or personal and Commercial Commissions for those looking to enhance their brand story and luxury presence.'
        />
        <ImageCtaWrapper>
          <ImageCta
            image={data.bespoke_orginals.childImageSharp.fluid}
            cta={{
              title: 'Bespoke originals',
              blurb: 'One of a kind artwork or yourself or a loved one.',
              cta: 'Commission me',
              link: '/lets-work-together/bespoke-originals'
            }}
          />
          <ImageCta
            image={data.commercial_commissions.childImageSharp.fluid}
            cta={{
              title: 'Commercial Commissions',
              blurb: 'Take your brand identity and storytelling to the next level with custom illustrations.',
              cta: 'Start a project',
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
    bespoke_orginals: file(relativePath: { eq: "lets-work-together/bespoke_orginals.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    commercial_commissions: file(relativePath: { eq: "lets-work-together/commercial_commissions.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
