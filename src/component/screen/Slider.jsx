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
import wwd from "./../../assets/img/earth-the-world-earth-carbon-wallpaper-thumb.jpg"

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      {/* Hero Section */}
      <main className='main'>
        <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-bs-ride='carousel'>
          <div className='carousel-inner'>
            <div
              className='carousel-item active slider_one'
              data-bs-interval='2000'>
              <img src={slider_1} alt='slider 1' className='' />
            </div>
            <div className='carousel-item slider_one' data-bs-interval='2000'>
              <img src={slider_2} alt='slider 2' className='' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        {/* /Hero Section */}

        {/* About Section */}
        <div className='d-flex justify-content-center align-item-center mt-5'>
          {" "}
          <h2 className='opacity-50 content-subtitle'>WHAT WE DO</h2>
        </div>
        <div className='d-flex justify-content-center align-item-center'>
          {" "}
          <p className='content-para'>In creating truly digital workplace</p>
        </div>
        <div className='about section'>
          <div id='about' className='about'>
            <div className='content'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-8 mb-4 mb-lg-0'>
                    {/* navs tabs start */}
                    <div className='cycle-tab-container'>
                      <ul className='nav nav-tabs  justify-content-center flex-column flex-sm-row'>
                        {["Transform", "Develop", "Improve"].map(
                          (tab, index) => (
                            <li
                              key={index}
                              className={`cycle-tab-item ${
                                activeTab === index ? "active" : ""
                              }`}
                              onClick={() => handleTabClick(index)}>
                              <a className='nav-link border-none'>{tab}</a>
                            </li>
                          )
                        )}
                      </ul>
                      <div className='tab-content'>
                        {[
                          {
                            title: "Transform",
                            content: (
                              <>
                                <p>
                                  Welcome to the home tab. Here you'll find
                                  general information about our services and
                                  updates.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Praesent suscipit sem at
                                  lectus hendrerit, ac tincidunt urna malesuada.
                                  Sed imperdiet orci eget nunc faucibus, vitae
                                  euismod est lobortis.
                                </p>
                              </>
                            ),
                          },
                          {
                            title: "Develop",
                            content: (
                              <>
                                <p>
                                  In your profile tab, you can manage your
                                  personal details and update your preferences.
                                </p>
                                <p>
                                  Nulla facilisi. Curabitur non libero sit amet
                                  eros malesuada ullamcorper. Nunc scelerisque
                                  metus in urna sollicitudin feugiat.
                                </p>
                              </>
                            ),
                          },
                          {
                            title: "Improve",
                            content: (
                              <>
                                <p>
                                  Here in the messages tab, you can read and
                                  send messages to stay connected with others.
                                </p>
                                <p>
                                  Fusce vestibulum risus at mi hendrerit, sed
                                  gravida velit tincidunt. Sed tempus vehicula
                                  odio eu condimentum. Integer vel turpis
                                  sapien.
                                </p>
                              </>
                            ),
                          },
                        ].map((tabContent, index) => (
                          <div
                            key={index}
                            className={`tab-pane fade ${
                              activeTab === index ? "show active" : ""
                            }`}>
                            <div className='tab-content-inner'>
                              <h4>{tabContent.title}</h4>
                              {tabContent.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* nav tabs end */}
                  </div>
                  <div
                    className='col-lg-4 mb-lg-0 ml-auto'
                    data-aos='fade-up'
                    data-aos-delay={100}>
                    <h2 className='content-title mb-4'>
                      <strong>Customized Solutions</strong> and{" "}
                      <strong>Effortless </strong>
                      Communication Channels
                    </h2>
                    <div className='section-2'>
                      <img src={wwd}></img>{" "}
                      <p className='opacity-50'>
                        <strong style={{ color: "#08bdee" }}
                        >
                          Robotronix India
                        </strong>{" "}
                        interacts with clients to identify their requirements
                        and accordingly designs, develops, and implements an
                        integrated and comprehensivev solution. We are
                        accessible in the way you prefer: phone, email, text,
                        instant messenger, and even in-person meetings.
                      </p>
                    </div>
                    {/* <p className='opacity-50'>
                      <strong style={{ color: "#08bdee" }}>
                        Robotronix India
                      </strong>{" "}
                      interacts with clients to identify their requirements and
                      accordingly designs, develops, and implements an
                      integrated and comprehensivev solution. We are accessible
                      in the way you prefer: phone, email, text, instant
                      messenger, and even in-person meetings.
                    </p> */}

                    {/* <div className='row my-5'>
                      <div className='col-lg-12 d-flex align-items-start mb-4'>
                        <i className='bi bi-cloud-rain me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5'>Plants needs rain</h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-12 d-flex align-items-start mb-4'>
                        <i className='bi bi-heart me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5'>Love organic foods</h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-12 d-flex align-items-start'>
                        <i className='bi bi-shop me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5'>Sell vegies</h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logo section */}
        <section className='logo-section'>
          <div
            className='container-fluid section-title'
            data-aos='fade-up'></div>

          <div className='container-fluid'>
            <div className='row g-0'>
              <div className='slider'>
                <div className='slide-track'>
                  <div className='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div className='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div className='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Logo section end */}

        {/* /About Section */}
      </main>
    </>
  );
};

export default Slider;
