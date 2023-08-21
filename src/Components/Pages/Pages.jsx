import React from 'react'
import HomeCategory, { CatProvider } from '../SlideSection/HomeCategory'
import HomeSlide from '../SlideSection/HomeSlide'
import '../SlideSection/SlideSection.css';
import Flashsale from '../flashsale/Flashsale';
import Topbar from '../topbar/Topbar';
import Featuremenu from '../featureMenus/Featuremenu';
import Topcatagory from '../topcatagory/Topcatagory';
import Searchbar from '../header/Searchbar';
import Navbar from '../header/Navbar';
import '../header/head.css'
import Newarrival from '../newarrival/Newarrival';


const Pages = () => {
  return (
    <>
      <Topbar/>
      <div className="sticky-comp">
        <Searchbar/>
      </div>
      <Navbar/>
      <CatProvider>
        <div className="home-slide-section">
          <HomeCategory />
          <HomeSlide />
        </div>
      </CatProvider>
      <Flashsale />
      <Featuremenu/>
      <Topcatagory/>
      <Newarrival/>
    </>
  )
}

export default Pages