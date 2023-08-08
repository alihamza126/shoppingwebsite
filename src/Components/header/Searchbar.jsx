import { ChartBar, FileSearch, ShoppingCartSimple, User } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';


const Searchbar = () => {
  return (
   <div className="searchbar">
            <div className="s-left">
                <div className="logo">
                    <h1>Ali's Cart</h1>
                </div>
            </div>
            <div className="s-center">
                <div className="searchbox">
                    <span className="search-icon">
                       <img src={require('../../assets/icons/search_32.png')} alt="" />
                    </span>
                    <span className="search-input">
                        <input type="text" placeholder='Search and hot enter...' />
                    </span>
                    <span className="seacrh-text">All category</span>
                </div>
            </div>
            <div className="s-right">
                <div className="s-icon">
                  <Link to='/user'><span> <img src={require('../../assets/icons/icons8_user.ico')} alt="" /></span></Link>
                   <Link to='/cart'><span className='cart-absolute'>
                   <span>5</span>
                   <img src={require('../../assets/icons/icons8_shopping_cart.ico')} alt="" /></span></Link>
                </div>
            </div>
   </div>
  )
}

export default Searchbar