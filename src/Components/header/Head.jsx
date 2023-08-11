import React from 'react'
import './head.css'
import Searchbar from './Searchbar'
import Navbar from './Navbar'
import { CatProvider } from '../Context/categoryContext'

const Head = () => {
    return (
        <>
           <div className="headdbox p-sticky">
                <Searchbar />
                <Navbar />
            </div>
        
        </>
    )
}

export default Head