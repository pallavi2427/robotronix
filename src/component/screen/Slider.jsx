import React from "react";
import hero_1 from "./../../assets/img/Robotics-BG.jpg";
import hero_2 from "./../../assets/img/robotics.webp";
// import hero_3 from "./../../assets/img/hero_3.jpg";
// import hero_4 from "./../../assets/img/hero_4.jpg";
// import hero_5 from "./../../assets/img/hero_5.jpg";
import img_long_5 from "./../../assets/img/img_long_5.jpg";
import logoSlider from "./../../assets/img/force_logo_c11.png";
import logoSlider2 from "./../../assets/img/aictsl1.png";
import logoSlider3 from "./../../assets/img/fr1.png";
import logoSlider4 from "./../../assets/img/honda_logo1.png";
import logoSlider5 from "./../../assets/img/pinnacle1.png";
import logoSlider6 from "./../../assets/img/airport_authority_of_india1.png";
import logoSlider7 from "./../../assets/img/mpidc_logo1.png";
// import img_sq_1 from "./../../assets/img/img_sq_1.jpg";
// import img_sq_3 from "./../../assets/img/img_sq_3.jpg";
// import img_sq_4 from "./../../assets/img/img_sq_4.jpg";
// import img_sq_5 from "./../../assets/img/img_sq_5.jpg";
// import img_sq_6 from "./../../assets/img/img_sq_6.jpg";
// import img_sq_8 from "./../../assets/img/img_sq_8.jpg";

const Slider = () => {
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
              <img src={hero_1} alt='slider 1' className='' />
            </div>
            <div className='carousel-item slider_one' data-bs-interval='2000'>
              <img src={hero_2} alt='slider 2' className='' />
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

        {/* Logo section */}
        <section className='logo-section'>
          <div
            className='container-fluid section-title'
            data-aos='fade-up'></div>
          <div className='container-fluid'>
            <div className='row g-0'>
              <div class='slider'>
                <div class='slide-track'>
                  <div class='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider2} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider3} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider4} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider5} alt='' />
                  </div>
                  <div class='slide'>
                    <img src={logoSlider6} alt='' />
                  </div>

                  <div class='slide'>
                    <img src={logoSlider7} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Logo section end */}

        {/* About Section */}
        {/* <section id='about' className='about section'>
          <div id='about' className='about'>
            <div className='content'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 mb-4 mb-lg-0'>
                    <img
                      src={img_long_5}
                      alt=''
                      className='img-fluid img-overlap'
                      data-aos='zoom-out'
                    />
                  </div>
                  <div
                    className='col-lg-5 ml-auto'
                    data-aos='fade-up'
                    data-aos-delay={100}>
                    <h3 className='content-subtitle text-white opacity-50'>
                      Why Choose Us
                    </h3>
                    <h2 className='content-title mb-4'>
                      More than <strong>50 year experience</strong> in
                      agriculture industry
                    </h2>
                    <p className='opacity-50'>
                      Reprehenderit, odio laboriosam? Blanditiis quae ullam
                      quasi illum minima nostrum perspiciatis error consequatur
                      sit nulla.
                    </p>
                    <div className='row my-5'>
                      <div className='col-lg-12 d-flex align-items-start mb-4'>
                        <i className='bi bi-cloud-rain me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5 text-white'>
                            Plants needs rain
                          </h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-12 d-flex align-items-start mb-4'>
                        <i className='bi bi-heart me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5 text-white'>
                            Love organic foods
                          </h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-12 d-flex align-items-start'>
                        <i className='bi bi-shop me-4 display-6' />
                        <div>
                          <h4 className='m-0 h5 text-white'>Sell vegies</h4>
                          <p className='text-white opacity-50'>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /About Section */}
      </main>
    </>
  );
};

export default Slider;
