import React from "react";
import { useNavigate } from "react-router-dom";

const ExpertTalkSection = ({    content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };
  return (
    <div className="row mean-section3">
      <h1>Talk to Expert</h1>
      <p>{content}</p>
      <button type="button" className="btn btn-lg" onClick={handleClick}>
        Reach out to learn more
      </button>
      <hr />
    </div>
  );
};

export default ExpertTalkSection;
