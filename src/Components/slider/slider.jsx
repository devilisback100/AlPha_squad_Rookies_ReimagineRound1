import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './slider.css'
function SliderBox({Image_src}) {
    return (
        <>
            <div className='slider_box'>
                <img className='slider_image' alt='slider_image' src={Image_src} />
            </div>
        </>
    );
}
function Slider() {
    const slider_data = [
        "https://www.boat-lifestyle.com/cdn/shop/files/Mob-Banner-Summer-2_600x.jpg?v=1717740427",
        "//www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_3_Banner_MOB_1_30a705b9-e3f7-45eb-8fb9-5b0122fef0cd_600x.jpg?v=1717670738",
        "//www.boat-lifestyle.com/cdn/shop/files/B-MOBILE_600x.jpg?v=1717827763",
        "//www.boat-lifestyle.com/cdn/shop/files/RS_Banner_MOB_1_600x.jpg?v=1706770352"]
    const sliderPartRef = React.useRef(null);

    const scrollLeft = () => {
        if (sliderPartRef.current) {
            sliderPartRef.current.scrollLeft -= sliderPartRef.current.offsetWidth;
        }
    }

    const scrollRight = () => {
        if (sliderPartRef.current) {
            sliderPartRef.current.scrollLeft += sliderPartRef.current.offsetWidth;
        }
    }

    return (
        
        <div className='slider_main'>
            <div className='Slider_Button' style={{ left: "10px" }}>
                <IoIosArrowBack onClick={scrollLeft}  />

            </div>
            <div className='slider_part' ref={sliderPartRef}>
                {slider_data.map((data, i) => {
                    return (
                        <SliderBox Image_src={data} key={i} />
                    )
                })}
            </div>
            <div className='Slider_Button' style={{ right: "10px" }}>
            <IoIosArrowForward onClick={scrollRight}  />
            </div>

        </div>
    )
}

export default Slider
