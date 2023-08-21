import React from 'react'
import NewArrivalGenerator from './NewArrivalGenerator'
import newicon from '../../assets/icons/new_32.png';
import './newarrival.css'
import ar1 from '../../assets/arival items/menu_bg1.jpg'
import ar2 from '../../assets/arival items/menu_bg2.jpg'
import ar3 from '../../assets/arival items/menu_bg3.jpg'
import ar4 from '../../assets/arival items/menu_bg4.jpg'
import ar5 from '../../assets/arival items/menu_bg5.jpg'

const Newarrival = () => {
  return (
    <div className="new-arrival">
      <div className="f-heading bright blur">
        <h3> <img src={newicon} />New Arrivals</h3>
      </div>

      <div className="arrival-item-box">
        <div className="d-grid">
          <div className="ar-item1 ar-item">
            <img src={ar1} />
            <span>Beauty Items</span>
          </div>
          <div className="ar-item2 ar-item">
            <img src={ar2} />
            <span>Fashion Stuff</span>
          </div>
          <div className="ar-item3 ar-item">
            <img src={ar5} />
            <span>Perfumes</span>
          </div>
          <div className="ar-item4 ar-item">
            <img src={ar3} />
            <span>Laptops</span>
          </div>
          <div className="ar-item5 ar-item">
            <img src={ar4} />
            <span>Rest Bed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newarrival