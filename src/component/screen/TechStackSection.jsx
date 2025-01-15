import React from 'react';

const TechStackSection = ({title,content, cardData }) => {
  return (
    <div className="row mean-section4">
      <div className="tech-stack-section">
        <h1>{title}</h1>
        <p>
          {content}
        </p>
      </div>
      <div className="cards-section">
        {cardData.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>{item.heading}</h2>
              </div>
              <div className="flip-card-back">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
