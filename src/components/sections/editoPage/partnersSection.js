import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';

const PartnersGrid = ({ title, images }) => {
  return (
    <div className="md:grid" style={{ gridTemplateColumns: 'auto 1fr' }}>
      <h2 className="mb-10 text-xl text-center text-gray-500 underline uppercase md:no-underline md:border-t-2 md:text-left border-secondary">
        {`${title}`}
      </h2>
      <LogosGrid logos={images} />
    </div>
  );
};

const PartnersSection = ({
  partnersTitle,
  organizersTitle,
  logosOrganizers,
  coordinationTitle,
  logosCoordination,
}) => {
  return (
    <SectionWrapper backgroundColor="bg-white">
      <SectionContainer customClasses="pt-16 pb-16 md:py-20 lg:pb-40">
        <SectionTitle text={partnersTitle} />
        <div className="flex flex-col space-y-28">
          <PartnersGrid title={organizersTitle} images={logosOrganizers} />
          <PartnersGrid title={coordinationTitle} images={logosCoordination} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default PartnersSection;
