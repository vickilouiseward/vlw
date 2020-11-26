import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeader,
  Keyline,
  Spacer,
  ImageCtaLeft,
  ImageScrollingTextBlocks,
  ImageTextBlockGroup,
  ContactForm
} from '../../components'
import { colours } from '../../styles'

const { midnight, white } = colours

const Page = ({ data }) => (
  <>
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <title>Bespoke originals | Vicki Louise Ward Fashion Illustrator</title>
      <meta name='description' content='Bespoke originals - fashion, beauty &amp; lifestyle illustrator' />
    </Helmet>
    <GlobalStyles $lightmode />
    <SiteHeader />
    <BodyWrapper>
      <PageHeader
        color={midnight}
        bgcolor={white}
        title='Bespoke originals'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
      />
      <ImageScrollingTextBlocks
        title='Vicki’s process'
        image={data.runway.childImageSharp.fluid}
        blocks={[
          {
            number: 'Step One',
            title: 'Personal Consultation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Two',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Three',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Four',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Five',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Six',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          },
          {
            number: 'Step Seven',
            title: 'Tailored quote',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }
        ]}
      />
      <ImageTextBlockGroup
        title='Things to consider'
        blocks={[
          {
            image: data.subject.childImageSharp.fixed,
            title: 'Subject matter',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }, {
            image: data.size.childImageSharp.fixed,
            title: 'Artwork size',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }, {
            image: data.canvas.childImageSharp.fixed,
            title: 'Canvas choice',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }, {
            image: data.materials.childImageSharp.fixed,
            title: 'Type of materials',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }, {
            image: data.timeline.childImageSharp.fixed,
            title: 'Your timeline',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }, {
            image: data.gifting.childImageSharp.fixed,
            title: 'Gifting',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          }
        ]}
      />
      <ContactForm
        title='Get in touch'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
        image={data.dress.childImageSharp.fluid}
      />
    </BodyWrapper>
  </>
)

export const query = graphql`
  query {
    header: file(relativePath: { eq: "lets-work-together/ysl_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yoga: file(relativePath: { eq: "lets-work-together/yoga.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    jom: file(relativePath: { eq: "lets-work-together/jo_malone.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    runway: file(relativePath: { eq: "lets-work-together/runway_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    subject: file(relativePath: { eq: "lets-work-together/subject_matter.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    size: file(relativePath: { eq: "lets-work-together/artwork_size.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    canvas: file(relativePath: { eq: "lets-work-together/canvas_choice.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    materials: file(relativePath: { eq: "lets-work-together/types_of_materials.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    timeline: file(relativePath: { eq: "lets-work-together/your_timeline.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    gifting: file(relativePath: { eq: "lets-work-together/gifting.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    dress: file(relativePath: { eq: "lets-work-together/purple_dress_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
