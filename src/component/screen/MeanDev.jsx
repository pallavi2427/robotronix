import meanLogo from "./../../assets/img/MEAN-Stack.jpg";
import section5Image from "./../../assets/img/mean-section5-img.jpg";

const MeanDev = () => {
  const cardData = [
    {
      heading: "MongoDB for storage",
      content:
        "MongoDB is an open-source NoSQL database that allows enterprises to be more agile and expandable. MongoDB has a flexible structure and can support a variety of formats of data.",
    },
    {
      heading: "ExpressJs for web programming",
      content:
        "Express.JS is a lightweight but adaptable Node.JS web-based application framework that gives us a wide range of capabilities to create single-page web applications and multipage web and mobile apps. Node.JS facilitates routing.",
    },
    {
      heading: "AngularJS for front-end development",
      content:
        "AngularJS is an open-source web application framework designed for dynamic web applications, which allows you to expand the capabilities of your HTML language application. This JavaScript-developed development framework is clear and easy to read and build.",
    },
    {
      heading: "NodeJS for Web Server",
      content:
        "Node JS is an open-source, cross-platform used to create efficient and scalable server-side apps. Node.JS apps are developed with Google’s V8 JavaScript Engine, with an extensive JavaScript modules library.",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        {/* first section start */}
        <div className="row mean-section1">
          <div className="col-6 section-divide">
            <div className="content">
              <h1>MEAN Stack Development Company</h1>
              <p>
                One stack that harnesses the powerful capabilities of four
                different platforms. Use the MVP design of MEAN Stack to build
                powerful web-based experiences.
              </p>
              <br />
              <br />

              <button type="button" class="btn btn-lg">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="col-6 section-divide">
            <div className="mean-img">
              <img src={meanLogo} alt="Mean Logo" />
            </div>
          </div>
        </div>
        {/* first section end */}
        {/* second section start */}
        <div className="row mean-section2">
          <h1>The combination of fantastic four</h1>
          <p>
            The MEAN Stack, comprising MongoDB, Express.js, Angular, and
            Node.js, is a powerful combination of technologies that work
            seamlessly together to build dynamic, high-performance web
            applications. Each component plays a crucial role in delivering a
            full-stack development experience: MongoDB offers a scalable, NoSQL
            database; Express.js simplifies server-side development; Angular
            provides a robust front-end framework; and Node.js powers the
            backend with its event-driven, non-blocking I/O model. Together,
            these four technologies form a robust, efficient, and scalable
            solution for modern web development, making the MEAN Stack an ideal
            choice for developers seeking to create innovative, end-to-end
            applications.
          </p>
        </div>
        {/* second section end */}
        {/* third section start */}
        <div className="row mean-section3">
          <h1>Talk to expert</h1>
          <p>
            Robotronix has established itself as a leading name in MEAN Stack
            development, delivering exceptional products to clients worldwide.
            Since its inception, Robotronix has specialized in offering tailored
            MEAN Stack solutions, producing innovative and industry-defining
            products that reflect our creative approach and forward-thinking
            development strategies.
          </p>
          <button type="button" class="btn btn-lg">
            Reach out to learn more
          </button>
          <hr />
        </div>

        {/* third section end */}
        {/* fourth section start */}
        <div className="row mean-section4">
          <div className="tech-stack-section">
            <h1>Tech stack elements in MEAN</h1>
            <p>
              The MEAN Stack is a popular and versatile full-stack JavaScript
              framework designed for building dynamic web applications. MEAN
              stands for MongoDB, Express JS, Node JS.
            </p>
          </div>
          <div className="cards-section">
            {cardData.map((item) => {
              return (
                <>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h2>{item.heading}</h2>
                      </div>
                      <div className="flip-card-back">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* fourth section end */}
        {/* fifth section start */}
        <div className="row mean-section5">
          <div className="col-6 hiring-image">
            <img src={section5Image} alt="Hiring" />
          </div>
          <div className="col-6 content">
            <h1>
              Bring on board expert <br /> MEAN stack developers
            </h1>
            <br />
            <p>
              At Robotronix, our MEAN Stack specialists leverage the full
              potential of JavaScript technologies, utilizing cutting-edge tools
              and staying ahead of the latest market trends to deliver
              exceptional solutions. Our expert MEAN Stack team is equipped to
              provide tailored solutions for any industry, whether it's
              entertainment, eCommerce, banking, healthcare, or beyond, ensuring
              that each project aligns perfectly with our clients' unique needs
              and objectives.
            </p>
            <button type="button" class="btn btn-lg">
                Get in Touch
              </button>
          </div>
        </div>
        {/* fifth section end */}
      </div>
    </>
  );
};

export default MeanDev;
