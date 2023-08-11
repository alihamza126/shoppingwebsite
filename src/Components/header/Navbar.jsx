import { CaretDown, FolderSimpleUser, HouseSimple, Package, Phone, ShoppingBag, User } from 'phosphor-react'
import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/icons/icons8_Menu_32.png'
import closeIcon from '../../assets/icons/icons8_Close_32.png'
import { cref } from '../SlideSection/HomeCategory';
import { useEffect } from 'react';
import { createRef } from 'react';





const Navbar = () => {

  const togref = createRef()

  const reff = useRef(cref)
  const [mobile, setmobile] = useState(false)
  const [catmobile, catsetmobile] = useState(true)
  // -----Category Reff Handel ------
  const handleCategory = () => {
    catsetmobile(!catmobile);
    
  }
  const mobileDevice = (res) => {
    setmobile(res)
    togref.current.classList.toggle('mobilenav');
    reff.current.current.classList.toggle('c-box-visible');
  }
  useEffect(() => {
    reff.current.current.classList.toggle('c-box-visible');
    
  },[handleCategory])
  //   -------------------







  return (
    <div className="navbar">
      {/* <CatProvider props={cmobile}/> */}
      <div className="n-left" onClick={handleCategory}>
        <span><img src={require('../../assets/icons/caterory_32.png')} alt="" /></span>
        <h1 >Catergories <span><CaretDown /></span></h1>
      </div>
      <div className="n-right">
        <nav className="nav" ref={togref}>
          <ul>
            <li>
              <Link>Homes <span><HouseSimple /></span></Link>
            </li>
            <li>
              <Link>Pages <span><Package /></span></Link>
            </li>
            <li>
              <Link>User Account <span><User /></span></Link>
            </li>
            <li>
              <Link>Vendor Accounts <span><FolderSimpleUser /> </span></Link>
            </li>
            <li>
              <Link>Track My Order <span><ShoppingBag /></span></Link>
            </li>
            <li>
              <Link>Contact <span><Phone /> </span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <button  className="toggle-icon" onClick={() => { mobileDevice(!mobile) }}>{
        mobile ? <span><img src={closeIcon} /></span> : <span><img src={menuIcon} /></span>
      }</button>

    </div>
  )
}




export default Navbar
