import React, { useContext, useEffect } from 'react'
import { caterogyIcons } from '../../Products-Data/Category'
import './SlideSection.css'
import { catContext } from '../Context/categoryContext'

const HomeCategory = () => {
    const category=useContext(catContext)
    useEffect(()=>{
        console.log(category.state)
    },[catego])
    return (
        <div className="category">
            <div className="c-box" style={}>
                <ul>
                    {caterogyIcons.map((ele,index) => {
                        return(
                         <li key={index}>
                         <img src={ele.img}/>
                         <p>{ele.name}</p>
                         </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomeCategory