import React from 'react'
import EastIcon from '@mui/icons-material/East';
import './email.scss'

const Email = () => {
    return (
        <div className='Email_container'>
            <div className='Email_box'>
                <div className='Email_boxx'>
                    <p className='box_p'>Subscribe our <br /> Newsletter</p>
                    <div className='Email_box_left'>
                        <input className='input' type="text" placeholder='Your Email Address' />
                        <button className='card_button'>Subscribe <EastIcon className='Icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email