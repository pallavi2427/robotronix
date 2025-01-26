import React, { useState } from "react";
import slider_1 from "./../../assets/img/Robotics-BG.jpg";
import slider_2 from "./../../assets/img/robotics.webp";
import logoSlider from "./../../assets/img/force_logo_c11.png";
import logoSlider2 from "./../../assets/img/aictsl1.png";
import logoSlider3 from "./../../assets/img/fr1.png";
import logoSlider4 from "./../../assets/img/honda_logo1.png";
import logoSlider5 from "./../../assets/img/pinnacle1.png";
import logoSlider6 from "./../../assets/img/airport_authority_of_india1.png";
import logoSlider7 from "./../../assets/img/mpidc_logo1.png";
import technical from "./../../assets/img/tech.jpg";
import consult from "./../../assets/img/consult.jpg";
import service from "./../../assets/img/service.jpg";
import cyber from "./../../assets/img/cyber-security.jpg";
import dataAnalysis from "./../../assets/img/analytics.jpg";
import ai from "./../../assets/img/ai.jpg";
import client1 from "./../../assets/img/testimonials/testimonials-1.jpg";
import client2 from "./../../assets/img/testimonials/testimonials-2.jpg";
import client3 from "./../../assets/img/testimonials/testimonials-3.jpg";
import client4 from "./../../assets/img/testimonials/testimonials-4.jpg";
import wdevelopment from "./../../assets/img/web.jpg";
import digital from "./../../assets/img/dm.jpg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    {
      title: "Technical Support",
      content: (
        <>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <img
                src={technical}
                alt="Technical Support"
                style={{ width: "100%", height: "180px" }}
              />
            </div>
            <div className="col-lg-6">
              <p style={{ fontWeight: "600" }}>
                <ul>
                  <li>
                    Assistance with troubleshooting software or hardware
                    issues..
                  </li>
                  <li> Help with network connectivity problems. </li>
                  <li>
                    Guidance on resolving account login or password reset
                    issues.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Consultation Services",
      content: (
        <>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <img
                src={consult}
                alt="Consultation Services"
                style={{ width: "100%", height: "180px" }}
              />
            </div>
            <div className="col-lg-6">
              <p></p>
              <p style={{ fontWeight: "600" }}>
                <ul>
                  <li>Advice on IT infrastructure upgrades.</li>
                  <li>
                    Support in choosing the right software or tools for your
                    business.{" "}
                  </li>
                  <li>IT strategy planning for business growth.</li>
                </ul>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Product Information",
      content: (
        <>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <img
                src={service}
                alt="Product or Service Information"
                style={{ width: "100%", height: "180px" }}
              />
            </div>
            <div className="col-lg-6">
              <p style={{ fontWeight: "600" }}>
                <ul>
                  <li>
                    {" "}
                    Detailed explanations of IT solutions offered (e.g., cloud
                    services, cybersecurity, managed IT).
                  </li>
                  <li>Demonstrations or free trials of software or tools.</li>
                </ul>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Cybersecurity",
      content: (
        <>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <img
                src={cyber}
                alt="Cybersecurity"
                style={{ width: "100%", height: "180px" }}
              />
            </div>
            <div className="col-lg-6">
              <p style={{ fontWeight: "600" }}>
                <ul>
                  <li>Guidance on securing your systems and data.</li>
                  <li> Support in handling data breaches or threats.</li>

                  <li> Training on cybersecurity best practices.</li>
                </ul>
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Data and Analytics",
      content: (
        <>
          <div className="row">
            <div className="col-lg-6 mt-2">
              <img
                src={dataAnalysis}
                alt="Data and Analytics"
                style={{ width: "100%", height: "180px" }}
              />
            </div>
            <div className="col-lg-6">
              <p style={{ fontWeight: "600" }}>
                <ul>
                  <li>Assistance in setting up data analytics platforms.</li>
                  <li>Help with data backup and recovery services. </li>
                  <li>
                    Custom reports or insights to support decision-making.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];
  const contentData = [
    {
      title: "AI/ML",
      description:
        "Explore the power of AI/ML to drive automation, innovation, and insights with cutting-edge technology.",
      image: ai, // Assuming `ai` is an imported image
      link: "/mean-development",
      borderColor: "#DAFF3E",
      hoverTextColor: "#242424",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Build robust web solutions tailored to your needs using the latest technologies and best practices.",
      image: wdevelopment, // Assuming `wdevelopment` is an imported image
      link: "/web-development",
      borderColor: "#9F4EFF",
      hoverTextColor: "#242424",
    },
    {
      title: "DIGITAL MARKETING",
      description:
        "Enhance your online presence and reach your audience with effective digital marketing strategies.",
      image: digital, // Assuming `digital` is an imported image
      link: "/digital-marketing",
      borderColor: "#9F4EFF",
      hoverTextColor: "#242424",
    },
  ];

  return (
    <>
      {/* Slider Section Start */}
      <main className="main">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active slider_one"
              data-bs-interval="2000"
            >
              <img src={slider_1} alt="slider 1" className="" />
            </div>
            <div className="carousel-item slider_one" data-bs-interval="2000">
              <img src={slider_2} alt="slider 2" className="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* /Slider Section End */}
        {/* ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        {/* card start */}
        <div className="container">
          <div className="d-flex justify-content-center align-item-center">
            <h2 className="opacity-50 content-subtitle">What We Do</h2>
          </div>
          <div className="d-flex justify-content-center align-item-center">
            <p className="content-para">
              We create innovative solutions to transform your workplace.
            </p>
          </div>
          <div className="row">
            {contentData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <NavLink to={item.link}>
                  <div
                    className="file-container"
                    data-border-color={item.borderColor}
                    data-hover-text-color={item.hoverTextColor}
                  >
                    <div className="inner-container">
                      <div className="image-container">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="file-image"
                        />
                      </div>
                      <div className="content">
                        <h1 className="text">
                          <span className="title">{item.title}</span>
                          <span className="text-effect" />
                        </h1>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {/* card End */}
        {/* ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        {/* How we can help you Section start */}
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <h2 className="opacity-50 content-subtitle">How we can help you?</h2>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <p className="content-para">
            We provide innovative solutions to help you build a truly digital
            workplace.
          </p>
        </div>
        <div className="about section">
          <div id="about" className="about">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 mb-4 mb-lg-0">
                    <div className="cycle-tab-container">
                      <ul
                        className="nav nav-tabs justify-content-center flex-column flex-sm-row"
                        role="tablist"
                      >
                        {tabs.map((tab, index) => (
                          <li
                            key={index}
                            className={`cycle-tab-item ${
                              activeTab === index ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(index)}
                            role="tab"
                            aria-selected={activeTab === index}
                          >
                            <a
                              href="#!"
                              className="nav-link border-none"
                              onClick={(e) => e.preventDefault()}
                            >
                              {tab.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="tab-content">
                        {tabs.map((tabContent, index) => (
                          <div
                            key={index}
                            className={`tab-pane fade ${
                              activeTab === index ? "show active" : ""
                            }`}
                          >
                            <div className="tab-content-inner">
                              <h4>{tabContent.title}</h4>
                              {tabContent.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Additional content can go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*How we can help you Section end */}
        {/* ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        {/* Testimonial section start */}
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <h2 className="opacity-50 content-subtitle">Testimonial</h2>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <p className="content-para">What our clients say about us.</p>
        </div>
        <div className="container" style={{ width: "70%" }}>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* section start */}

              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client1} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* section end */}
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client2} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client3} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client4} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client3} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client1} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client2} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client3} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  The href attribute requires a valid value to be accessible.
                  Provide a valid, navigable address as the href value. If you
                  cannot provide a valid href.
                </p>
              </div>
              <div className="swiper-client-data row">
                <div className="col-lg-6">
                  <figure>
                    <img src={client4} alt="client review"></img>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <div className="clien-data-details">
                    <p>Richie Rich</p>
                    <p>Enterpreneur</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Testimonial section end */}

        {/* ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* Logo section start*/}
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <h2 className="opacity-50 content-subtitle">Our Clients</h2>
        </div>
        <div className="d-flex justify-content-center align-item-center">
          {" "}
          <p className="content-para">Trusted by clients nationwide.</p>
        </div>
        <section className="logo-section">
          <div
            className="container-fluid section-title"
            data-aos="fade-up"
          ></div>

          <div className="container-fluid">
            <div className="row g-0">
              <div className="slider">
                <div className="slide-track">
                  <div className="slide">
                    <img src={logoSlider} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider6} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider7} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider6} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider7} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider6} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider6} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider7} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider5} alt="" />
                  </div>
                  <div className="slide">
                    <img src={logoSlider6} alt="" />
                  </div>

                  <div className="slide">
                    <img src={logoSlider7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Logo section end */}
      </main>
    </>
  );
};

export default Slider;
