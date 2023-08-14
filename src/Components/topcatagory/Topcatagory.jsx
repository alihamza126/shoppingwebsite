import React from 'react';
import './topcatagory.css'
import TopItems from './TopItems';
import { topcatagory } from '../../Products-Data/topcatagory';


const Topcatagory = () => {
  return (
    <div className="t-catagory">
            <div className="tc-container">
                    {
                       topcatagory.map((item,index)=>{
                          return <TopItems data={item} key={index}/>
                       })
                    }
            </div>
    </div>
  )
}

export default Topcatagory