import { Chat, Info, MessengerLogo, PhoneCall, Question } from 'phosphor-react'
import React from 'react'
import pak from '../../assets/icons/pakistan.ico'
import './topbar.css'

const Topbar = () => {
  return (
   <div className="topbar">
            <div className="t-left">
                <div className="t-contact">
                    <PhoneCall/>
                    <a href="tel:+923037828419">+923037828419</a>
                </div>
                <div className="t-contact">
                    <Chat/>
                <a href="email:alihamzageo75@gmail.com">alihamzageo75@gmail.com</a>
                </div>
            </div>
            <div className="t-right">
                <ul>
                    <li>FAQ's <Info/> </li>
                    <li>Need Help <Question/></li>
                    <li>EN </li>
                </ul>
                <span><img src={pak} /></span>
            </div>
   </div>
  )
}

export default Topbar