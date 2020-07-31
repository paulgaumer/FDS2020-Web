import React from 'react';

const SectionWrapper = ({
  children,
  backgroundColor = 'bg-sectionBackground',
}) => {
  return (
    <div data-name="section-wrapper" className={`${backgroundColor}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
