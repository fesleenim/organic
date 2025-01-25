import React from 'react'
import Avatar from '../../assets/comment/photo.svg'
import StarRateIcon from '@mui/icons-material/StarRate';
import './comment.scss'

const Comment = () => {
  return (
    <div className='section_comment'>
      <p className='card_p'>Testimonial</p>
      <strong className='card_strong'>What Our Customer Saying?</strong>
      <img className='card_img' src={Avatar} alt="" />
      <div className='box_bottom_right'>
        <StarRateIcon className='box_start' />
        <StarRateIcon className='box_start' />
        <StarRateIcon className='box_start' />
        <StarRateIcon className='box_start' />
        <StarRateIcon className='box_start' />
      </div>
      <div className='card_item'>
        <small className='card_small'>The quality of organic produce is extremely high, the service is second to none and the taste of the food
          takes me back to my childhood when we were growing our own.</small>
      </div>
      <strong className='card_strong'>Sara Taylor</strong>
      <small className='card_small'>Consumer</small>
      <div className='card_bot'>
        <hr className='card_hr' />
        <div className='card_bot_item'>
          <div className='card_bot_item1'>
            <strong className='card_strong'>100%</strong>
            <p className='card_pp'>Organic Fresh</p>
          </div>
          <div className='card_bot_item1'>
            <strong className='card_strong'>285</strong>
            <p className='card_pp'>Active Product</p>
          </div>
          <div className='card_bot_item1'>
            <strong className='card_strong'>350+</strong>
            <p className='card_pp'>Organic Orchads</p>
          </div>
          <div className='card_bot_item1'>
            <strong className='card_strong'>25+</strong>
            <p className='card_pp'>Years of Farming</p>
          </div>``
        </div>
      </div>
    </div>
  )
}

export default Comment