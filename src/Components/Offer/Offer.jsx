import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Img1 from '../../assets/product/product1.png'
import Img2 from '../../assets/product/product2.png'
import Img3 from '../../assets/product/product3.png'
import Img4 from '../../assets/product/product4.png' 
import StarRateIcon from '@mui/icons-material/StarRate';
import './offer.scss'

const Offer = () => {
    return (
        <div className='section_offer'>
            <div className='container'>
                <div className='box_top'>
                    <div className='box_top_left'>
                        <p className='box_p'>Offer Products</p>
                        <strong className='box_strong'>We Offer Organic for You</strong>
                    </div>
                    <button className='card_button'>View All Product <EastIcon className='Icon' /></button>
                </div>
                <div className="box_bottom">
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
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
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
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
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
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
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
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                                <StarRateIcon className='box_start' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer