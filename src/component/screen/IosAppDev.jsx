import blueBgImg from "./../../assets/img/plain-blue-image.jpg";

const IosAppDev = () => {
  return (
    <>
      <div className="container-fluid">
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
      </div>
    </>
  );
};

export default IosAppDev;
