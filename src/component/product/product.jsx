import React from 'react'
import Img1 from '../../assets/product/product1.png' 
import Img2 from '../../assets/product/product2.png' 
import Img3 from '../../assets/product/product3.png' 
import Img4 from '../../assets/product/product4.png' 
import Img5 from '../../assets/product/product5.png' 
import Img6 from '../../assets/product/product6.png' 
import Img7 from '../../assets/product/product7.png' 
import Img8 from '../../assets/product/product8.png' 
import StarRateIcon from '@mui/icons-material/StarRate';
import './product.scss'

const Product = () => {
  return (
    <div className='container'>
      <div className='box_topp'>
        <p className="card_rightp">Organic</p>
        <h1 className="card_righth1">Our Products</h1>
      </div>
      <div className='box'>
        <div className='box_item'>
          <div className='box_item_top'>
            Vegetable
          </div>
          <img className='box_img' src={Img1} alt="" />
          <p className='box_p'>Calabrese Broccoli</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$13.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Fresh
          </div>
          <img className='box_img' src={Img2} alt="" />
          <p className='box_p'>Fresh Banana Fruites</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$14.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Millets
          </div>
          <img className='box_img' src={Img3} alt="" />
          <p className='box_p'>White Nuts</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$15.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Tomato
          </div>
          <img className='box_img' src={Img4} alt="" />
          <p className='box_p'>Calabrese Broccoli</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$17.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Health
          </div>
          <img className='box_img' src={Img5} alt="" />
          <p className='box_p'>Calabrese Broccoli</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$13.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Nuts
          </div>
          <img className='box_img' src={Img6} alt="" />
          <p className='box_p'>Brown Hazelnut</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$12.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
          Fresh
          </div>
          <img className='box_img' src={Img7} alt="" />
          <p className='box_p'>Eggs</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$13.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
        <div className='box_item'>
          <div className='box_item_top'>
            Vegetable
          </div>
          <img className='box_img' src={Img8} alt="" />
          <p className='box_p'>Zelco Suji Elaichi Rusk</p>
          <hr className="box_hr" />
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <p className='box_bottom_p'>$20.00</p>
              <strong className='box_bottom_strong'>$15.00</strong>
            </div>
            <div className='box_bottom_right'>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
              <StarRateIcon className='box_start'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product