import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';

const PartnersGrid = ({ title, images }) => {
  return (
    <div className="md:grid" style={{ gridTemplateColumns: 'auto 1fr' }}>
      <h2 className="mb-10 text-xl text-center text-gray-600 underline uppercase md:no-underline md:border-t-2 md:text-left border-secondary">
        {`${title}`}
      </h2>
      <LogosGrid logos={images} />
    </div>
  );
};

const PartnersSection = ({
  partnersTitle,
  partnersContent,
  organizersTitle,
  logosOrganizers,
  coordinationTitle,
  logosCoordination,
}) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pt-16 pb-16 md:py-20">
        <SectionTitle text={partnersTitle} />
        <div className="text-base leading-7 tracking-wide text-gray-600 sm:text-lg">
          <PortableText blocks={partnersContent} serializers={serializers} />
        </div>
        <div className="flex flex-col pt-20 space-y-28">
          <PartnersGrid title={organizersTitle} images={logosOrganizers} />
          <PartnersGrid title={coordinationTitle} images={logosCoordination} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default PartnersSection;
