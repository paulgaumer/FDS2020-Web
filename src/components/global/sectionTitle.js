import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  h1 {
    grid-template-columns: minmax(50px, 1fr) auto minmax(50px, 1fr);
    align-items: center;
    text-align: center;
    grid-gap: 30px;
    width: 100%;
  }

  @media (min-width: 768px) {
    h1:before,
    h1:after {
      content: '';
      border-top: 3px solid;
    }
  }
`;

const SectionTitle = ({ text, color = '#333' }) => {
  return (
    <Title className="flex-col justify-center pb-20 md:mx-auto md:max-w-4xl md:block">
      <h1
        className="text-3xl tracking-normalmd:text-4xl md:grid"
        style={{ color }}
      >
        {text}
      </h1>
      <div className="w-auto h-1 mx-6 mt-4 rounded md:hidden bg-secondary" />
    </Title>
  );
};

export default SectionTitle;
