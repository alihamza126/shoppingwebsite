import React from 'react'
import HomeCategory, { CatProvider } from '../SlideSection/HomeCategory'
import HomeSlide from '../SlideSection/HomeSlide'
import '../SlideSection/SlideSection.css';
import { caterogyIcons } from '../../Products-Data/Category';
import Flashsale from '../flashsale/Flashsale';
import Topbar from '../topbar/Topbar';
import Head from '../header/Head';



const Pages = () => {
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <Head />
      </div>
      <CatProvider>
        <div className="home-slide-section">
          <HomeCategory />
          <HomeSlide />
        </div>
      </CatProvider>
      <Flashsale />
    </>
  )
}

export default Pages