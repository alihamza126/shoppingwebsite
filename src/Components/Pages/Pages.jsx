import React from 'react'
import HomeCategory from '../SlideSection/HomeCategory'
import HomeSlide from '../SlideSection/HomeSlide'
import '../SlideSection/SlideSection.css';
import { caterogyIcons } from '../../Products-Data/Category';
import { CatProvider } from '../Context/categoryContext';

const Pages = () => {
    return (
        <>
           <CatProvider>
           <div className="home-slide-section">
                <HomeCategory />
                <HomeSlide />
            </div>
           </CatProvider>
        </>
    )
}

export default Pages