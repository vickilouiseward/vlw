import React from 'react'
import { graphql } from 'gatsby'
import {
  // FiveLogos,
  FourItemCarousel,
  GlobalStyles,
  Header,
  ImageCta,
  Newsletter,
  ThreeImagesTextRight,
  ThreeQuotes,
  ThreeCards,
  TwoCtasCarousel
} from '../components'

const Home = ({ data }) => (
  <>
    <GlobalStyles />
    <Header />
    <TwoCtasCarousel
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
    <FourItemCarousel
      title='Press'
      items={[{
        image: data.press1.childImageSharp.fluid,
        tab: {
          icon: data.pressLogo1.childImageSharp.fixed,
          title: 'Currently exhibiting at',
          text:
            'Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus.'
        }
      }, {
        image: data.press1.childImageSharp.fluid,
        tab: {
          icon: data.pressLogo2.childImageSharp.fixed,
          title: 'Finalist S/S Awards 2020',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        }
      }, {
        image: data.press3.childImageSharp.fluid,
        tab: {
          icon: data.pressLogo3.childImageSharp.fixed,
          title: 'Previous exhibitions',
          text:
            'Consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non ligula porta malesuada. Donec tincidunt purus ac lobortis varius. Integer massa neque, posuere sed mollis ut, placerat eu orci.'
        }
      }, {
        image: data.press4.childImageSharp.fluid,
        tab: {
          icon: data.pressLogo4.childImageSharp.fixed,
          title: '100 anniversary winner',
          text:
            'Ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Cras vel dolor non.'
        }
      }]}
    />
    <ThreeCards
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
    <ImageCta
      image={[
        data.portfolioMainLg.childImageSharp.fluid,
        {
          ...data.portfolioMainSm.childImageSharp.fluid,
          media: '(max-width: 600px)'
        }
      ]}
      title='Portfolio'
      cta={{
        title: 'Portfolio',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.',
        cta: 'Explore',
        link: '/'
      }}
    />
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
  </>
)

export const query = graphql`
  query {
    lwt1: file(relativePath: { eq: "lets_work_together_1.jpg" }) {
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
    lwt5: file(relativePath: { eq: "lets_work_together_5.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    press1: file(relativePath: { eq: "press_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press2: file(relativePath: { eq: "press_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press3: file(relativePath: { eq: "press_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    press4: file(relativePath: { eq: "press_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pressLogo1: file(relativePath: { eq: "acid_gallery_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo2: file(relativePath: { eq: "fida_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo3: file(relativePath: { eq: "cluster_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    pressLogo4: file(relativePath: { eq: "stylist_logo.png" }) {
      childImageSharp {
        fixed(height: 72) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    otr1: file(relativePath: { eq: "prints.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr2: file(relativePath: { eq: "limited_edition.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    otr3: file(relativePath: { eq: "original_artwork.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioMainLg: file(relativePath: { eq: "portfolio.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portfolioMainSm: file(relativePath: { eq: "lets_work_together_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    # portfolio1: file(relativePath: { eq: "skin_ceuticals.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio2: file(relativePath: { eq: "nap.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio3: file(relativePath: { eq: "by_sarah.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio4: file(relativePath: { eq: "perricone_md.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    # portfolio5: file(relativePath: { eq: "loreal.png" }) {
    #   childImageSharp {
    #     fixed(height: 72) {
    #       ...GatsbyImageSharpFixed_withWebp_noBase64
    #     }
    #   }
    # }
    ms1: file(relativePath: { eq: "my_story_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms2: file(relativePath: { eq: "my_story_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ms3: file(relativePath: { eq: "my_story_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Home
