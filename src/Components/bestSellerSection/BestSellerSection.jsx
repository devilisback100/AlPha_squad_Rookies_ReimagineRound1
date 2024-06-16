import React, { useEffect, useRef } from 'react';
import './BestSellerSection.css';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




function BestSellerSectionBox({ source_link, poster_link, Product_name, Target_link }) {
  gsap.registerPlugin(ScrollTrigger);
  const videoElementRef = useRef(null);

  
  const handleMouseEnter = () => {
  if (videoElementRef.current) {
    const playPromise = videoElementRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Automatic playback started!
      }).catch(error => {
        // Auto-play was prevented
        console.log(error);
      });
    }
  }
};

const handleMouseLeave = () => {
  if (videoElementRef.current && !videoElementRef.current.paused) {
    videoElementRef.current.pause();
  }
};


  const handleClick = () => {
    window.location.href = Target_link;
  };

  return (
    <>
      <div className='BestSellerSection_box' onClick={handleClick}>
        <video muted poster={poster_link} className='video_element' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} ref={videoElementRef}>
          <source src={source_link} type="video/mp4" />
        </video>
        <div className='Product_name'>{Product_name}</div>
      </div>
    </>
  );
}

function BestSellerSection() {
  const BestSellerSection_data = [
    ["https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4", "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg", "Smartwatches", "https://www.boat-lifestyle.com/collections/smart-watches"],
    ["https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4", "https://www.boat-lifestyle.com/cdn/shop/files/quinn_9O6xvZXZ3kYLbUbtsnj4S.jpg", "Wireless Earbuds", "https://www.boat-lifestyle.com/collections/true-wireless-earbuds"],
    ["https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4", "https://www.boat-lifestyle.com/cdn/shop/files/quinn_KXwTUL2r91fh5uAHqSyIH.jpg", "Neckbands", "https://www.boat-lifestyle.com/collections/wireless-earphones"],
    ["https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4", "https://www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg", "Headphones", "https://www.boat-lifestyle.com/collections/rockerz-headphones"],
    ["https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4", "https://www.boat-lifestyle.com/cdn/shop/files/quinn_FY7dfyFMiXzNTqSLFu2lV.jpg", "Wireless Speakers", "https://www.boat-lifestyle.com/collections/wireless-speakers"]]

    
  useEffect(() => {
    const trigger = gsap.to(".BestSellerSection_slider", {
      scrollLeft: "+=1000",
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".BestSellerSection_main",
        start: "top 30%",
        end: "bottom 20%",
        scrub: 2,
      }
    });

    // Cleanup function
    return () => {
      trigger.scrollTrigger.kill();
    };
  }, []);



  return (
    <div className='BestSellerSection_main' >
      <div className='Title_Text' style={{ top: "15px", left: "10px" }}>Explore Bestsellers</div>

      <div className='BestSellerSection_slider' >
        {BestSellerSection_data.map((e, i) => {
          return <BestSellerSectionBox source_link={e[0]} poster_link={e[1]} Product_name={e[2]} Target_link={e[3]} key={i} />
        })}
      </div>
    </div>
  )
}

export default BestSellerSection
