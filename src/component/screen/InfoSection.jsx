import React from 'react';

const InfoSection = ({ title, content }) => {
  return (
    <div className="row mean-section2">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default InfoSection;
