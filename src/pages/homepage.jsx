import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  CarouselCtaLeft,
  CarouselCtaRight,
  ImageCta,
  GlobalStyles,
  SiteHeader,
  SplashHero,
  Newsletter,
  ThreeImagesTextRight,
  ThreeQuotes,
  Footer
} from '../components'
import { colours } from '../styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { pastelPink } = colours

const Page = ({ data }) => {
  const introAnimation = typeof window !== 'undefined' && !window.sessionStorage.getItem('introComplete')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    })
    typeof window !== 'undefined' && setTimeout(() => window.sessionStorage.setItem('introComplete', 1), 4000)
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
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
              media: '(max-width: 600px)'
            }
          ], [
            data.placeholder.childImageSharp.fluid,
            {
              ...data.placeholder.childImageSharp.fluid,
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
            data.placeholder.childImageSharp.fluid,
            data.placeholder.childImageSharp.fluid,
            data.placeholder.childImageSharp.fluid
          ]}
        />
        <ImageCta
          image={data.placeholder.childImageSharp.fluid}
          title='Give the gift of art'
          cta={{
            title: 'Bespoke originals gift experience',
            blurb: 'This luxury offering is ideal for those who have been looking to find the perfect original artwork to bring their home or office space together. One of a kind art also makes for a sumptuous gift, it is a wonderful way to treat someone special to a carefully refined favour.',
            cta: 'Find out more',
            link: '/lets-work-together/gifting-experience'
          }}
          bgcolor={pastelPink}
        />
        <CarouselCtaRight
          title="Let's work together"
          cta={{
            title: 'Commercial commissions',
            blurb: "Enhance your story telling with custom illustrations designed to help commutate your brand’s identity, products/services and core values. Drop me a message and we can talk about all the options and ways illustration can help you give the personal touch you're looking for.",
            cta: 'Find out more',
            link: '/lets-work-together/commercial-commissions'
          }}
          images={[
            data.placeholder.childImageSharp.fluid,
            data.placeholder.childImageSharp.fluid,
            data.placeholder.childImageSharp.fluid
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
              image: data.placeholder.childImageSharp.fluid,
              alt: ''
            },
            {
              image: data.placeholder.childImageSharp.fluid,
              alt: ''
            },
            {
              image: data.placeholder.childImageSharp.fluid,
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
