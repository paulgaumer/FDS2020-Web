import React from 'react';
import ProgressBar from './progressBar';

const Title = ({ title, questionNumber, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center w-full space-y-6 sm:space-y-0 sm:space-x-6 sm:flex-row">
      <div className="flex-shrink-0 progress-bar-container">
        <ProgressBar
          size={80}
          roundedStroke={true}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
        />
      </div>
      <div className="flex-grow text-container">
        <h3 className="inline-flex items-center space-x-1 text-xl font-bold tracking-tight text-center text-gray-700 md:text-2xl sm:text-left">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Title;
