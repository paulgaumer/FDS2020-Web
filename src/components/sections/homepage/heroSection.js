import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import LogoFds from '../../../images/logo-fds-rouge.svg';
import styled from 'styled-components';

const ContentCenter = styled.div`
  h3 {
    font-size: 3.25rem;
  }
`;

const HeroSection = () => {
  return (
    <SectionWrapper backgroundColor="bg-teal-500">
      <SectionContainer>
        <ContentCenter
          data-name="content-center"
          className="flex flex-col justify-center"
        >
          <img src={LogoFds} alt="fête de la science" />
          <div className="text-white">
            <h3 className="font-bold">Pays de la Loire</h3>
            <p className="uppercase text-3xl">02 Octobre - 12 Octobre 2020</p>
          </div>
        </ContentCenter>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
