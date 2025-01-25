import React from 'react'
import Logo from '../../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./header.scss"


const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='nav'>
        <img src={Logo} alt="" />
        <ul className="nav_ul">
          <li className="nav_li"><a className='nav_a' href="/">Home</a></li>
          <li className="nav_li"><a className='nav_a' href="/">About</a></li>
          <li className="nav_li"><a className='nav_a' href="/">Pages</a></li>
          <li className="nav_li"><a className='nav_a' href="/">Shop</a></li>
          <li className="nav_li"><a className='nav_a' href="/">Projects</a></li>
          <li className="nav_li"><a className='nav_a' href="/">News</a></li>
        </ul>
        <div className='nav_right'>
          <div className='nav_right_search'>
          <SearchIcon className='search'/>
          </div>
          <div className='nav_right_item'>
          <ShoppingCartIcon className='shopp'/>
          <p className='nav_p'>Cart(0)</p>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header