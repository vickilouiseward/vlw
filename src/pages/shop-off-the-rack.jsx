import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyles, SiteHeader, ComingSoon } from '../components'
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
        <title>Coming Soon | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Coming soon, Vicki Louise Ward - fashion, beauty &amp; lifestyle illustrator' />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <ComingSoon />
    </>
  )
}
export default Page
