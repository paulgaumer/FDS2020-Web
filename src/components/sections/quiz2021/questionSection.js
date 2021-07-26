import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import Title from './title';
import InputType from './inputType';

const QuestionSection = ({ question, questionNumber, totalQuestions }) => {
  const { title, _type } = question;

  const props = {
    question,
    questionNumber,
    totalQuestions,
  };

  return (
    <div className="flex flex-col items-center py-12 bg-white rounded-lg shadow">
      <Title title={title} questionNumber={questionNumber} />
      {_type === 'inputTypeQuestion' && <InputType {...props} />}
    </div>
  );
};

export default QuestionSection;
