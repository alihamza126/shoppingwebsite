import React from 'react'
import HomeCategory, { CatProvider } from '../SlideSection/HomeCategory'
import HomeSlide from '../SlideSection/HomeSlide'
import '../SlideSection/SlideSection.css';
import Flashsale from '../flashsale/Flashsale';
import Topbar from '../topbar/Topbar';
import Head from '../header/Head';
import Newarrival from '../newarrival/Newarrival';
import Featuremenu from '../featureMenus/Featuremenu';



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
      {/* <Newarrival/> */}
      <Featuremenu/>
    </>
  )
}

export default Pages