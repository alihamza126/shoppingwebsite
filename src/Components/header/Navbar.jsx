import { CaretDown, FolderSimpleUser, HouseSimple, Package, Phone, ShoppingBag, User } from 'phosphor-react'
import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/icons/icons8_Menu_32.png'
import closeIcon from '../../assets/icons/icons8_Close_32.png'
import { catContext } from '../Context/categoryContext';


const Navbar = () => {
  const reff = useRef()
  const [mobile, setmobile] = useState(false)
  // -----Category context------
  const mCategory = useContext(catContext);
  const handleCategory = () => {
    mCategory.dispatch({type:'catmobile'});
  }

  //   -------------------





  const mobileDevice = (res) => {
    setmobile(res)
    reff.current.classList.toggle('mobilenav')
  }

  return (
    <div className="navbar">
      <div className="n-left" >
        <span><img src={require('../../assets/icons/caterory_32.png')} alt="" /></span>
        <h1 onClick={handleCategory}>Catergories <span><CaretDown /></span></h1>
      </div>
      <div className="n-right">
        <nav className="nav" ref={reff}>
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
      <button className="toggle-icon" onClick={() => { mobileDevice(!mobile) }}>{
        mobile ? <span><img src={closeIcon} /></span> : <span><img src={menuIcon} /></span>
      }</button>
    </div>
  )
}

export default Navbar