import blueBgImg from "./../../assets/img/plain-blue-image.jpg";
import ecommerceLogo from "./../../assets/img/ecommerce.png"

const IosAppDev = () => {
  const Data = [

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
              <p>Custom Web Development Services Company - Trusted by top website & web development agency, web development companies and fortune 500s</p>
            </div>
            <div className="col-5 content-box-img">
            <img src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150038835.jpg?t=st=1737616540~exp=1737620140~hmac=a1755728632a745d6add1ab5ff1493411edaa6dfeef447d3032182a3a1237ccd&w=1380" alt="" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row second-section">
            <h1>Web Application Development Services</h1>
            <p>The website is the face of any business, an engine of its growth, and the platform where customers interact directly with the business. Partnering with a top web app development company makes your business web-ready. Softude has been creating new-age web experiences, converting every user interaction into a business success.</p>
            <div className="services-cards-section">
              <div className="service-card">
                <div className="ecommerce-logo">
                <img src={ecommerceLogo} alt="" />
                </div>
                <h3>E-commerce Web Development</h3>
                <p>Serve a wider audience with a top e-commerce web app development company. Our e-commerce solutions are designed to cut overhead costs on inventory management, boost sales cycles, and deliver personalized shopping experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IosAppDev;
