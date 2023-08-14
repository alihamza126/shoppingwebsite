import React from 'react';
import './topcatagory.css'

const TopItems = (props) => {
    const { name, sale, img1, img2, img3 } = props.data;
    return (
        <div className="tc-item">
            <span className='tc-name blur bright'>{name}asd</span>
            <span className='tc-sale blur bright'>{sale}</span>
            <div className="tc-img overflow scale">
                <img src={img1} />
            </div>
            <div className="tc-img overflow scale">
                <img src={img2} />
            </div>
            <div className="tc-img overflow scale">
                <img src={img3} />
            </div>
        </div>
    )
}

export default TopItems