import React from 'react'
import Header from './component/header/Header'
import About from './component/about/About'
import Hero from './component/hero/Hero'
import Product from './component/product/Product'
import Comment from './component/comment/Comment'
import News from './component/news/News'
import Footer from './component/footer/Footer'
import Offer from './component/offer/Offer'

const App = () => {

  return (
   <>
   <Header/>
   <Hero/>
   <About/>
   <Product/>
   <Comment/>
   <Offer/>
   <News/>
   <Footer/>
   </>
  )
}

export default App