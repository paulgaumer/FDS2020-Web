import React from 'react';

const Title = ({ title, questionNumber }) => {
  return (
    <div>
      <h3 className="inline-flex items-center space-x-1 text-xl font-bold tracking-tight text-gray-700 uppercase md:text-xl">
        <span>{questionNumber}</span>
        <span>- {title}</span>
      </h3>
    </div>
  );
};

export default Title;
