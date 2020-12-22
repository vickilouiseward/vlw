import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  CarouselCtaLeft,
  CarouselCtaRight,
  GlobalStyles,
  SiteHeader,
  SplashHero,
  Newsletter,
  ThreeImagesTextRight,
  ThreeQuotes,
  Footer
} from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = ({ data }) => {
  const introAnimation = typeof window !== 'undefined' && !window.sessionStorage.getItem('introComplete')

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
        <title>Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Vicki Louise Ward - fashion, beauty &amp; lifestyle illustrator' />
      </Helmet>
      <GlobalStyles />
      <SplashHero
        images={[
          [
            data.portfolioLg1.childImageSharp.fluid,
            {
              ...data.portfolioSm1.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.portfolioLg2.childImageSharp.fluid,
            {
              ...data.portfolioSm2.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.portfolioLg3.childImageSharp.fluid,
            {
              ...data.portfolioSm3.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.portfolioLg4.childImageSharp.fluid,
            {
              ...data.portfolioSm4.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.portfolioLg5.childImageSharp.fluid,
            {
              ...data.portfolioSm5.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.portfolioLg6.childImageSharp.fluid,
            {
              ...data.portfolioSm6.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ]
        ]}
        cta='Explore protfolio'
        link='/portfolio'
        {...{ introAnimation }}
      />
      <BodyWrapper {...{ introAnimation }}>
        <SiteHeader />
        <CarouselCtaLeft
          title="Let's work together"
          cta={{
            title: 'Bespoke originals',
            blurb: 'This luxury offering is ideal for those who have been looking to find the perfect original artwork to bring their home or office space together. One of a kind art also makes for a sumptuous gift, it is a wonderful way to treat someone special to a carefully refined favour.',
            cta: 'Find out more',
            link: '/lets-work-together/bespoke-originals'
          }}
          images={[
            data.bo1.childImageSharp.fluid,
            data.bo2.childImageSharp.fluid,
            data.bo3.childImageSharp.fluid
          ]}
        />
        <CarouselCtaRight
          title="Let's work together"
          cta={{
            title: 'Commercial commissions',
            blurb: "Enhance your story telling with custom illustrations designed to help commutate your brand’s identity, products/services and core values. Drop me a message and we can talk about all the options and ways illustration can help you give the personal touch you're looking for.",
            cta: 'Coming soon'
            // cta: 'Find out more',
            // link: '/'
          }}
          images={[
            data.cc1.childImageSharp.fluid,
            data.cc2.childImageSharp.fluid,
            data.cc3.childImageSharp.fluid
          ]}
        />
        <ThreeQuotes
          title='Testimonials'
          quotes={[
            {
              standfirst: 'Vicki is my go-to when my clients request illustrative art commissions. She is amazing to work with, her passion and enthusiasm for what she does is second to none, and her processes and structure mean my clients are always happy with the finished piece.',
              text: 'No task is too big or small for Vicki, she has been commissioned for a wide range of digital & physical works for my clients. She has a great personality and this shows in the quality of her work. Would recommend for all your creative art needs.',
              cite: {
                name: 'Emil Ingleton',
                extra: 'Founder & CEO - Evolve Chelsea'
              }
            },
            {
              callout: true,
              standfirst: 'Such a pleasure to work with Vicki. We wanted something completely bespoke for a family business.',
              text: 'She understood our brief and delivered an incredible piece of artwork better than we could ever imagined. She is incredibly talented and always goes above and beyond. Highly recommend.',
              cite: {
                name: 'Andy Wilson',
                extra: 'Private client'
              }
            },
            {
              standfirst: 'It was an absolute pleasure working with Vicki from start to finish. With an innate energy and creativity she took our brief and brought it to life with graceful watercolours, in super-fast time to meet out deadline.',
              text: 'Having worked in both retail and publishing Vicki understands how to create illustrations that translate seamlessly across all media platforms, from print to online and social.  This was the visual engagement we wanted to make our products get attention in a current and relevant way. Plus Vicki is a truly lovely and warm person who is a delight in every way.',
              cite: {
                name: 'Cara Ward',
                extra: 'Co-founder & director - Pure PR '
              }
            }
          ]}
        />
        <ThreeImagesTextRight
          images={[
            {
              image: data.ms1.childImageSharp.fluid,
              alt: ''
            },
            {
              image: data.ms2.childImageSharp.fluid,
              alt: ''
            },
            {
              image: data.ms3.childImageSharp.fluid,
              alt: ''
            }
          ]}
          title='My Story'
          text={[
            'Vicki Louise Ward is a London based fashion, beauty and lifestyle illustrator.',
            'She uses a mixture of minimalist and detailed lines alongside abstract watercolour to describe the beauty and elegance of the world around her.',
            'She studied at the University for the Creative Arts before embarking on her design and illustration career. She has worked with brands including L’Oréal, SkinCeuticals, Stylist and NET-A-PORTER.'
          ]}
        />
        <Newsletter
          title='Newsletter'
          text='Don’t miss a thing. Sign up to the newsletter to be the first to hear about artwork launches, up and coming exhibitions, and new blog posts.'
        />
        <Footer />
      </BodyWrapper>
    </>
  )
}

export const query = graphql`
  query {
    portfolioLg1: file(relativePath: { eq: "homepage/01_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm1: file(relativePath: { eq: "homepage/01_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioLg2: file(relativePath: { eq: "homepage/02_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm2: file(relativePath: { eq: "homepage/02_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioLg3: file(relativePath: { eq: "homepage/03_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm3: file(relativePath: { eq: "homepage/03_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioLg4: file(relativePath: { eq: "homepage/04_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm4: file(relativePath: { eq: "homepage/04_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioLg5: file(relativePath: { eq: "homepage/05_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm5: file(relativePath: { eq: "homepage/05_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioLg6: file(relativePath: { eq: "homepage/06_bp4_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioSm6: file(relativePath: { eq: "homepage/06_bp1_portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bo1: file(relativePath: { eq: "homepage/bespoke_originals_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bo2: file(relativePath: { eq: "homepage/bespoke_originals_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bo3: file(relativePath: { eq: "homepage/bespoke_originals_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc1: file(relativePath: { eq: "homepage/commercial_commission_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc2: file(relativePath: { eq: "homepage/commercial_commission_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cc3: file(relativePath: { eq: "homepage/commercial_commission_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms1: file(relativePath: { eq: "homepage/my_story_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms2: file(relativePath: { eq: "homepage/my_story_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms3: file(relativePath: { eq: "homepage/my_story_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
