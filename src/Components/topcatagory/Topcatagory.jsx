import React from 'react';
import './topcatagory.css'
import TopItems from './TopItems';
import { topcatagory } from '../../Products-Data/topcatagory';
import topcat from '../../assets/icons/topcat_32.png'

const Topcatagory = () => {
  return (
    <>
      <div className="tc-heading f-heading">
      <h3 className="bright blur"><img src={topcat}/> Top catagory</h3>
      </div>

      <div className="t-catagory">
        <div className="tc-container">
          {
            topcatagory.map((item, index) => {
              return <TopItems data={item} key={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Topcatagory