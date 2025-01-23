import React, { useState, useEffect } from "react";
import slider_1 from "./../../assets/img/Robotics-BG.jpg";
import slider_2 from "./../../assets/img/robotics.webp";
import logoSlider from "./../../assets/img/force_logo_c11.png";
import logoSlider2 from "./../../assets/img/aictsl1.png";
import logoSlider3 from "./../../assets/img/fr1.png";
import logoSlider4 from "./../../assets/img/honda_logo1.png";
import logoSlider5 from "./../../assets/img/pinnacle1.png";
import logoSlider6 from "./../../assets/img/airport_authority_of_india1.png";
import logoSlider7 from "./../../assets/img/mpidc_logo1.png";
// import wwd from "./../../assets/img/earth-the-world-earth-carbon-wallpaper-thumb.jpg";
import technical from "./../../assets/img/tech.jpg";
import consult from "./../../assets/img/consult.jpg";
import service from "./../../assets/img/service.jpg";
import cyber from "./../../assets/img/cyber-security.jpg";
import dataAnalysis from "./../../assets/img/analytics.jpg";
import ai from "./../../assets/img/ai.jpg";
import wdevelopment from "./../../assets/img/web.jpg";
import digital from "./../../assets/img/dm.jpg";
import { NavLink } from "react-router-dom";
import q1 from "./../../assets/img/q1.png";
import q2 from "./../../assets/img/quote-removebg-preview.png";

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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
  const testimonials = [
    {
      text: "This is the best no-code platform I've ever seen",
      author: "Alyssa Morris",
      title: "Product Manager, Intel",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "The perfect organizer and team builder",
      author: "Randall Howard",
      title: "UX Designer, Netflix",
      image:
        "https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Flexible product with near endless possibilities",
      author: "Adam Worrell",
      title: "Data Analyst, Spotify",
      image:
        "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const scrollTo = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Animation initialization logic
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${-activeIndex * 100}%)`;
  }, [activeIndex]);

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
        <div className="reviews">
          
          <div>
            <div className="reviews-row row-first">
              <div className="reviews-card">
                <img
                  className="card-img"
                  src="https://temalcode-agency-portfolio.netlify.app/images/review1.png"
                  alt=""
                />
                <div className="card-text">
                  <div className="card-title">
                    <p>“Excellent Team with Creative Mindset”</p>
                  </div>
                  <div className="card-para">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare eu odio pretium sed amet, pulvinar nunc fringilla
                      lectus.
                    </p>
                    <p>
                      Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                      scelerisque morbi porttitor sapien. Feugiat faucibus
                      gravida sed adipiscing odio. Condimentum purus varius non{" "}
                    </p>
                  </div>
                  <div className="card-author">
                    <svg
                      width={9}
                      height={2}
                      viewBox="0 0 9 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.526123 1.13867H8.25949"
                        stroke="black"
                        strokeWidth="0.822209"
                      />
                    </svg>
                    <p>CEO of SomeCompany</p>
                  </div>
                </div>
              </div>
              <div className="reviews-card">
                <img
                  className="card-img"
                  src="https://temalcode-agency-portfolio.netlify.app/images/review2.png"
                  alt=""
                />
                <div className="card-text">
                  <div className="card-title">
                    <p>“Excellent Team with Creative Mindset”</p>
                  </div>
                  <div className="card-para">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare eu odio pretium sed amet, pulvinar nunc fringilla
                      lectus.
                    </p>
                    <p>
                      Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                      scelerisque morbi porttitor sapien. Feugiat faucibus
                      gravida sed adipiscing odio. Condimentum purus varius non{" "}
                    </p>
                  </div>
                  <div className="card-author">
                    <svg
                      width={9}
                      height={2}
                      viewBox="0 0 9 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.526123 1.13867H8.25949"
                        stroke="black"
                        strokeWidth="0.822209"
                      />
                    </svg>
                    <p>CEO of SomeCompany</p>
                  </div>
                </div>
              </div>
              <div className="reviews-card">
                <img
                  className="card-img"
                  src="https://temalcode-agency-portfolio.netlify.app/images/review3.png"
                  alt=""
                />
                <div className="card-text">
                  <div className="card-title">
                    <p>“Excellent Team with Creative Mindset”</p>
                  </div>
                  <div className="card-para">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare eu odio pretium sed amet, pulvinar nunc fringilla
                      lectus.
                    </p>
                    <p>
                      Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                      scelerisque morbi porttitor sapien. Feugiat faucibus
                      gravida sed adipiscing odio. Condimentum purus varius non{" "}
                    </p>
                  </div>
                  <div className="card-author">
                    <svg
                      width={9}
                      height={2}
                      viewBox="0 0 9 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.526123 1.13867H8.25949"
                        stroke="black"
                        strokeWidth="0.822209"
                      />
                    </svg>
                    <p>CEO of SomeCompany</p>
                  </div>
                </div>
              </div>
              <div className="reviews-card">
                <img
                  className="card-img"
                  src="https://temalcode-agency-portfolio.netlify.app/images/review1.png"
                  alt=""
                />
                <div className="card-text">
                  <div className="card-title">
                    <p>“Excellent Team with Creative Mindset”</p>
                  </div>
                  <div className="card-para">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare eu odio pretium sed amet, pulvinar nunc fringilla
                      lectus.
                    </p>
                    <p>
                      Adipiscing gravida rhoncus nunc, massa id. Et vestibulum
                      scelerisque morbi porttitor sapien. Feugiat faucibus
                      gravida sed adipiscing odio. Condimentum purus varius non{" "}
                    </p>
                  </div>
                  <div className="card-author">
                    <svg
                      width={9}
                      height={2}
                      viewBox="0 0 9 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.526123 1.13867H8.25949"
                        stroke="black"
                        strokeWidth="0.822209"
                      />
                    </svg>
                    <p>CEO of SomeCompany</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
