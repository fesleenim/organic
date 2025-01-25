import React from 'react'
import Header from './component/header/header'
import About from './component/about/about'
import Hero from './component/hero/hero'
import Product from './component/product/product'
import Comment from './component/comment/comment'
import Organic from './component/organic/Organic'
import News from './component/news/news'
import Footer from './component/footer/footer'
import Offer from './component/offer/offer'

const App = () => {

  return (
   <>
   <Header/>
   <Hero/>
   <About/>
   <Product/>
   <Comment/>
   <Offer/>
   <Organic/>
   <News/>
   <Footer/>
   </>
  )
}

export default App