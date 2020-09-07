import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';

const TopSection = ({
  villages,
  department,
  topTitle,
  villageTitle,
  villageContent,
}) => {
  return (
    <SectionContainer customClasses="pt-16 md:pt-20 lg:pt-32">
      <SectionTitle text={`${topTitle} ${department}`} />
      <Villages
        villages={villages}
        villageTitle={villageTitle}
        villageContent={villageContent}
      />
    </SectionContainer>
  );
};

export default TopSection;
