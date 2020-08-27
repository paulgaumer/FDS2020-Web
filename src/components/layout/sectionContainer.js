import React from 'react';

const SectionContainer = ({ children, id, customClasses = '' }) => {
  return (
    <section
      data-name="section-container"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${customClasses}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
