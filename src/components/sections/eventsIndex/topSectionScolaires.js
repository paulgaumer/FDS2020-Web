import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';

const TopSectionScolaires = ({
  villages,
  scolaires = false,
  topTitle = '',
  villageTitle,
  villageContent,
}) => {
  return (
    <SectionContainer customClasses="pt-32">
      <SectionTitle text={topTitle} />
      <Villages
        villages={villages}
        scolaires={scolaires}
        villageTitle={villageTitle}
        villageContent={villageContent}
      />
    </SectionContainer>
  );
};

export default TopSectionScolaires;
