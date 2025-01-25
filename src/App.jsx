import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Product from './Components/Product/Product'
// import Comment from './Components/Comment/Comment'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'
import Offer from './Components/Offer/Offer'
import Email from './Components/Email/Email'
const App = () => {

  return (
   <>
   <Header/>
   <Hero/>
   <About/>
   <Product/>
   {/* <Comment/> */}
   <Offer/>
   <News/>
   <Email/>
   <Footer/>
   </>
  )
}

export default App