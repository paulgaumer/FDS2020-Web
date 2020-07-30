import React from 'react';

const SectionWrapper = ({
  children,
  backgroundColor = 'bg-sectionBackground',
}) => {
  return <div className={`${backgroundColor}`}>{children}</div>;
};

export default SectionWrapper;
