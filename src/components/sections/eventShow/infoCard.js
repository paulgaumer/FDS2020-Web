import React from 'react';

const InfoCard = ({ children, title, customClasses, scolaires = false }) => {
  return (
    <div
      className={`relative max-w-5xl pt-24 mx-auto bg-white rounded-lg shadow ${customClasses}`}
    >
      <h2
        className={`absolute z-10 px-6 py-2 text-2xl font-bold text-gray-700 uppercase top-6 bg-primary -left-6 ${
          scolaires ? 'bg-edu' : 'bg-primary'
        }`}
      >
        {title}
      </h2>
      <div className="px-4 py-5 text-gray-500 sm:py-6 sm:px-10">{children}</div>
    </div>
  );
};

export default InfoCard;
