import React from 'react'
import './about.scss'
import ImageLeft from "../../assets/about/freash.jpg"
import ImageRight from "../../assets/about/fructs.png"
import Images from "../../assets/about/imgs.png"
import Icon1 from "../../assets/about/icon1.svg"
import Icon2 from "../../assets/about/icon2.svg"
import EastIcon from '@mui/icons-material/East';

function About() {
  return (
    <>
      <div className='container'>
        <div className='card_top'>
          <div className='card_top_left'>
            <p className="card_p">Natural!!</p>
            <h1 className="card_h1">Get Garden <br /> Fresh Fruits</h1>
            <img className='card_img' src={ImageLeft} alt="" />
          </div>
          <div className='card_top_right'>
            <p className="card_leftp">Offer!!</p>
            <h1 className="card_lefth1">Get 10% off <br />on Vegetables</h1>
            <img className='card_img' src={ImageRight} alt="" />
          </div>
        </div>
      </div>
      <div className='sectionn'>
        <div className='container'>
          <div className='card_bottom'>
            <div className='card_botom_left'>
              <img src={Images} alt="" className='card_bottomimg' />
            </div>
            <div className='card_botom_right'>
              <p className="card_rightp">About Us</p>
              <h1 className="card_righth1">We Believe in Organic
                <br />Foods For Strong Health</h1>
              <small className='cards_rightsmall'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</small>
              <div className='card_bottom_item'>
                <img src={Icon1} alt="" />
                <div className='card_bottom_right2'>
                  <strong className='card_bottom_strong'>Organic Foods Only</strong>
                  <small className='cards_rightsmall'>The Product that you ordered will be verified that we have or not if have we will start to move on with the next step. About Info Icon Quality Standards</small>
                </div>
              </div>
              <div className='card_bottom_item'>
                <img src={Icon2} alt="" />
                <div className='card_bottom_right2'>
                  <strong className='card_bottom_strong'>Quality Standards</strong>
                  <small className='cards_rightsmall'>Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.</small>
                </div>
              </div>
              <button className='card_button'>Shop Now <EastIcon className='Icon' /></button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About