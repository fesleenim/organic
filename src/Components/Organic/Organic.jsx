import React from 'react'
import './organic.scss'
import Photo from "../../assets/organic/photo.jpg"
import Img1 from "../../assets/organic/img1.png"
import Img2 from "../../assets/organic/img2.jpg"
import Img3 from "../../assets/organic/img3.png"

const Organic = () => {
  return (
    <>
      <div className='section_organic'>
        <img className='Img' src={Photo} alt="" />
        <div className='container'>
          <div className='box'>
            <p className='box_p'>Eco Friendly</p>
            <h1 className="box_h1">From our  Farm  <br /> to your Home.</h1>
            <strong className='box_strong'>Choose Your Products</strong>
            <small className='box_small'>In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.</small>
            <strong className='box_strong'>Farmers will produce it</strong>
            <small className='box_small'>The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.</small>
            <strong className='box_strong'>We Can Delivery too</strong>
            <small className='box_small'>If you are not comfortable going to the nearby market place we also will deliver your product to your doorstep.</small>
          </div>
        </div>
      </div>
      <div className='sectionss'>
      <div className="box_bottom">
          <div className="box_item">
            <img className='img' src={Img1} alt="" />
            <div className='box_itemm'>
              Organic Juice
            </div>
          </div>
          <div className="box_item">
            <img className='img'  src={Img2} alt="" />
            <div className='box_itemm'>
              Organic  Food
            </div>
          </div>
          <div className="box_item">
            <img className='img'  src={Img3} alt="" />
            <div className='box_itemm'>
              Nuts Cookis
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Organic