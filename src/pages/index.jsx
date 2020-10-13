import React from 'react'
import { graphql } from 'gatsby'
import {
  FourLogos,
  FourTextTabCarousel,
  GlobalStyles,
  Header,
  ImageTitle,
  ThreeImagesTextRight,
  ThreeQuotes,
  ThreeShopCards,
  TwoCtasCarouselRight
} from '../components'

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
      image={data.lwt1.childImageSharp.fluid}
    />
    <ThreeQuotes
      title='Testimonials'
      quotes={[
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet.',
          cite: 'Emily'
        },
        {
          text:
            'Cras vel dolor non ligula porta malesuada. Donec tincidunt purus ac lobortis varimassa neque, posuere sed mollis ut, placerat eu or unt purus ac lobortis...',
          cite: 'Racheal'
        },
        {
          text:
            'Varius as vel dolor non ligula porta malesuada. Donec tincidunt purus ac lobortis varius. Integer massa neque, pas vel dolor non liosuere sed mollis ut, placerat eu orci.',
          cite: 'Claudia'
        }
      ]}
    />
    <FourTextTabCarousel
      image={data.press1.childImageSharp.fluid}
      title='Press'
      textTabs={[
        {
          icon: data.pressLogo1.childImageSharp.fluid,
          title: 'Currently exhibiting at',
          text:
            'Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus.'
        },
        {
          icon: data.pressLogo2.childImageSharp.fluid,
          title: 'Finalist S/S Awards 2020',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        },
        {
          icon: data.pressLogo3.childImageSharp.fluid,
          title: 'Previous exhibitions',
          text:
            'Consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        },
        {
          icon: data.pressLogo4.childImageSharp.fluid,
          title: '100 anniversary winner',
          text:
            'Ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non.'
        }
      ]}
    />
    <ThreeShopCards
      title='Off the rack'
      cards={[
        {
          image: data.otr1.childImageSharp.fluid,
          title: 'Prints',
          text: 'From £15'
        },
        {
          image: data.otr2.childImageSharp.fluid,
          title: 'Limited Editions',
          text: 'From £60'
        },
        {
          image: data.otr3.childImageSharp.fluid,
          title: 'Original Artworks',
          text: 'From £150'
        }
      ]}
    />
    <ImageTitle
      image={data.portfolioMain.childImageSharp.fluid}
      title='Portfolio'
    />
    <FourLogos
      logos={[
        {
          image: data.portfolio1.childImageSharp.fixed,
          title: ''
        },
        {
          image: data.portfolio2.childImageSharp.fixed,
          title: ''
        },
        {
          image: data.portfolio3.childImageSharp.fixed,
          title: ''
        },
        {
          image: data.portfolio4.childImageSharp.fixed,
          title: ''
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
      copy={[
        'Vicki Louise Ward is a London based fashion and lifestyle illustrator. She studied at the University for the Creative Arts before embarking on her design and illustration career. She has worked with brands including L’Oréal, SkinCeuticals, Stylist and NET-A-PORTER.',
        'She uses a mixture of minimalist and detailed lines alongside abstract watercolour to describe the beauty and elegance of the world around her. She is a fashion obsessive and regularly attends shows such as Alice Temperley, Vivienne Westwood, Erdem and Vin+Omi; later realising her experiences in delicate originals.',
        'Last year Vicki exhibited as part of Cluster Illustration in London’s Brick Lane and is now making her international debut as part of Fashion Illustration at Acid Gallery which include some of her runway works.'
      ]}
    />
  </>
)

export const query = graphql`
  query {
    lwt1: file(relativePath: { eq: "lets_work_together_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    press1: file(relativePath: { eq: "press_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pressLogo1: file(relativePath: { eq: "acid_gallery_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    pressLogo2: file(relativePath: { eq: "fida_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    pressLogo3: file(relativePath: { eq: "cluster_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    pressLogo4: file(relativePath: { eq: "stylist_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr1: file(relativePath: { eq: "prints.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr2: file(relativePath: { eq: "limited_edition.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr3: file(relativePath: { eq: "original_artwork.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioMain: file(relativePath: { eq: "portfolio.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolio1: file(relativePath: { eq: "skin_ceuticals.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    portfolio2: file(relativePath: { eq: "nap.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    portfolio3: file(relativePath: { eq: "perricone_md.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    portfolio4: file(relativePath: { eq: "loreal.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    ms1: file(relativePath: { eq: "my_story_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms2: file(relativePath: { eq: "my_story_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms3: file(relativePath: { eq: "my_story_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Home
