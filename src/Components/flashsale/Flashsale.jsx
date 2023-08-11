import React, { useContext } from 'react';
import './flashsale.css'
import flashdeal from '../../assets/icons/flashdeal.png'
import star from '../../assets/icons/star_16.png';
import cartimg from '../../assets/icons/cartimg_32.png';
import { flashsaleproducts } from '../../Products-Data/Flashsale';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { cartContext } from '../Context/CartContext';




const Flashsale = () => {
    const {addtoCart,removetoCart,cart,totallcarts}=useContext(cartContext);
    const cartItem=(e)=>{
        addtoCart(e)
    }
  
    return (
        <div className="flashsale">
            <div className="f-heading bright blur">
                <h3><img src={flashdeal} /> Flash Deals</h3>
            </div>
            <div className="f-slider-container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={(window.innerWidth<500)?2:5}
                    spaceBetween={9}
                    autoplay={{
                        delay: 1000,
                        pauseOnMouseEnter:true
                    }}
                    navigation
                >
                    <div className="f-products">
                        {
                            flashsaleproducts.map((ele, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className="f-box overflow">
                                            <div className="off-box">
                                                <span className='bright '>{ele.off}% Off<img src={flashdeal} /></span>
                                            </div>
                                            <div className="img-box">
                                                <img className='scale' src={ele.img} />
                                            </div>
                                            <div className="name-box">
                                                <p>{ele.name}</p>
                                            </div>
                                            <div className="star-box">
                                                <span>Rating :</span>
                                                <span>
                                                     {ele.rating==0&& <p>Not rating yet</p>}
                                                     {ele.rating>=1&& <img src={star}/>}
                                                     {ele.rating>=2&& <img src={star}/>}
                                                     {ele.rating>=3&& <img src={star}/>}
                                                     {ele.rating>=4&& <img src={star}/>}
                                                     {ele.rating>=5&& <img src={star}/>}
                                                </span>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="price-box">Price : {ele.price}</div>
                                                <div className="cart-box">
                                                    <button onClick={()=>{cartItem(ele.id)}} className='bright btnrotate'><img src={cartimg} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Flashsale