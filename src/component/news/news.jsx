import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Img1 from "../../assets/news/img1.png"
import Img2 from "../../assets/news/img2.png"
import PersonIcon from '@mui/icons-material/Person';
import './news.scss'

const News = () => {
  return (
    <div className='container'>
      <div className='box_top'>
        <div className='box_top_left'>
          <p className='box_p'>News</p>
          <strong className='box_strong'>Discover The recent content about organic products</strong>
        </div>
        <button className='card_button'>More News<EastIcon className='Icon' /></button>
      </div>
      <div className="box_btm">
        <div className="box_btm_item">
          <img className='image' src={Img1} alt="" />
          <div className='box_btm_items'>
            <div className='box_btm_items_top'>
              <PersonIcon className='icon' />
              <p className='box_btm_p'>Kristina Castle</p>
            </div>
            <strong className='box_strong'>The Benefits of Vitamin D & How to Get It</strong>
            <p className='box_btmm_p'>Organic farming is the only way that you still can experience the real world</p>
            <button className='box_button'>View More<EastIcon className='Icon' /></button>
          </div>
        </div>
        <div className="box_btm_item">
          <img className='image' src={Img2} alt="" />
          <div className='box_btm_items'>
            <div className='box_btm_items_top'>
              <PersonIcon className='icon' />
              <p className='box_btm_p'>Kristina Castle</p>
            </div>
            <strong className='box_strong'>The Benefits of Vitamin D & How to Get It</strong>
            <p className='box_btmm_p'>Organic farming is the only way that you still can experience the real world</p>
            <button className='box_button'>View More<EastIcon className='Icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News