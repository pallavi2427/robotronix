import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className='main'>
        <footer className='bg-footer'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className=''>
                  <h6 className='footer-heading text-uppercase text-white'>
                    Services
                  </h6>
                  <ul className='list-unstyled footer-link mt-4'>
                    <li>
                      <NavLink to=''>AI and ML</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Cyber Security services</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Cloud Application Development</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Digital Marketing</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Digital Transformation</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Digital Marketing</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>IoT Development</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Low Code Development</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Mobile App Developmen</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className=''>
                  <h6 className='footer-heading text-uppercase text-white'>
                    SOLUTIONS
                  </h6>
                  <ul className='list-unstyled footer-link mt-4'>
                    <li>
                      <NavLink to=''>B2B Online Ordering App</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Costing Automation and Control</NavLink>
                    </li>
                  </ul>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className=''>
                      <h6 className='footer-heading text-uppercase text-white'>
                        INDUSTRIES
                      </h6>
                      <ul className='list-unstyled footer-link mt-4'>
                        <li>
                          <NavLink to=''>Healthcare</NavLink>
                        </li>
                        <li>
                          <NavLink to=''>Automotive</NavLink>
                        </li>
                        <li>
                          <NavLink to=''>Wellness and Fitness</NavLink>
                        </li>
                        <li>
                          <NavLink to=''>Transportation and Logistics</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className=''>
                  <h6 className='footer-heading text-uppercase text-white'>
                    ABOUT US
                  </h6>
                  <ul className='list-unstyled footer-link mt-4'>
                    <li>
                      <NavLink to=''>About Robotronix</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Culture</NavLink>
                    </li>

                    <li>
                      <NavLink to=''>Leadership</NavLink>
                    </li>
                    <li>
                      <NavLink to=''>Events</NavLink>
                    </li>
                  </ul>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className=''>
                      <h6 className='footer-heading text-uppercase text-white'>
                        QUICK CONNECT
                      </h6>
                      <ul className='list-unstyled footer-link mt-4'>
                        <li>
                          <NavLink to=''>Contact Us</NavLink>
                        </li>
                        <li>
                          <NavLink to=''>Blogs</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title text-light'>Contact</h5>
                    <h6 className='mb-2 text-light'>+91731-2970998</h6>
                    <h6 className='mb-2 text-light'> +919993150998</h6>
                    <p className='text-light'>
                      <small>info@robotronix.co.in</small>
                    </p>
                    <p className='text-white small-font'>
                      <FaMapMarkerAlt style={{ color: "red" }} />
                      402, Atulya IT PARK, MPIDC, Khandwa Rd, opposite to Indian
                      Coffee House, Indore, Madhya Pradesh 452012.
                    </p>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-1'></div>
                  <div className='col-2'>
                    <NavLink
                      to='https://www.linkedin.com/in/robotronix-india-a7795a68/'
                      target='_blank'>
                      <CiLinkedin
                        className='text-white'
                        style={{ fontSize: "30px" }}
                      />
                    </NavLink>
                  </div>
                  <div className='col-2'>
                    <NavLink
                      to='https://www.instagram.com/robotronixindia/'
                      target='_blank'>
                      <CiInstagram
                        className='text-white'
                        style={{ fontSize: "30px" }}
                      />
                    </NavLink>
                  </div>
                  <div className='col-2'>
                    <NavLink
                      to='https://www.facebook.com/inbho/'
                      target='_blank'>
                      <CiFacebook
                        className='text-white'
                        style={{ fontSize: "30px" }}
                      />
                    </NavLink>
                  </div>
                  <div className='col-2'>
                    <NavLink
                      to='https://twitter.com/ROBOTRONiX2010?s=08'
                      target='_blank'>
                      <FaXTwitter
                        className='text-white'
                        style={{ fontSize: "30px" }}
                      />
                    </NavLink>
                  </div>
                  <div className='col-2'>
                    <NavLink
                      to='https://www.youtube.com/channel/UCrsYGH36ulMTDbzRhMvLtJg'
                      target='_blank'>
                      <CiYoutube
                        className='text-white'
                        style={{ fontSize: "30px" }}
                      />
                    </NavLink>
                  </div>

                  <div className='col-1'></div>
                </div>
                {/* Clutch Details */}

                <div className='clutch-details mt-4 text-center'>
                  <div
                    class='clutch-widget'
                    data-url='https://widget.clutch.co'
                    data-widget-type='14'
                    data-height='50'
                    data-nofollow='true'
                    data-expandifr='true'
                    data-scale='100'
                    data-clutchcompany-id='2066120'></div>
                </div>
                <div
                  class='goodfirm-widget'
                  data-widget-type='goodfirms-widget-t8'
                  data-widget-pattern='poweredby-star'
                  data-height='60'
                  data-company-id='164206'></div>
              </div>
            </div>
          </div>
          <div className='text-center mt-2'>
            <p className='footer-alt mb-0 f-14'>
              © 2024 ROBOTRONIX INDIA, All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
