import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyles, SiteHeader, BodyWrapper } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = () => {
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
        <title>Contact | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Contact, Vicki Louise Ward - fashion, beauty &amp; lifestyle illustrator' />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <BodyWrapper>
        <div />
      </BodyWrapper>
    </>
  )
}
export default Page
