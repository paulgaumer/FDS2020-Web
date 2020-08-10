import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  h1 {
    display: grid;
    grid-template-columns: minmax(130px, 1fr) auto minmax(130px, 1fr);
    align-items: center;
    text-align: center;
    grid-gap: 20px;
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
    <Title>
      <h1 className="text-4xl pb-20 tracking-normal" style={{ color }}>
        {text}
      </h1>
    </Title>
  );
};

export default SectionTitle;
