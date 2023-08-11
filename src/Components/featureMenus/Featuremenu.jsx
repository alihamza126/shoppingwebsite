import React from 'react'
import './featuremenu.css'
import banner1 from '../../assets/banner/banner1.jpg'

const Featuremenu = () => {
  return (
    <div className="feature-menu">
                <div className="f-container">
                            <div className="f-banner-1">
                                    <div className="f-banner-text">
                                        <p>Feature Products</p>
                                    </div>
                                    <div className="f-banner-img">
                                        <img src={banner1}/>
                                    </div>
                            </div>

                            <div className="f-products">
                                
                            </div>
                </div>
    </div>
  )
}

export default Featuremenu