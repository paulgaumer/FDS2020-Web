import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LogoGrid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(10%, 100px));
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

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(10%, 150px));
  }
`;

const LogosGrid = ({ logos }) => {
  return (
    <LogoGrid className="grid gap-20">
      {logos.map((logo, i) => {
        return (
          <div className="" key={`${logo.name}-${i}`}>
            <Img
              fluid={logo.image.asset.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt={logo.name}
            />
          </div>
        );
      })}
    </LogoGrid>
  );
};

export default LogosGrid;
