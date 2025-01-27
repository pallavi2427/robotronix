import blueBgImg from "./../../assets/img/plain-blue-image.jpg";
import ecommerceLogo from "./../../assets/img/ecommerce.png";
import { useState,useEffect} from "react";

const IosAppDev = () => {
  const [activeTab, setActiveTab] = useState("home");

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
              style={{ width: "25%"}}
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
                className="nav-link w-100 btn-secondary"
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
                className="nav-link w-100 btn-success"
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
                className="nav-link w-100 btn-success"
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
          <div className="tab-content" id="pills-tabContent" style={{padding:"10px 400px",position:"relative",bottom:"40px"}}>
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="tab-content">
              <h2>Spark Business Value</h2>
              <p>
                Leverage AI and ML technologies to fully unlock your business's
                potential, driving exceptional value. We prioritize delivering
                measurable outcomes that boost efficiency, increase
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
                Leverage AI and ML technologies to fully unlock your business's
                potential, driving exceptional value. We prioritize delivering
                measurable outcomes that boost efficiency, increase
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
                Leverage AI and ML technologies to fully unlock your business's
                potential, driving exceptional value. We prioritize delivering
                measurable outcomes that boost efficiency, increase
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
                Leverage AI and ML technologies to fully unlock your business's
                potential, driving exceptional value. We prioritize delivering
                measurable outcomes that boost efficiency, increase
                productivity, and enhance profitability.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row fourth-section">
          <h2>Reasons Why Our Clients Trust Us</h2>
        </div>
      </div>
    </>
  );
};

export default IosAppDev;
