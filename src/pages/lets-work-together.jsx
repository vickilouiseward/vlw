import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { BodyWrapper, GlobalStyles, Header, PageHeader, ImageCtaLeft, ImageCtaRight } from '../components'

const Page = ({ data }) => (
  <>
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <title>Let&apos;s work together | Vicki Louise Ward Fashion Illustrator</title>
      <meta name='description' content="Let's work together - fashion, beauty &amp; lifestyle illustrator" />
    </Helmet>
    <GlobalStyles />
    <Header />
    <BodyWrapper>
      <PageHeader
        title="Let's work together"
        text='I offer two custom services, Bespoke Originals for those looking for something niche or personal and the other is Commercial Commissions for those looking to enhance their brand story and luxury presence.'
      />
      <ImageCtaLeft
        cta={{
          title: 'Bespoke originals',
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
          cta: 'Find out more',
          link: '/'
        }}
        images={[
          data.lwt1.childImageSharp.fluid,
          data.lwt2.childImageSharp.fluid
        ]}
      />
      <ImageCtaRight
        cta={{
          title: 'Commercial',
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
          cta: 'Find out more',
          link: '/'
        }}
        images={[
          data.lwt3.childImageSharp.fluid,
          data.lwt4.childImageSharp.fluid
        ]}
      />
    </BodyWrapper>
  </>
)

export const query = graphql`
  query {
    lwt1: file(relativePath: { eq: "lets_work_together_5.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt2: file(relativePath: { eq: "lets_work_together_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt3: file(relativePath: { eq: "lets_work_together_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt4: file(relativePath: { eq: "lets_work_together_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
