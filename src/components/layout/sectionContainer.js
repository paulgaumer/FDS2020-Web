import React from 'react';

const SectionContainer = ({ children, customClasses }) => {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${customClasses}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
