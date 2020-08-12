import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Testimonial from './testimonial';

const TopSection = ({ topTitle, topContent, ambassadors }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-20">
        <SectionTitle text={topTitle} />
        <div>
          <p className="leading-7 tracking-wide text-gray-700">{topContent}</p>
        </div>
        <div
          data-name="testimonials"
          className="flex flex-col py-20 space-y-24"
        >
          {ambassadors.map((ambassador, i) => {
            return (
              <Testimonial
                ambassador={ambassador}
                reverse={i % 2 === 0}
                key={ambassador.id}
              />
            );
          })}
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default TopSection;
