import React from 'react';
import { useNavigate } from 'react-router-dom';

const HiringSection = ({ imageSrc, title, content }) => {
   const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/contact-us");
      window.scrollTo(0, 0);
    };
  return (
    <div className="row mean-section5">
      <div className="col-6 hiring-image">
        <img src={imageSrc} alt="Hiring" />
      </div>
      <div className="col-6 content">
        <h1>{title}</h1>
        <br />
        <p>{content}</p>
        <button type="button" className="btn btn-lg" onClick={handleClick}>
        Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HiringSection;
