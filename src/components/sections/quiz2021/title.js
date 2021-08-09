import React from 'react';

const Title = ({ title, questionNumber, totalQuestions }) => {
  return (
    <div>
      <h3 className="inline-flex items-center space-x-1 text-xl font-bold tracking-tight text-gray-700 md:text-2xl">
        {questionNumber}/{totalQuestions} - {title}
      </h3>
    </div>
  );
};

export default Title;
