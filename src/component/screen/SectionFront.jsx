import React from "react";
import { useNavigate } from "react-router-dom";

const SectionFront = ({ title, content, imageSrc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };
  return (
    <div className="row mean-section1">
      <div className="col-6 section-divide">
        <div className="content">
          <h1>{title}</h1>
          <p>{content}</p>
          <br />
          <button type="button" className="btn btn-lg" onClick={handleClick}>
            Get in Touch
          </button>
        </div>
      </div>
      <div className="col-6 section-divide">
        <div className="mean-img">
          <img src={imageSrc} alt="Mean Logo" />
        </div>
      </div>
    </div>
  );
};

export default SectionFront;
