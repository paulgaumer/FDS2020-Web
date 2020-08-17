import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  h1 {
    display: grid;
    grid-template-columns: minmax(70px, 1fr) auto minmax(70px, 1fr);
    align-items: center;
    text-align: center;
    grid-gap: 30px;
    width: 100%;
  }

  h1:before,
  h1:after {
    content: '';
    border-top: 3px solid;
  }
`;

const SectionTitle = ({ text, color = '#333' }) => {
  return (
    <Title className="max-w-4xl mx-auto">
      <h1
        className="pb-20 text-3xl tracking-normal md:text-4xl"
        style={{ color }}
      >
        {text}
      </h1>
    </Title>
  );
};

export default SectionTitle;
