import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';

const LogoGrid = styled.div`
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  & > div {
    /* background: black; */
    padding: 1 rem;
    display: flex;
    align-items: center;
  }
  /* Make div square */
  & > div::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }
  & > div > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const LocalPartnersSection = ({ logos }) => {
  return (
    <SectionContainer customClasses="pt-20 pb-40">
      <SectionTitle text={`Nos Partenaires Locaux`} />
      <LogoGrid className="grid gap-20">
        {logos.map((logo) => {
          return (
            <div className="">
              <Img
                fluid={logo.image.asset.fluid}
                imgStyle={{ objectFit: 'contain' }}
                alt={logo.name}
                key={logo.id}
              />
            </div>
          );
        })}
      </LogoGrid>
    </SectionContainer>
  );
};

export default LocalPartnersSection;
