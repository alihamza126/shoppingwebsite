import React, { useContext, useEffect } from 'react'
import { caterogyIcons } from '../../Products-Data/Category'
import './SlideSection.css'
import { createContext } from 'react'
import { createRef } from 'react'
import Navbar from '../header/Navbar'
export const cContext = createContext()
export const cref =createRef()

const HomeCategory = () => {
    return (
        <div className="category" ref={cref}>
            <div className="c-box" >
                <ul>
                    {caterogyIcons.map((ele, index) => {
                        return (
                            <li key={index}>
                                <img src={ele.img} />
                                <p>{ele.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export const CatProvider = (props) => {
    return <cContext.Provider value={cref}>
      {props.children}
    </cContext.Provider>
}

export default HomeCategory