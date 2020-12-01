import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  SplashHero,
  Newsletter,
  ThreeImagesTextRight,
  ThreeQuotes,
  TwoCtasCarousel,
  // FiveLogos,
  // FourItemCarousel,
  // ThreeCards,
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
        <TwoCtasCarousel
          title="Let's work together"
          ctas={[
            {
              title: 'Bespoke originals',
              blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. ',
              cta: 'Find out more',
              link: '/lets-work-together/bespoke-originals'
            },
            {
              title: 'Commercial commissions',
              blurb:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. ',
              cta: 'Coming soon'
              // cta: 'Find out more',
              // link: '/'
            }
          ]}
          images={[
            data.lwt1.childImageSharp.fluid,
            data.lwt2.childImageSharp.fluid,
            data.lwt3.childImageSharp.fluid,
            data.lwt4.childImageSharp.fluid,
            data.lwt5.childImageSharp.fluid
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
        {/* <FourItemCarousel
      title='Press'
      items={[{
        image: data.press1.childImageSharp.fluid,
        tab: {
          image: data.pressLogo1.childImageSharp.fixed,
          title: 'Currently exhibiting at',
          text:
            'Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus.'
        }
      }, {
        image: data.press1.childImageSharp.fluid,
        tab: {
          image: data.pressLogo2.childImageSharp.fixed,
          title: 'Finalist S/S Awards 2020',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        }
      }, {
        image: data.press3.childImageSharp.fluid,
        tab: {
          image: data.pressLogo3.childImageSharp.fixed,
          title: 'Previous exhibitions',
          text:
            'Consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        }
      }, {
        image: data.press4.childImageSharp.fluid,
        tab: {
          image: data.pressLogo4.childImageSharp.fixed,
          title: '100 anniversary winner',
          text:
            'Ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non.'
        }
      }]}
    /> */}
        {/* <ThreeCards
      title='Shop off the rack'
      cards={[
        {
          image: data.otr1.childImageSharp.fluid,
          cta: 'Shop Prints',
          link: '/shop-off-the-rack/prints'
        },
        {
          image: data.otr2.childImageSharp.fluid,
          cta: 'Shop Editions',
          link: '/shop-off-the-rack/editions'
        },
        {
          image: data.otr3.childImageSharp.fluid,
          cta: 'Shop Originals',
          link: '/shop-off-the-rack/originals'
        }
      ]}
    /> */}
        {/* <FiveLogos
      logos={[
        {
          image: data.portfolio1.childImageSharp.fixed,
          alt: 'SkinCeuticals'
        },
        {
          image: data.portfolio2.childImageSharp.fixed,
          alt: 'NET-A-PORTER'
        },
        {
          image: data.portfolio3.childImageSharp.fixed,
          alt: 'By Sarah London'
        },
        {
          image: data.portfolio4.childImageSharp.fixed,
          alt: 'PerriconeMD'
        },
        {
          image: data.portfolio5.childImageSharp.fixed,
          alt: "L'Oréal"
        }
      ]}
    /> */}
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
          text='Vicki Louise Ward is a London based fashion and lifestyle illustrator. She studied at the University for the Creative Arts before embarking on her design and illustration career. She has worked with brands including L’Oréal, SkinCeuticals, Stylist and NET-A-PORTER.'
        />
        <Newsletter
          title='Newsletter'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
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
    lwt1: file(relativePath: { eq: "homepage/lets_work_together_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt2: file(relativePath: { eq: "homepage/lets_work_together_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt3: file(relativePath: { eq: "homepage/lets_work_together_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt4: file(relativePath: { eq: "homepage/lets_work_together_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    lwt5: file(relativePath: { eq: "homepage/lets_work_together_5.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    press1: file(relativePath: { eq: "homepage/press_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press2: file(relativePath: { eq: "homepage/press_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press3: file(relativePath: { eq: "homepage/press_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press4: file(relativePath: { eq: "homepage/press_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pressLogo1: file(relativePath: { eq: "homepage/acid_gallery_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo2: file(relativePath: { eq: "homepage/fida_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo3: file(relativePath: { eq: "homepage/cluster_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo4: file(relativePath: { eq: "homepage/stylist_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    otr1: file(relativePath: { eq: "homepage/prints.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr2: file(relativePath: { eq: "homepage/limited_edition.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr3: file(relativePath: { eq: "homepage/original_artwork.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    # portfolio1: file(relativePath: { eq: "homepage/skin_ceuticals.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio2: file(relativePath: { eq: "homepage/nap.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio3: file(relativePath: { eq: "homepage/by_sarah.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio4: file(relativePath: { eq: "homepage/perricone_md.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio5: file(relativePath: { eq: "homepage/loreal.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
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
