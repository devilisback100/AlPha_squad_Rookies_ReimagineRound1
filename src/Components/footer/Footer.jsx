import React from 'react'
import './Footer.css';
function Footer() {

  return (
      <>
        <style
  dangerouslySetInnerHTML={{
    __html:
      "\n.footer-additional-block{display:flex;flex-wrap:wrap;margin-top:2.5rem}\n.footer-collection-block{margin-bottom:50px;width:100%}\np.footer-collection-title{font-size:16px;font-weight:700;color:var(--color-3);margin-bottom:18px}\np.footer-collection-subtitle{font-size:14px;font-weight:500;color:var(--Text-color);margin-bottom:5px}\n.features-wrapper,.identity-wrapper{margin-bottom:18px}\nul.footer-features-filter-list,ul.footer-price-filter-list,ul.footer-identity-filter-list{padding:0}\nli.footer-features-filter-item,li.footer-price-filter-item,li.footer-identity-filter-item{list-style:none;padding:0;font-size:12px;font-weight:400;}\n@media (min-width:769px){\n.footer-collection-block{width:25%}\n.footer__item-list{margin-left:-50px;margin-right:-50px;margin-top:-50px;}\n.footer-additional-block{flex-direction:column;max-height:1260px;}\n}\n@media (max-width:768px){\n.footer-additional-block{padding:2.5rem 18px 0;margin-top:0;background:var(--Background-color);}\n.footer-collection-block{margin-bottom:0;}\n.features-wrapper,.price-wrapper,.identity-wrapper{display:none;}\n.footer-collection-block-inner>div:last-child{margin-bottom:40px;}\np.footer-collection-title{font-size:14px;font-weight:500;padding-bottom:7px;position:relative;}\np.footer-collection-subtitle{font-size:13px;}\nli.footer-features-filter-item,li.footer-price-filter-item,li.footer-identity-filter-item{font-size:14px;margin-top:14px;}\n.filter_icon{font-size:18px;position:absolute;top:50%;transform:translateY(-50%);right:10px;font-weight:500;padding-bottom:10px;}\n.expand_filter:before{content:'+'}\n.collapse_filter:before{content:'-'}\n}\n"
  }}
/>


          <footer className="footer">
              <div className="brand-text text-left mb-4 visually-hidden">
                  <p className="brand_content">
                      India's fastest growing audio &amp; wearables brand. The most incredible
                      range of
                      <a href="/collections/bluetooth-wireless-headphones">
                          wireless earphones
                      </a>
                      ,<a href="/collections/true-wireless-earbuds">earbuds</a>,
                      <a href="/collections/wired-headphones">headphones</a>,
                      <a href="/collections/smart-watches">smart watches</a>, and
                      <a href="/collections/home-audio">home audio</a>. From workouts to
                      adventures, boAt will get you sailing!
                  </p>
              </div>
              <div className="container">
                  <div className="footer__inner">
                      <div className="footer__item-list">
                          <div
                              id="footer_item_0"
                              className="footer__item footer__item--newsletter is-first"
                          >
                              <div className="footer__item-content">
                                  <div className="footer-logo">
                                      <a href="https://www.boat-lifestyle.com" className="p-0">
                                          <img
                                              className="footer-logo"
                                              loading="lazy"
                                              sizes="100px"
                                              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
                                              alt="logo"
                                          />
                                      </a>
                                  </div>
                                  <div className="signup-form mt-4">
                                      <span
                                          className="signup-heading"
                                          style={{
                                              display: "block",
                                              fontSize: 24,
                                              fontWeight: "bold",
                                              marginBottom: 5,
                                              opacity: 1,
                                              color: "var(--Text-color)",
                                              lineHeight: "normal"
                                          }}
                                      >
                                          Subscribe to our email alerts!
                                      </span>
                                      <span className="input-block">
                                          <input
                                              autoComplete="no-autocomplete"
                                              type="email"
                                              id="subscriber-email"
                                              placeholder="Enter your email address"
                                              className="required email"
                                              defaultValue=""
                                              name="email"
                                              aria-label="Translation missing: en.layout.signup.label"
                                          />
                                          <button className="button" id="subscribe-btn" type="submit">
                                              <span>
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="8.27"
                                                      height="14.473"
                                                      viewBox="0 0 8.27 14.473"
                                                  >
                                                      <path
                                                          id="Path_340747"
                                                          data-name="Path 340747"
                                                          d="M.28.277a.961.961,0,0,1,1.349,0L7.991,6.569a.936.936,0,0,1,0,1.334L1.628,14.2a.961.961,0,0,1-1.349,0,.935.935,0,0,1,0-1.334L5.966,7.237.28,1.611A.935.935,0,0,1,.28.277Z"
                                                          fill="#868c91"
                                                          fillRule="evenodd"
                                                      />
                                                  </svg>
                                              </span>
                                          </button>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div className="mobile_footer_item_title">
                              <div className="menu-panel">
                                  <button
                                      id="link_btn_1"
                                      className="footer__item-title heading heading--small"
                                  >
                                      Shop
                                  </button>
                                  <div className="footer__item-content footer__item-mobile footer_item_1">
                                      <ul className="linklist list--unstyled" >
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/true-wireless-earbuds"
                                                  className="link--faded"
                                              >
                                                  True Wireless Earbuds
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="https://www.boat-lifestyle.com/collections/bluetooth-wireless-headphones"
                                                  className="link--faded"
                                              >
                                                  Wireless Headphones
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/wired-headphones"
                                                  className="link--faded"
                                              >
                                                  Wired Headphones
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/wireless-speakers"
                                                  className="link--faded"
                                              >
                                                  Wireless Speakers
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/collections/home-audio" className="link--faded">
                                                  Home Audio
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/mobile-accessories"
                                                  className="link--faded"
                                              >
                                                  Mobile Accessories
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/smart-watches"
                                                  className="link--faded"
                                              >
                                                  Smart Watches
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/trebel-for-women"
                                                  className="link--faded"
                                              >
                                                  TRebel
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/collections/misfit-by-boat"
                                                  className="link--faded"
                                              >
                                                  Misfit Trimmers
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="https://www.boat-lifestyle.com/pages/refer-and-earn"
                                                  className="link--faded"
                                              >
                                                  Refer &amp; Earn
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="menu-panel">
                                  <button
                                      id="link_btn_2"
                                      className="footer__item-title heading heading--small"
                                  >
                                      Help
                                  </button>
                                  <div className="footer__item-content footer__item-mobile footer_item_2">
                                      <ul className="linklist list--unstyled" >
                                          <li className="linklist__item">
                                              <a
                                                  href="https://dtc.boat-lifestyle.com/track"
                                                  className="link--faded"
                                              >
                                                  Track Your Order
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="http://support.boat-lifestyle.com/"
                                                  className="link--faded"
                                              >
                                                  Warranty &amp; Support
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/return-policy" className="link--faded">
                                                  Return Policy
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/pages/service-center-list"
                                                  className="link--faded"
                                              >
                                                  Service Centers
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/bulk-orders" className="link--faded">
                                                  Bulk Orders
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="/pages/frequently-asked-questions"
                                                  className="link--faded"
                                              >
                                                  FAQs
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/why-buy-direct" className="link--faded">
                                                  Why Buy Direct
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="menu-panel">
                                  <button
                                      id="link_btn_3"
                                      className="footer__item-title heading heading--small"
                                  >
                                      Company
                                  </button>
                                  <div className="footer__item-content footer__item-mobile footer_item_3">
                                      <ul className="linklist list--unstyled" >
                                          <li className="linklist__item">
                                              <a href="/pages/who-are-we" className="link--faded">
                                                  About boAt
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="https://www.boat-lifestyle.com/blogs/news"
                                                  className="link--faded"
                                              >
                                                  News
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/boat-blogs" className="link--faded">
                                                  Read Our Blog
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="mailto:Careers@imaginemarketingindia.com?subject=Hi boAthead"
                                                  className="link--faded"
                                              >
                                                  Careers
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/security" className="link--faded">
                                                  Security
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a href="/pages/investor-relations" className="link--faded">
                                                  Investor Relations
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="https://www.boat-lifestyle.com/pages/social-responsibility"
                                                  className="link--faded"
                                              >
                                                  Social Responsibility
                                              </a>
                                          </li>
                                          <li className="linklist__item">
                                              <a
                                                  href="https://www.boat-lifestyle.com/pages/warranty"
                                                  className="link--faded"
                                              >
                                                  Warranty Policy
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div id="footer_item_1" className="footer__item footer__item--links ">
                              <p className="desktop_menu_link footer__item-title heading heading--small">
                                  Shop
                              </p>
                              <div className="footer__item-content hidden-pocket hidden-phone">
                                  <ul className="linklist list--unstyled" >
                                      <li className="linklist__item">
                                          <a
                                              href="/collections/true-wireless-earbuds"
                                              className="link--faded"
                                          >
                                              True Wireless Earbuds
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="https://www.boat-lifestyle.com/collections/bluetooth-wireless-headphones"
                                              className="link--faded"
                                          >
                                              Wireless Headphones
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="/collections/wired-headphones"
                                              className="link--faded"
                                          >
                                              Wired Headphones
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="/collections/wireless-speakers"
                                              className="link--faded"
                                          >
                                              Wireless Speakers
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/collections/home-audio" className="link--faded">
                                              Home Audio
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="/collections/mobile-accessories"
                                              className="link--faded"
                                          >
                                              Mobile Accessories
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/collections/smart-watches" className="link--faded">
                                              Smart Watches
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="/collections/trebel-for-women"
                                              className="link--faded"
                                          >
                                              TRebel
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/collections/misfit-by-boat" className="link--faded">
                                              Misfit Trimmers
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="https://www.boat-lifestyle.com/pages/refer-and-earn"
                                              className="link--faded"
                                          >
                                              Refer &amp; Earn
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div id="footer_item_2" className="footer__item footer__item--links ">
                              <p className="desktop_menu_link footer__item-title heading heading--small">
                                  Help
                              </p>
                              <div className="footer__item-content hidden-pocket hidden-phone">
                                  <ul className="linklist list--unstyled" >
                                      <li className="linklist__item">
                                          <a
                                              href="https://dtc.boat-lifestyle.com/track"
                                              className="link--faded"
                                          >
                                              Track Your Order
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="http://support.boat-lifestyle.com/"
                                              className="link--faded"
                                          >
                                              Warranty &amp; Support
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/return-policy" className="link--faded">
                                              Return Policy
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/service-center-list" className="link--faded">
                                              Service Centers
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/bulk-orders" className="link--faded">
                                              Bulk Orders
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="/pages/frequently-asked-questions"
                                              className="link--faded"
                                          >
                                              FAQs
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/why-buy-direct" className="link--faded">
                                              Why Buy Direct
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div id="footer_item_3" className="footer__item footer__item--links ">
                              <p className="desktop_menu_link footer__item-title heading heading--small">
                                  Company
                              </p>
                              <div className="footer__item-content hidden-pocket hidden-phone">
                                  <ul className="linklist list--unstyled" >
                                      <li className="linklist__item">
                                          <a href="/pages/who-are-we" className="link--faded">
                                              About boAt
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="https://www.boat-lifestyle.com/blogs/news"
                                              className="link--faded"
                                          >
                                              News
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/boat-blogs" className="link--faded">
                                              Read Our Blog
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="mailto:Careers@imaginemarketingindia.com?subject=Hi boAthead"
                                              className="link--faded"
                                          >
                                              Careers
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/security" className="link--faded">
                                              Security
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a href="/pages/investor-relations" className="link--faded">
                                              Investor Relations
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="https://www.boat-lifestyle.com/pages/social-responsibility"
                                              className="link--faded"
                                          >
                                              Social Responsibility
                                          </a>
                                      </li>
                                      <li className="linklist__item">
                                          <a
                                              href="https://www.boat-lifestyle.com/pages/warranty"
                                              className="link--faded"
                                          >
                                              Warranty Policy
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="footer-additional-block">
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      True Wireless Earbuds
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/noise-cancellation-earbuds"
                                              >
                                                  Noise Cancellation Earbuds
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/gaming-earbuds"
                                              >
                                                  Gaming Earbuds
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/large-playback-earbuds"
                                              >
                                                  Large Playback Earbuds
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-under-1000"
                                              >
                                                  Earbuds Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-under-2000"
                                              >
                                                  Earbuds Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-under-3000"
                                              >
                                                  Earbuds Under 3000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-under-4000"
                                              >
                                                  Earbuds Under 4000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-under-5000"
                                              >
                                                  Earbuds Under 5000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/earbuds-above-5000"
                                              >
                                                  Earbuds Above 5000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Wireless Earphones
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/noise-cancellation-earphone"
                                              >
                                                  Noise Cancellation Earphone
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/long-playback-earphone"
                                              >
                                                  Long Playback Earphone
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/clear-calling-earphone"
                                              >
                                                  Clear Calling Earphone
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/neckbands-under-1000"
                                              >
                                                  Neckbands Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/neckbands-under-2000"
                                              >
                                                  Neckbands Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/neckbands-under-3000"
                                              >
                                                  Neckbands Under 3000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Wired Earphones
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wired-headphones-with-mic-1"
                                              >
                                                  Wired Headphones with Mic
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wired-headphones-with-mic"
                                              >
                                                  Wired Headphones with Mic
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/headphones-with-mic-for-pc"
                                              >
                                                  Headphones with Mic for PC
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-1000"
                                              >
                                                  Wired Headphones Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-2000"
                                              >
                                                  Wired Headphones Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-3000"
                                              >
                                                  Wired Headphones Under 3000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Gaming Headphones
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/gaming-headphones-with-mic-1"
                                              >
                                                  Gaming Headphones with Mic
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/low-latency-headphone"
                                              >
                                                  Low Latency Headphone
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/rgb-light-headphones-1"
                                              >
                                                  RGB Light Headphones
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/headphone-for-pc-gaming"
                                              >
                                                  Headphone for PC Gaming
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Wireless Speakers
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/portable-speakers"
                                              >
                                                  Portable Speakers
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/long-playback-speakers-1"
                                              >
                                                  Long Playback Speakers
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/waterproof-bluetooth-speaker"
                                              >
                                                  Waterproof Bluetooth Speaker
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/party-speaker-with-rgb-lights-1"
                                              >
                                                  Party Speaker with RGB Lights
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/speaker-with-karaoke-mic-1"
                                              >
                                                  Speaker with Karaoke Mic
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/bluetooth-speakers-under-1000"
                                              >
                                                  Bluetooth Speakers Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/bluetooth-speakers-under-2000"
                                              >
                                                  Bluetooth Speakers Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/bluetooth-speakers-under-3000"
                                              >
                                                  Bluetooth Speakers Under 3000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/bluetooth-speakers-under-5000"
                                              >
                                                  Bluetooth Speakers Under 5000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/bluetooth-speakers-under-8000"
                                              >
                                                  Bluetooth Speakers Under 8000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Soundbars
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/soundbar-with-wireless-subwoofer"
                                              >
                                                  Soundbar with Wireless Subwoofer
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/dolby-soundbars"
                                              >
                                                  Dolby Soundbars
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/soundbar-with-wired-subwoofer"
                                              >
                                                  Soundbar with Wired Subwoofer
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/alexa-enabled-soundbar"
                                              >
                                                  Alexa Enabled Soundbar
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/soundbars-under-10000"
                                              >
                                                  Soundbars Under 10000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/soundbars-under-20000"
                                              >
                                                  Soundbars Under 20000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/soundbars-under-3000"
                                              >
                                                  Soundbars Under 3000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/soundbars-under-5000"
                                              >
                                                  Soundbars Under 5000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/soundbars-above-20000"
                                              >
                                                  Soundbars Above 20000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Smart Watches
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/bluetooth-calling-smartwatches"
                                              >
                                                  Bluetooth Calling Smartwatches
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/fitness-tracker-smartwatch"
                                              >
                                                  Fitness Tracker Smartwatch
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/big-display-smartwatch"
                                              >
                                                  Big Display Smartwatch
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/amoled-display-smartwatch"
                                              >
                                                  Amoled Display Smartwatch
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/sports-tracker-smartwatch-1"
                                              >
                                                  Sports Tracker Smartwatch
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="identity-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Identity</p>
                                      <ul className="footer-identity-filter-list">
                                          <li className="footer-identity-filter-item">
                                              <a
                                                  className="footer-identity-filter-link"
                                                  href="/collections/smartwatches-for-women-girls"
                                              >
                                                  Smartwatches For Women/Girls
                                              </a>
                                          </li>
                                          <li className="footer-identity-filter-item">
                                              <a
                                                  className="footer-identity-filter-link"
                                                  href="/collections/smartwatches-for-men-boys"
                                              >
                                                  Smartwatches For Men/Boys
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-under-1000"
                                              >
                                                  Smartwatch Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-under-2000"
                                              >
                                                  Smartwatch Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-under-3000"
                                              >
                                                  Smartwatch Under 3000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-under-4000"
                                              >
                                                  Smartwatch Under 4000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-under-5000"
                                              >
                                                  Smartwatch Under 5000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/smartwatch-above-5000"
                                              >
                                                  Smartwatch Above 5000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Trimmers
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/trimmer-for-men"
                                              >
                                                  Trimmer for Men
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/trimmers-with-grooming-kit-for-men"
                                              >
                                                  Trimmers with Grooming Kit for Men
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/trimmer-under-1000"
                                              >
                                                  Trimmer Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/trimmer-under-2000"
                                              >
                                                  Trimmer Under 2000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Limited Editions
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/limited-editions-headphones"
                                              >
                                                  Limited Editions Headphones
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/limited-editions-smart-watch"
                                              >
                                                  Limited Editions Smart Watch
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/limited-editions-earphone-1"
                                              >
                                                  Limited Editions Earphone
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/limited-edition-speakers"
                                              >
                                                  Limited Edition Speakers
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Car Accessories
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/car-charger"
                                              >
                                                  Car Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/aux-cable-for-car"
                                              >
                                                  Aux Cable for Car
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/car-charger-under-500"
                                              >
                                                  Car Charger Under 500
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/car-charger-above-500"
                                              >
                                                  Car Charger Above 500
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Trebel Range
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/smartwatch-for-women"
                                              >
                                                  Smartwatch for Women
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/earbuds-for-women"
                                              >
                                                  Earbuds for Women
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/neckband-for-women-1"
                                              >
                                                  Neckband for Women
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/earphone-for-women-1"
                                              >
                                                  Earphone for Women
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/headphone-for-women"
                                              >
                                                  Headphone for Women
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Powerbanks
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/power-bank-10000mah"
                                              >
                                                  Power Bank 10000mah
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/power-bank-20000mah-1"
                                              >
                                                  Power Bank 20000mah
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/mobile-power-bank"
                                              >
                                                  Mobile Power Bank
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/fast-charging-power-bank"
                                              >
                                                  Fast Charging Power Bank
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/power-bank-for-iphone"
                                              >
                                                  Power Bank for iPhone
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/power-bank-under-1000"
                                              >
                                                  Power Bank Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/power-bank-under-1500"
                                              >
                                                  Power Bank Under 1500
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/power-bank-under-2000"
                                              >
                                                  Power Bank Under 2000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Chargers
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wireless-charger"
                                              >
                                                  Wireless Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/type-c-charger-1"
                                              >
                                                  Type C Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/fast-charger"
                                              >
                                                  Fast Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/usb-charger"
                                              >
                                                  USB Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/micro-usb-charger"
                                              >
                                                  Micro USB Charger
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/type-c-adapter"
                                              >
                                                  Type C Adapter
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Cables
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/micro-usb-cable"
                                              >
                                                  Micro USB Cable
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/c-type-cable"
                                              >
                                                  C Type Cable
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/lightning-cable"
                                              >
                                                  Lightning Cable
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/usb-c-to-c-cable"
                                              >
                                                  USB C to C Cable
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/smart-watch-charging-cable"
                                              >
                                                  Smart Watch Charging Cable
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Wireless Headphones
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/noise-cancelling-headphones"
                                              >
                                                  Noise Cancelling Headphones
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wireless-gaming-headphone"
                                              >
                                                  Wireless Gaming Headphone
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/long-playback-headphones"
                                              >
                                                  Long Playback Headphones
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wireless-headphones-under-1000"
                                              >
                                                  Wireless Headphones Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wireless-headphones-under-3000"
                                              >
                                                  Wireless Headphones Under 3000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wireless-headphones-under-2000"
                                              >
                                                  Wireless Headphones Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wireless-headphones-under-4000"
                                              >
                                                  Wireless Headphones Under 4000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wireless-headphones-above-4000"
                                              >
                                                  Wireless Headphones Above 4000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="footer-collection-block">
                              <div className="footer-collection-block-inner">
                                  <p className="footer-collection-title">
                                      Wired Headphones
                                      <span className="expand_filter filter_icon d-lg-none" />
                                  </p>
                                  <div className="features-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Features</p>
                                      <ul className="footer-features-filter-list">
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wired-headphones-with-mic-1"
                                              >
                                                  Wired Headphones with Mic
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/wired-headphones-with-mic"
                                              >
                                                  Wired Headphones with Mic
                                              </a>
                                          </li>
                                          <li className="footer-features-filter-item">
                                              <a
                                                  className="footer-features-filter-link"
                                                  href="/collections/headphones-with-mic-for-pc"
                                              >
                                                  Headphones with Mic for PC
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="price-wrapper">
                                      <p className="footer-collection-subtitle">Shop by Price</p>
                                      <ul className="footer-price-filter-list">
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-1000"
                                              >
                                                  Wired Headphones Under 1000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-2000"
                                              >
                                                  Wired Headphones Under 2000
                                              </a>
                                          </li>
                                          <li className="footer-price-filter-item">
                                              <a
                                                  className="footer-price-filter-link"
                                                  href="/collections/wired-headphones-under-3000"
                                              >
                                                  Wired Headphones Under 3000
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="footer__aside footer_section">
                          <div className="row mt-4 footer-bottom-row social_app_links">
                              <div className="col-lg-12 text-left payment-box">
                                  <div className="row social--media hidden-phone">
                                      <div className="col-12 p-0 social-container">
                                          <p className="social-text">Let's get social</p>
                                          <ul className="social-media  list--unstyled" >
                                              <li className="social-media__item social-media__item--facebook">
                                                  <a
                                                      href="https://www.facebook.com/boat.lifestyle"
                                                      
                                                      rel="noopener"
                                                      className="social-media__link"
                                                      aria-label="Follow us on Facebook"
                                                  >
                                                      <svg
                                                          focusable="false"
                                                          width={9}
                                                          height={17}
                                                          className="icon icon--facebook"
                                                          viewBox="0 0 9 17"
                                                      >
                                                          <path
                                                              fillRule="evenodd"
                                                              clipRule="evenodd"
                                                              d="M2.486 16.2084L2.486 8.81845H0L0 5.93845L2.486 5.93845L2.486 3.81845C2.38483 2.79982 2.73793 1.78841 3.45107 1.05407C4.16421 0.319722 5.16485 -0.0628415 6.186 0.00844868C6.9284 0.00408689 7.67039 0.0441585 8.408 0.128449V2.69845L6.883 2.69845C6.4898 2.61523 6.08104 2.73438 5.79414 3.01585C5.50724 3.29732 5.3803 3.70373 5.456 4.09845L5.456 5.93845H8.308L7.936 8.81845H5.46L5.46 16.2084H2.486Z"
                                                              fill="currentColor"
                                                          />
                                                      </svg>
                                                  </a>
                                              </li>
                                              <li className="social-media__item social-media__item--twitter">
                                                  <a
                                                      href="https://twitter.com/RockWithboAt"
                                                      
                                                      rel="noopener"
                                                      className="social-media__link"
                                                      aria-label="Follow us on Twitter"
                                                  >
                                                      {/*?xml version="1.0" encoding="UTF-8"?*/}
                                                      <svg
                                                          id="Layer_2"
                                                          height={16}
                                                          width={20}
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 95.4 86.45"
                                                      >
                                                          <defs>
                                                              <style
                                                                  dangerouslySetInnerHTML={{
                                                                      __html:
                                                                          "\n                                                        .cls-1 {\n                                                            stroke-width: 0px;\n                                                        }\n                                                    "
                                                                  }}
                                                              />
                                                          </defs>
                                                          <g id="Layer_1-2">
                                                              <path
                                                                  className="cls-1"
                                                                  d="m58.14,36.92c12.4,16.38,24.52,32.38,37.26,49.21-9.99,0-19.06.11-28.12-.13-1.27-.03-2.73-1.65-3.68-2.86-6.76-8.64-13.42-17.37-20.45-26.53-6.8,7.73-13.72,14.92-19.81,22.75-4.08,5.24-8.5,8-15.16,6.83-1.44-.25-2.96-.04-5.68-.04,11.61-13.26,22.58-25.81,33.74-38.55C24.29,32,12.49,16.57,0,.26c10.24,0,19.61-.11,28.97.13,1.24.03,2.67,1.71,3.62,2.93,6.2,8.01,12.3,16.1,18.73,24.56,6.67-7.61,13.25-14.67,19.28-22.17,3.32-4.14,6.85-6.39,12.23-5.54,2.05.32,4.19.05,7.44.05-11.1,12.67-21.46,24.51-32.13,36.69ZM17.62,9.03c1.33,1.8,2.37,3.26,3.46,4.69,15.27,19.94,30.68,39.78,45.73,59.89,3.05,4.07,6.18,5.29,11.21,3.97-.71-1.03-1.21-1.83-1.79-2.58-15.47-20.42-31.07-40.73-46.3-61.33-3.2-4.33-6.52-6.17-12.31-4.63Z"
                                                              ></path>
                                                          </g>
                                                      </svg>
                                                  </a>
                                              </li>
                                              <li className="social-media__item social-media__item--instagram">
                                                  <a
                                                      href="https://www.instagram.com/boat.nirvana/"
                                                      
                                                      rel="noopener"
                                                      className="social-media__link"
                                                      aria-label="Follow us on Instagram"
                                                  >
                                                      <svg
                                                          focusable="false"
                                                          width={16}
                                                          height={16}
                                                          className="icon icon--instagram"
                                                          viewBox="0 0 16 16"
                                                      >
                                                          <path
                                                              fillRule="evenodd"
                                                              clipRule="evenodd"
                                                              d="M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417A3.921 3.921 0 0013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 9.226a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-6.775a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm5.23-.162a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                                                              fill="currentColor"
                                                          />
                                                      </svg>
                                                  </a>
                                              </li>
                                              <li className="social-media__item social-media__item--youtube">
                                                  <a
                                                      href="https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ"
                                                      
                                                      rel="noopener"
                                                      className="social-media__link"
                                                      aria-label="Follow us on YouTube"
                                                  >
                                                      <svg
                                                          fill="none"
                                                          focusable="false"
                                                          width={18}
                                                          height={13}
                                                          className="icon icon--youtube"
                                                          viewBox="0 0 18 13"
                                                      >
                                                          <path
                                                              fillRule="evenodd"
                                                              clipRule="evenodd"
                                                              d="M16.0325 0.369454C16.807 0.572743 17.4168 1.17173 17.6238 1.9324C18 3.31101 18 6.1875 18 6.1875C18 6.1875 18 9.06389 17.6238 10.4427C17.4168 11.2033 16.807 11.8023 16.0325 12.0056C14.6288 12.375 9 12.375 9 12.375C9 12.375 3.37122 12.375 1.96752 12.0056C1.19311 11.8023 0.583159 11.2033 0.376159 10.4427C0 9.06389 0 6.1875 0 6.1875C0 6.1875 0 3.31101 0.376159 1.9324C0.583159 1.17173 1.19311 0.572743 1.96752 0.369454C3.37122 0 9 0 9 0C9 0 14.6288 0 16.0325 0.369454ZM11.8636 6.1876L7.1591 8.79913V3.57588L11.8636 6.1876Z"
                                                              fill="currentColor"
                                                          />
                                                      </svg>
                                                  </a>
                                              </li>
                                              <li className="social-media__item social-media__item--linkedin">
                                                  <a
                                                      href="https://www.linkedin.com/company/boat-lifestyle/"
                                                      
                                                      rel="noopener"
                                                      className="social-media__link"
                                                      aria-label="Follow us on LinkedIn"
                                                  >
                                                      <svg
                                                          fill="none"
                                                          focusable="false"
                                                          width={13}
                                                          height={13}
                                                          className="icon icon--linkedin"
                                                          viewBox="0 0 13 13"
                                                      >
                                                          <path
                                                              fillRule="evenodd"
                                                              clipRule="evenodd"
                                                              d="M3.12412 1.56485C3.12412 0.70105 2.42432 0 1.56256 0C0.697275 0 0 0.70105 0 1.56485C0 2.42916 0.697275 3.13021 1.56256 3.13021C2.42432 3.13021 3.12412 2.42916 3.12412 1.56485ZM2.91019 13H0.213925V4.31649H2.91019V13ZM7.18264 4.31648H4.6004V13H7.29112V8.70525C7.29112 7.57205 7.50505 6.47473 8.90666 6.47473C10.2891 6.47473 10.3068 7.77018 10.3068 8.77702V13H13V8.23771C13 5.89903 12.496 4.10117 9.76892 4.10117C8.45812 4.10117 7.57871 4.82092 7.21948 5.50377H7.18264V4.31648Z"
                                                              fill="currentColor"
                                                          />
                                                      </svg>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="row social--media hidden-tablet-and-up">
                                  <div className="col-12 p-0">
                                      <p className="social-text">Let's get social</p>
                                      <ul className="social-media  list--unstyled" >
                                          <li className="social-media__item social-media__item--facebook">
                                              <a
                                                  href="https://www.facebook.com/boat.lifestyle"
                                                  
                                                  rel="noopener"
                                                  className="social-media__link"
                                                  aria-label="Follow us on Facebook"
                                              >
                                                  <svg
                                                      focusable="false"
                                                      width={9}
                                                      height={17}
                                                      className="icon icon--facebook"
                                                      viewBox="0 0 9 17"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M2.486 16.2084L2.486 8.81845H0L0 5.93845L2.486 5.93845L2.486 3.81845C2.38483 2.79982 2.73793 1.78841 3.45107 1.05407C4.16421 0.319722 5.16485 -0.0628415 6.186 0.00844868C6.9284 0.00408689 7.67039 0.0441585 8.408 0.128449V2.69845L6.883 2.69845C6.4898 2.61523 6.08104 2.73438 5.79414 3.01585C5.50724 3.29732 5.3803 3.70373 5.456 4.09845L5.456 5.93845H8.308L7.936 8.81845H5.46L5.46 16.2084H2.486Z"
                                                          fill="currentColor"
                                                      />
                                                  </svg>
                                              </a>
                                          </li>
                                          <li className="social-media__item social-media__item--twitter">
                                              <a
                                                  href="https://twitter.com/RockWithboAt"
                                                  
                                                  rel="noopener"
                                                  className="social-media__link"
                                                  aria-label="Follow us on Twitter"
                                              >
                                                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                                                  <svg
                                                      id="Layer_2"
                                                      height={16}
                                                      width={20}
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 95.4 86.45"
                                                  >
                                                      <defs>
                                                          <style
                                                              dangerouslySetInnerHTML={{
                                                                  __html:
                                                                      "\n                                                    .cls-1 {\n                                                        stroke-width: 0px;\n                                                    }\n                                                "
                                                              }}
                                                          />
                                                      </defs>
                                                      <g id="Layer_1-2">
                                                          <path
                                                              className="cls-1"
                                                              d="m58.14,36.92c12.4,16.38,24.52,32.38,37.26,49.21-9.99,0-19.06.11-28.12-.13-1.27-.03-2.73-1.65-3.68-2.86-6.76-8.64-13.42-17.37-20.45-26.53-6.8,7.73-13.72,14.92-19.81,22.75-4.08,5.24-8.5,8-15.16,6.83-1.44-.25-2.96-.04-5.68-.04,11.61-13.26,22.58-25.81,33.74-38.55C24.29,32,12.49,16.57,0,.26c10.24,0,19.61-.11,28.97.13,1.24.03,2.67,1.71,3.62,2.93,6.2,8.01,12.3,16.1,18.73,24.56,6.67-7.61,13.25-14.67,19.28-22.17,3.32-4.14,6.85-6.39,12.23-5.54,2.05.32,4.19.05,7.44.05-11.1,12.67-21.46,24.51-32.13,36.69ZM17.62,9.03c1.33,1.8,2.37,3.26,3.46,4.69,15.27,19.94,30.68,39.78,45.73,59.89,3.05,4.07,6.18,5.29,11.21,3.97-.71-1.03-1.21-1.83-1.79-2.58-15.47-20.42-31.07-40.73-46.3-61.33-3.2-4.33-6.52-6.17-12.31-4.63Z"
                                                          ></path>
                                                      </g>
                                                  </svg>
                                              </a>
                                          </li>
                                          <li className="social-media__item social-media__item--instagram">
                                              <a
                                                  href="https://www.instagram.com/boat.nirvana/"
                                                  
                                                  rel="noopener"
                                                  className="social-media__link"
                                                  aria-label="Follow us on Instagram"
                                              >
                                                  <svg
                                                      focusable="false"
                                                      width={16}
                                                      height={16}
                                                      className="icon icon--instagram"
                                                      viewBox="0 0 16 16"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 00-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 001.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 00-.923-1.417A3.921 3.921 0 0013.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.479 2.479 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 9.226a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-6.775a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm5.23-.162a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"
                                                          fill="currentColor"
                                                      />
                                                  </svg>
                                              </a>
                                          </li>
                                          <li className="social-media__item social-media__item--youtube">
                                              <a
                                                  href="https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ"
                                                  
                                                  rel="noopener"
                                                  className="social-media__link"
                                                  aria-label="Follow us on YouTube"
                                              >
                                                  <svg
                                                      fill="none"
                                                      focusable="false"
                                                      width={18}
                                                      height={13}
                                                      className="icon icon--youtube"
                                                      viewBox="0 0 18 13"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M16.0325 0.369454C16.807 0.572743 17.4168 1.17173 17.6238 1.9324C18 3.31101 18 6.1875 18 6.1875C18 6.1875 18 9.06389 17.6238 10.4427C17.4168 11.2033 16.807 11.8023 16.0325 12.0056C14.6288 12.375 9 12.375 9 12.375C9 12.375 3.37122 12.375 1.96752 12.0056C1.19311 11.8023 0.583159 11.2033 0.376159 10.4427C0 9.06389 0 6.1875 0 6.1875C0 6.1875 0 3.31101 0.376159 1.9324C0.583159 1.17173 1.19311 0.572743 1.96752 0.369454C3.37122 0 9 0 9 0C9 0 14.6288 0 16.0325 0.369454ZM11.8636 6.1876L7.1591 8.79913V3.57588L11.8636 6.1876Z"
                                                          fill="currentColor"
                                                      />
                                                  </svg>
                                              </a>
                                          </li>
                                          <li className="social-media__item social-media__item--linkedin">
                                              <a
                                                  href="https://www.linkedin.com/company/boat-lifestyle/"
                                                  
                                                  rel="noopener"
                                                  className="social-media__link"
                                                  aria-label="Follow us on LinkedIn"
                                              >
                                                  <svg
                                                      fill="none"
                                                      focusable="false"
                                                      width={13}
                                                      height={13}
                                                      className="icon icon--linkedin"
                                                      viewBox="0 0 13 13"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M3.12412 1.56485C3.12412 0.70105 2.42432 0 1.56256 0C0.697275 0 0 0.70105 0 1.56485C0 2.42916 0.697275 3.13021 1.56256 3.13021C2.42432 3.13021 3.12412 2.42916 3.12412 1.56485ZM2.91019 13H0.213925V4.31649H2.91019V13ZM7.18264 4.31648H4.6004V13H7.29112V8.70525C7.29112 7.57205 7.50505 6.47473 8.90666 6.47473C10.2891 6.47473 10.3068 7.77018 10.3068 8.77702V13H13V8.23771C13 5.89903 12.496 4.10117 9.76892 4.10117C8.45812 4.10117 7.57871 4.82092 7.21948 5.50377H7.18264V4.31648Z"
                                                          fill="currentColor"
                                                      />
                                                  </svg>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="row my-2 footer-bottom-row justify-content-between">
                              <div className="col-12 extra--links">
                                  <ul className="extra--links-list list--unstyled" >
                                      <li className="extra--link">
                                          <a href="/pages/privacy-policy">Privacy Policy</a>
                                      </li>
                                      <li className="extra--link">
                                          <a href="/pages/terms-of-use">Terms &amp; Conditions</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="row footer-bottom-row copyright_footer">
                              <div className="col-lg-12 text-center footer__copyright text--xsmall text--subdued">
                                  <p className="copy text-black w-100">
                                      © 2024 Imagine Marketing Limited. All Rights Reserved.
                                      <br />
                                      <br />
                                      For queries contact us: Manager, Imagine Marketing Limited{" "}
                                      <br className="only_mobile" />
                                      Unit no. 204 &amp; 205, 2nd floor, D-wing &amp; E-wing,
                                      <br />
                                      Corporate Avenue, Andheri Ghatkopar Link Road,{" "}
                                      <br className="only_mobile" />
                                      Mumbai, Maharashtra-400093, India
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </>

  )
}

export default Footer
