import { CaretDown, CornersOut, FolderSimpleUser, HouseSimple, NavigationArrow, Package, Phone, ShoppingBag, User, UserFocus} from 'phosphor-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/icons/icons8_Menu_32.png'
import closeIcon from '../../assets/icons/icons8_Close_32.png'
import MobileNav from './MobileNav.jsx/MobileNav';

const Navbar = () => {
 const [mobile,setmobile]= useState(false)
  const mobileDevice=(res)=>{
    setmobile(res)
  }
  return (
    <div className="navbar">
        <div className="n-left" >
          <span><img src={require('../../assets/icons/caterory_32.png')} alt="" /></span>
          <h1>Catergories <span><CaretDown/></span></h1>
        </div>
        <div className="n-right">
          <nav className="nav">
                <ul>
                  <li>
                    <Link>Homes <span><HouseSimple/></span></Link>
                  </li>
                  <li>
                    <Link>Pages <span><Package/></span></Link>
                  </li>
                  <li>
                    <Link>User Account <span><User/></span></Link>
                  </li>
                  <li>
                    <Link>Vendor Accounts <span><FolderSimpleUser/> </span></Link>
                  </li>
                  <li>
                    <Link>Track My Order <span><ShoppingBag/></span></Link>
                  </li>
                  <li>
                    <Link>Contact <span><Phone/> </span></Link>
                  </li>
                </ul>
          </nav>
        </div>
          <button className="toggle-icon" onClick={()=>{mobileDevice(!mobile)}}>{
            mobile?<span><img src={closeIcon}/></span>:<span><img src={menuIcon}/></span>
          }</button>
          {mobile&&<MobileNav/>}
    </div>
  )
}

export default Navbar