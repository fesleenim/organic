import React from 'react'
import Logo from '../../assets/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.scss"

const Footer = () => {
  return (
    <>
    <div className='container'>
      <div className='card'>
        <div className='card_left'>
          <h1 className='card_h1'>Contact Us</h1>
          <div className='card_item'>
            <h2 className='card_h2'>Email</h2>
            <p className='card_p'> needhelp@organick.com</p>
          </div>
          <div className='card_item'>
            <h2 className='card_h2'>Phone</h2>
            <p className='card_p'>123 (1254) 1452</p>
          </div>
          <div className='card_item'>
            <h2 className='card_h2'>Address</h2>
            <p className='card_p'>88 Road, Brooklyn Street, USA</p>
          </div>
        </div>
        <div className='card_main'>
          <img src={Logo} alt="" />
          <p className='card_p'>We are a popular and farming company aspiring to be a leader in the Organic food industry.</p>
          <div className='card_btm'>
            <FacebookIcon className='icon1' />
            <TwitterIcon className='icon' />
            <PinterestIcon className='icon' />
            <InstagramIcon className='icon' />
          </div>
        </div>
        <div className='card_right'>
          <h1 className='card_h1'>Utility Pages</h1>
          <p className='card_p'>Style Guide</p>
          <p className='card_p'>404 Not Found</p>
          <p className='card_p'>Password Protected</p>
          <p className='card_p'>Licences</p>
          <p className='card_p'>Changelog</p>
        </div>
      </div>
    </div>
    <div className='section_footer'>
     <hr  className='hr'/>
     <p className='card_p'>Copyright © Organick | Designed by VictorFlow - Powered by Webflow</p>
    </div>
    </>
  )
}

export default Footer