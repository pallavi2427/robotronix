import React, { useState,useEffect } from "react";
import logo from "./../../assets/img/logo_c1.png";
import { NavLink, useLocation} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { CgDigitalocean } from "react-icons/cg";
import { HiInformationCircle } from "react-icons/hi";
import { FaPeoplePulling } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaMedkit } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { BiSolidMedal } from "react-icons/bi";
import { HiOutlineBanknotes } from "react-icons/hi2";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Manages overall menu visibility
  const [submenuOpen, setSubMenuOpen] = useState(false); // Manages overall menu visibility
  const [submenuProduct, setSubMenuProduct] = useState(false); // Manages overall menu visibility
  const [submenuAbout, setSubMenuAbout] = useState(false); // About Us submenu
  const [submenuIndustries, setSubMenuIndustries] = useState(false); // Industries submenu

  const isMobile = window.innerWidth <= 768;
  const location = useLocation()
    // Close all menus whenever the route changes
    useEffect(() => {
      setMenuOpen(false);
      setSubMenuOpen(false);
      setSubMenuProduct(false);
      setSubMenuAbout(false);
      setSubMenuIndustries(false);
    }, [location]); // Dependency array ensures this effect runs when location changes
    const handleMega =()=>{
      setTimeout(()=>{
        window.location.reload()
      },100)
    }

  // Toggles main menu visibility, closes submenus
  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (!prev) {
        // Close all submenus when main menu is opened
        setSubMenuOpen(false);
        setSubMenuProduct(false);
        setSubMenuAbout(false);
        setSubMenuIndustries(false);
      }
      return !prev;
    });
  };

  // Toggles the Our Services submenu visibility
  const toggleSubMenu = () => {
    if (isMobile) {
      setSubMenuOpen((prev) => {
        if (!prev) {
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuAbout(false);
          setSubMenuIndustries(false)
        }
        return !prev;
      });
    }
  };

  // Toggles the Products submenu visibility
  const toggleProductMenu = () => {
    if (isMobile) {
      setSubMenuProduct((prev) => {
        if (!prev) {
          setSubMenuOpen(false); // Close Our Services submenu
          setSubMenuAbout(false);
          setSubMenuIndustries(false)

        }
        return !prev;
      });
    }
  };
  // Toggles the About Us submenu visibility
  const toggleAboutMenu = () => {
    if (isMobile) {
      setSubMenuAbout((prev) => {
        if (!prev) {
          setSubMenuOpen(false); // Close Our Services submenu
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuIndustries(false)

        }
        return !prev;
      });
    }
  };

  // Toggles the Industries submenu visibility
  const toggleIndustriesMenu = () => {
    if (isMobile) {
      setSubMenuIndustries((prev) => {
        if (!prev) {
          setSubMenuOpen(false); // Close Our Services submenu
          setSubMenuProduct(false); // Close Products submenu
          setSubMenuAbout(false)
        }
        return !prev;
      });
    }
  };

  // Close the menu and submenus when a menu item is clicked
 


  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/" className="d-flex align-items-center">
              <img src={logo} alt="AgriCulture"></img>
            </NavLink>
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            <FiMenu />
          </button>
          <div>
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}


            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li>
                <a
                  href="#"
                  className="desktop-item"
                  onMouseEnter={() => !isMobile && setSubMenuOpen(true)}
                  onMouseLeave={() => !isMobile && setSubMenuOpen(false)}
                >
                  Our Services{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </a>
                <div className="mobile-item" onClick={toggleSubMenu}>
                  <div className="row">
                    <div className="col-6"> Our Services</div>
                    <div className="col-6 text-right">
                      {submenuOpen ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>
                <div className={`mega-box ${submenuOpen ? "open" : ""}`}>
                  <div className="content">
                    <div className="row">
                      <header>
                        <span>
                          <FaLaptopCode />
                        </span>{" "}
                        Web Development
                      </header>
                      <ul className="mega-links">
                        <li>
                          <NavLink to="/mean-development" onClick={handleMega}>
                            MEAN Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/nodejs-development" onClick={handleMega}>
                            Node.js Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/progressive-web-application-development" onClick={handleMega}>
                            PWA Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/reactjs-development" onClick={handleMega}>
                            ReactJS Development
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <TbDeviceMobileCode />
                        </span>{" "}
                        Mobile App Development
                      </header>
                      <ul className="mega-links">
                        <li>
                          <NavLink to="/android-app-development" onClick={handleMega}>
                            Android App Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/flutter-app-development" onClick={handleMega}>
                            Flutter App Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ios-app-development" onClick={handleMega}>
                            iOS App Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/react-native-app-development" onClick={handleMega}>
                            React Native App Development
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        <span>
                          <CgDigitalocean />
                        </span>{" "}
                        Digital Evolution
                      </header>
                      <ul className="mega-links">
                        <li>
                          <NavLink to="#">IoT Development</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Low Code Development</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">RPA Consulting Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Digital Commerce</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Products{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </a>
                <label className="mobile-item" onClick={toggleProductMenu}>
                  <div className="row">
                    <div className="col-6">Products</div>
                    <div className="col-6 text-right">
                      {submenuProduct ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </label>
                <div className={`mega-box ${submenuProduct ? "open" : ""}`}>
                  <div className="content">
                    <div className="row">
                      <div className="logo">
                        <NavLink to="" className="">
                          <img src={logo} alt="AgriCulture"></img>
                        </NavLink>
                      </div>
                      <br></br>
                      <h6>ROBOTRONIX INDIA</h6>
                      <p className="text-wrap">
                        Automate, Analyse and Accelerate your multi-brand
                        distribution business with India's leading B2B Online
                        Ordering App.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  About Us
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </a>
                {/* Mobile version of About Us */}
                <div className="mobile-item" onClick={toggleAboutMenu}>
                  <div className="row">
                    <div className="col-6">About Us</div>
                    <div className="col-6 text-right">
                      {submenuAbout ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Dropdown menu for About Us */}
                <ul className={`drop-menu ${submenuAbout ? "open" : ""}`}>
                  <li>
                    <a href="#">
                      <span>
                        <HiInformationCircle />
                      </span>
                      About Robotronix
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaPeoplePulling />
                      </span>
                      Culture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <RiTeamFill />
                      </span>
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <PiUsersThreeFill />
                      </span>
                      Client Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <BiSolidMedal />
                      </span>
                      Awards
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Industries{" "}
                  <span>
                    <FaAngleDown className="downArrow" />
                  </span>
                  <span className="upArrow">
                    <FaAngleUp className="uArrow" />
                  </span>
                </a>
                <div className="mobile-item" onClick={toggleIndustriesMenu}>
                  <div className="row">
                    <div className="col-6">Industries</div>
                    <div className="col-6 text-right">
                      {submenuIndustries ? (
                        <FaAngleDown className="fright" />
                      ) : (
                        <FaAngleRight className="fright" />
                      )}
                    </div>
                  </div>
                </div>
                <ul className={`drop-menu ${submenuIndustries ? "open" : ""}`}>
                  <li>
                    <a href="#">
                      <span>
                        <FaMedkit />
                      </span>
                      Healthcare
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaCogs />
                      </span>
                      Automotive
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaUserGraduate />
                      </span>
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaBus />
                      </span>
                      Transportation
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <HiOutlineBanknotes />
                      </span>
                      Banking
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Portfolio <span className="down-icon"></span>
                </a>
                <input type="checkbox" id="showPort" />
                <label htmlFor="showPort" className="mobile-item">
                  Portfolio
                </label>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Blog
                </a>
                <input type="checkbox" id="showBlog" />
                <label htmlFor="showBlog" className="mobile-item">
                  Blog
                </label>
              </li>
              <li>
                <NavLink to="contact-us" className="desktop-item">
                  Contact Us
                </NavLink>
                <NavLink to="/contact-us" className="mobile-item">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
      </nav>
    </>
  );
};

