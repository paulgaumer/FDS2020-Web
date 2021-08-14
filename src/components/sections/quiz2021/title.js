import React from 'react';
import styled from 'styled-components';
import ProgressBar from './progressBar';

const TitleSC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .progress-bar-container {
    flex-shrink: 0;
  }

  .text-container {
    flex-grow: 1;
  }
`;

const Title = ({ title, questionNumber, totalQuestions }) => {
  return (
    <TitleSC>
      <div className="progress-bar-container">
        <ProgressBar
          size={80}
          roundedStroke={true}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
        />
      </div>
      <div className="text-container">
        <h3 className="inline-flex items-center space-x-1 text-xl font-bold tracking-tight text-gray-700 md:text-2xl">
          {title}
        </h3>
      </div>
    </TitleSC>
  );
};

export default Title;
