import gsap from 'gsap';
import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import { AiOutlineUser, AiTwotoneShopping, AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { search_icon, Wired_Earbuds_image, Personalised_product_image, Neckband_image, Smartwatch_image, Gaming_Headphone_image, Powerbank_image, cable_image, Wired_Earphone_image, Wireless_HeadPhone_image, Wired_HeadPhone_image, Wireless_Speaker_image, Soundbars_image, Party_Speaker_image, Trimmers_image, charger_image, CarAccessories_image, T_rebel_for_women, Limited_image, super_hero_collection_imagr } from '../component_list'
import './Header.css';

function Header() {
  const [isHovered, setIsHovered] = useState({ "Header_child2_box1": false, "Header_child2_box5_expand": false, "Header_child2_expand": false });
  useGSAP(() => {
    var tl = gsap.timeline();
    if (window.innerWidth > 550) {
      tl.from(".box1", {
        y: -220,
        opacity: 0,
        stagger: 1,
        duration: 0.175,
      })
    }
    else {
      tl.from(".box1,.Header_child1_Menu_icon", {
        y: -220,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
      })
    }

    document.querySelector(".Header_child1_Menu_icon").addEventListener("click",()=>{
      tl.from(".Header_child2_expand",{
        x: -220,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
      })
    })    

  })

  return (
    <>
      <div className='Header_Parent_container'>
        <div className='Header_child1_Menu_icon' >
          <AiOutlineMenu style={{ height: "32px", width: "32px", cursor: "pointer" }} onClick={() => { setIsHovered({ "Header_child2_expand": true }) }} />
        </div>
        <div className='Header_child1 box1'>
          <svg className='Boat_Text_logo' id="Group_205728" data-name="Group 205728" xmlns="http://www.w3.org/2000/svg" width="10.848" height="5.372" viewBox="0 0 151.848 62.372">
            <g id="Group_208975" data-name="Group 208975" transform="translate(0 0)">
              <path id="Path_1" data-name="Path 1" d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321" transform="translate(-268.85 -104.669)" fill="#1a2024" />
              <path id="Path_2" data-name="Path 2" d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z" transform="translate(-776.859 -0.1)" fill="#1a2024" />
              <path id="Path_3" data-name="Path 3" d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z" transform="translate(-513.351 -105.768)" fill="#ed1c24" />
              <path id="Path_4" data-name="Path 4" d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4" transform="translate(0 0.001)" fill="#1a2024" />
            </g>
          </svg>
        </div>
        <div className='Header_child2 box1'>
          <div className='Header_child2_box1' onMouseEnter={() => setIsHovered({ "Header_child2_box1": true })} >
            <span>Categories</span>
            <svg className='Header_child2_box1_icon_1' focusable="false" width="7" height="10" viewBox="0 0 7 10" style={{ rotate: isHovered["Header_child2_box1"] ? '0deg' : '90deg' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor">
              </path>
            </svg>
          </div>
          <div className='Header_child2_box2'>
            <span>boAt Personalisation</span>
          </div>
          <div className='Header_child2_box3'>
            <span>Gift with boAt</span>
          </div>
          <div className='Header_child2_box4'>
            <span>Corporate Orders</span>
          </div>
          <div className='Header_child2_box5' onMouseEnter={() => setIsHovered({ "Header_child2_box5_expand": true })}>
            <span>
              More
            </span>
            <svg className='Header_child2_box1_icon_1' focusable="false" width="7" height="10" viewBox="0 0 7 10" style={{ rotate: isHovered["Header_child2_box5_expand"] ? '0deg' : '90deg' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor">
              </path>
            </svg>
          </div>
        </div>
        <div className='Header_child3 box1' style={{ flex: isHovered['Header_child2_expand'] ? '2.6' : "" }}>
          <button className='Header_child3_search_button'>
            <img alt='search_icon' src={search_icon} style={{ width: "16px", height: "16px" }} />
            <input placeholder='Search Products'>
            </input>
          </button>
        </div>
        <div className='Header_child4 box1'>
          <span className='Header_child4_search_icon' >
            <AiOutlineSearch />
          </span>
          <span>
            <AiOutlineUser />
          </span>
          <span>
            <AiTwotoneShopping />
          </span>
        </div>
      </div>
      <div className='Header_Boat_categories' style={{ display: isHovered["Header_child2_box1"] ? 'flex' : 'none' }} onMouseLeave={() => { setIsHovered({ "Header_child2_box1": false }) }}>
        <li>
          <img alt='Wired_Earbuds_image' src={Wired_Earbuds_image} />
          True Wireless Earbuds
        </li>
        <li>
          <img alt='Personalised_product_image' src={Personalised_product_image} />
          Personalised Products
        </li>
        <li>
          <img alt='Neckband_image' src={Neckband_image} />
          Neckbands
        </li>
        <li>
          <img alt='Smartwatch_image' src={Smartwatch_image} />
          Smart Watches
        </li>
        <li>
          <img alt='Wired_HeadPhone_image' src={Wireless_HeadPhone_image} />
          Wireless Headphones
        </li>
        <li>
          <img alt='Wireless_Speaker_image' src={Wireless_Speaker_image} />
          Wireless Speakers
        </li>
        <li>
          <img alt='Wired_HeadPhone_image' src={Wired_HeadPhone_image} />
          Wired Headphones
        </li>
        <li>
          <img alt='Wired_Earphone_image' src={Wired_Earphone_image} />
          Wired Earphones
        </li>
        <li>
          <img alt='Soundbars_image' src={Soundbars_image} />
          Soundbars
        </li>
        <li>
          <img alt='Gaming_Headphone_image' src={Gaming_Headphone_image} />
          Gaming Headphones</li>
        <li>
          <img alt='Party_Speaker_image' src={Party_Speaker_image} />
          Party Speakers</li>
        <li>
          <img alt='Trimmers_image' src={Trimmers_image} />
          Misfit Trimmers </li>
        <li>
          <img alt='charger_image' src={charger_image} />
          Chargers </li>
        <li>
          <img alt='Powerbank_image' src={Powerbank_image} />
          Power Banks</li>
        <li>
          <img alt='cable_image' src={cable_image} />
          Cables
        </li>
        <li>
          <img alt='CarAccessories_image' src={CarAccessories_image} />
          Car Accessories</li>
        <li>
          <img alt='super_hero_collection_imagr' src={super_hero_collection_imagr} />
          Superhero Collection </li>
        <li>
          <img alt='T_rebel_for_women' src={T_rebel_for_women} />
          Trebel for Women</li>
        <li>
          <img alt='Limited_image' src={Limited_image} />
          Limited Edition</li>
      </div>
      <div className='Header_child2_box5_expand' style={{ display: isHovered["Header_child2_box5_expand"] ? 'flex' : 'none' }} onMouseLeave={() => setIsHovered({ "Header_child2_box5_expand": false })}>

        <li>
          <span>
            Daily
          </span>
        </li>
        <li>
          <span>
            Deals
          </span>
        </li>
        <li>
          <span>
            Blogs
          </span>
        </li>
        <li>
          <span>
            Refer & Earn Careers
          </span>
        </li>
        <li>
          <span>
            Social Responsibility
          </span>
        </li>
        <li>
          <span>
            Store Locator
          </span>
        </li>
        <li>
          <span>
            boAt Community
          </span>
        </li>
      </div>

      <div className='Header_child2_expand' style={{ display: isHovered["Header_child2_expand"] ? "grid" : "none" }}>
        <AiOutlineClose className="Header_child2_expand_close_icon" onClick={() => { setIsHovered({ "Header_child2_expand": false }) }} />
        <div className='Header_child2' style={{ flexDirection: "column", display: isHovered["Header_child2_expand"] ? "flex" : "none" }}>
          <div className='Header_child2_box1' onMouseEnter={() => setIsHovered({ "Header_child2_box1": true })} >
            <span>Categories</span>
            <svg className='Header_child2_box1_icon_1' focusable="false" width="7" height="10" viewBox="0 0 7 10" style={{ rotate: isHovered["Header_child2_box1"] ? '0deg' : '90deg' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor">
              </path>
            </svg>
          </div>
          <div className='Header_child2_box2'>
            <span>boAt Personalisation</span>
          </div>
          <div className='Header_child2_box3'>
            <span>Gift with boAt</span>
          </div>
          <div className='Header_child2_box4'>
            <span>Corporate Orders</span>
          </div>
          <div className='Header_child2_box5' onMouseEnter={() => setIsHovered({ "Header_child2_box5_expand": true })}>
            <span>
              More
            </span>
            <svg className='Header_child2_box1_icon_1' focusable="false" width="7" height="10" viewBox="0 0 7 10" style={{ rotate: isHovered["Header_child2_box5_expand"] ? '0deg' : '90deg' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.9394 5L0.469727 1.53033L1.53039 0.469666L6.06072 5L1.53039 9.53032L0.469727 8.46967L3.9394 5Z" fill="currentColor">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
