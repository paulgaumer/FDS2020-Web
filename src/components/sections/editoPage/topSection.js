import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Testimonial from './testimonial';

const TopSection = ({ topTitle, topContent, ambassadors }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pt-16 pb-0 md:py-20 lg:py-32">
        <SectionTitle text={topTitle} />
        <div className="text-lg leading-7 tracking-wide text-gray-500">
          <PortableText blocks={topContent} serializers={serializers} />
        </div>
        <div
          data-name="testimonials"
          className="flex flex-col py-20 space-y-24"
        >
          {ambassadors.map((ambassador, i) => {
            return (
              <Testimonial
                ambassador={ambassador}
                reverse={i % 2 !== 0}
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
