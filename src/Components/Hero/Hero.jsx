import React from 'react'
import Images from '../../assets/ImageHero.png'
import EastIcon from '@mui/icons-material/East';
import "./hero.scss"


const Hero = () => {
  return (
    <>
    <div className='section'>
      <div className='container'>
        <div className='hero_card'>
          <div className='hero_card_left'>
            <p className='card_p'>100% Natural Food</p>
            <h className="card_h1">Choose the best healthier way of life</h>
            <button className='card_button'>Explore Now <EastIcon className='Icon' /></button>
          </div>
          <div className='hero_card_right'>
            <img className='hero_img' src={Images} alt="" />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero