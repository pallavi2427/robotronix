import blueBgImg from "./../../assets/img/plain-blue-image.jpg";
import ecommerceLogo from "./../../assets/img/ecommerce.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IosAppDev = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [activeIndex, setActiveIndex] = useState(null);

  // Define the tab list
  const tabs = ["home", "profile", "contact", "new"];

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Set interval to change tab every 3 seconds
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length; // Loop back to the first tab
        return tabs[nextIndex];
      });
    }, 3000); // Change tab every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [tabs]);

  const blueShades = ["#001f3d", "#003c66", "#00559e", "#0074d9"];

  const darkBlue = "#003c66"; // Define a specific dark blue color
  const [currentColor, setCurrentColor] = useState(blueShades[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        const randomColor =
          blueShades[Math.floor(Math.random() * blueShades.length)];
        setCurrentColor(randomColor);
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true); // Stop color change and set to dark blue on hover
    setCurrentColor(darkBlue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume color changing when mouse leaves
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Data = [
    {
      heading: "E-commerce Web Development",
      content:
        "Serve a wider audience with a top e-commerce web app development company. Our e-commerce solutions are designed to cut overhead costs on inventory management, boost sales cycles, and deliver personalized shopping experiences.",
      image: ecommerceLogo,
    },
    {
      heading: "E-commerce Web Development",
      content:
        "Serve a wider audience with a top e-commerce web app development company. Our e-commerce solutions are designed to cut overhead costs on inventory management, boost sales cycles, and deliver personalized shopping experiences.",
      image: ecommerceLogo,
    },
    {
      heading: "E-commerce Web Development",
      content:
        "Serve a wider audience with a top e-commerce web app development company. Our e-commerce solutions are designed to cut overhead costs on inventory management, boost sales cycles, and deliver personalized shopping experiences.",
      image: ecommerceLogo,
    },
    {
      heading: "E-commerce Web Development",
      content:
        "Serve a wider audience with a top e-commerce web app development company. Our e-commerce solutions are designed to cut overhead costs on inventory management, boost sales cycles, and deliver personalized shopping experiences.",
      image: ecommerceLogo,
    },
  ];
  return (
    <>
      <div className="container-fluid web-dev">
        <div className="row first-section">
          <div className="bg-img">
            <img src={blueBgImg} alt="" />
          </div>
          <div className="row content-box">
            <div className="col-7 content">
              <h1>Web Development Service</h1>
              <p>
                Custom Web Development Services Company - Trusted by top website
                & web development agency, web development companies and fortune
                500s
              </p>
            </div>
            <div className="col-5 content-box-img">
              <img
                src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150038835.jpg?t=st=1737616540~exp=1737620140~hmac=a1755728632a745d6add1ab5ff1493411edaa6dfeef447d3032182a3a1237ccd&w=1380"
                alt=""
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row second-section">
            <h1>Web Application Development Services</h1>
            <p>
              The website is the face of any business, an engine of its growth,
              and the platform where customers interact directly with the
              business. Partnering with a top web app development company makes
              your business web-ready. Softude has been creating new-age web
              experiences, converting every user interaction into a business
              success.
            </p>
            <div className="services-cards-section">
              {Data.map((item) => {
                return (
                  <>
                    <div className="service-card">
                      <div className="ecommerce-logo">
                        <img src={item.image} alt="" />
                      </div>
                      <h3>{item.heading}</h3>
                      <p>{item.content}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row third-section">
          <ul
            className="nav nav-pills mb-3 w-100"
            id="pills-tab"
            role="tablist"
          >
            <li
              className="nav-item"
              role="presentation"
              style={{ width: "25%" }}
            >
              <button
                className="nav-link active w-100 btn-primary"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Spark Business Value
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              style={{ width: "25%" }}
            >
              <button
                className="nav-link w-100 btn-primary"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Foster Resilience
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              style={{ width: "25%" }}
            >
              <button
                className="nav-link w-100 btn-primary"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Revolutionize and Motivate
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              style={{ width: "25%" }}
            >
              <button
                className="nav-link w-100 btn-primary"
                id="pills-new-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-new"
                type="button"
                role="tab"
                aria-controls="pills-new"
                aria-selected="false"
              >
                Evolve and Flourish
              </button>
            </li>
          </ul>
          <div
            className="tab-content"
            id="pills-tabContent"
            style={{
              padding: "10px 400px",
              position: "relative",
              bottom: "40px",
            }}
          >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="tab-content">
                <h2>Spark Business Value</h2>
                <p>
                  Leverage AI and ML technologies to fully unlock your
                  business's potential, driving exceptional value. We prioritize
                  delivering measurable outcomes that boost efficiency, increase
                  productivity, and enhance profitability.
                </p>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="tab-content">
                <h2>Foster Resilience</h2>
                <p>
                  Leverage AI and ML technologies to fully unlock your
                  business's potential, driving exceptional value. We prioritize
                  delivering measurable outcomes that boost efficiency, increase
                  productivity, and enhance profitability.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="tab-content">
                <h2>Revolutionize and Motivate</h2>
                <p>
                  Leverage AI and ML technologies to fully unlock your
                  business's potential, driving exceptional value. We prioritize
                  delivering measurable outcomes that boost efficiency, increase
                  productivity, and enhance profitability.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-new"
              role="tabpanel"
              aria-labelledby="pills-new-tab"
            >
              <div className="tab-content">
                <h2>Evolve and Flourish</h2>
                <p>
                  Leverage AI and ML technologies to fully unlock your
                  business's potential, driving exceptional value. We prioritize
                  delivering measurable outcomes that boost efficiency, increase
                  productivity, and enhance profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row fourth-section">
            <h2>Reasons Why Our Clients Trust Us</h2>
            <div className="client-reasons">
              <div className="reason">
                <h3>Industry Recognition</h3>
                <p>
                  Recognized as the best software development company, and top
                  web developer for the automotive, financial, and e-commerce
                  industry by Designrush, Clutch, MSME Government of India.
                </p>
              </div>
              <div className="reason">
                <h3>Industry Recognition</h3>
                <p>
                  Recognized as the best software development company, and top
                  web developer for the automotive, financial, and e-commerce
                  industry by Designrush, Clutch, MSME Government of India.
                </p>
              </div>
              <div className="reason">
                <h3>Industry Recognition</h3>
                <p>
                  Recognized as the best software development company, and top
                  web developer for the automotive, financial, and e-commerce
                  industry by Designrush, Clutch, MSME Government of India.
                </p>
              </div>
              <div className="reason">
                <h3>Industry Recognition</h3>
                <p>
                  Recognized as the best software development company, and top
                  web developer for the automotive, financial, and e-commerce
                  industry by Designrush, Clutch, MSME Government of India.
                </p>
              </div>
            </div>
            <button
              style={{
                backgroundColor: currentColor,
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                transition: "background-color 1.2s ease",
                fontWeight: "bold",
                width: "30%",
                marginLeft: "35%",
                marginTop: "10px",
                height: "50px",
                fontSize: "20px",
              }}
              onMouseEnter={handleMouseEnter} // Stop color change on hover
              onMouseLeave={handleMouseLeave} // Resume color change when mouse leaves
              onClick={() => navigate("/contact-us")}
            >
              Talk To Our Expert
            </button>
          </div>
          <div className="container">
            <div className="row fifth-section">
              <h2 id="faq-heading">FAQ's</h2>
              <div className="accordion">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === 0 ? "active" : ""
                      }`}
                      onClick={() => handleToggle(0)}
                      style={{color:"#2d465e"}}
                    >
                      Accordion Item #1
                      <span
                        className={`arrow ${activeIndex === 0 ? "down" : "up"}`}
                      >
                        ▼
                      </span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-body ${
                      activeIndex === 0 ? "show" : ""
                    }`}
                  >
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === 1 ? "active" : ""
                      }`}
                      onClick={() => handleToggle(1)}
                      style={{color:"#2d465e"}}
                    >
                      Accordion Item #2
                      <span
                        className={`arrow ${activeIndex === 1 ? "down" : "up"}`}
                      >
                        ▼
                      </span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-body ${
                      activeIndex === 1 ? "show" : ""
                    }`}
                  >
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === 2 ? "active" : ""
                      }`}
                      onClick={() => handleToggle(2)}
                      style={{color:"#2d465e"}}
                    >
                      Accordion Item #3
                      <span
                        className={`arrow ${activeIndex === 2 ? "down" : "up"}`}
                      >
                        ▼
                      </span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-body ${
                      activeIndex === 2 ? "show" : ""
                    }`}
                  >
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IosAppDev;
