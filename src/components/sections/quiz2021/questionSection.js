import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import Title from './title';
import InputType from './inputType';
import SelectType from './selectType';

const QuestionSection = ({ question, questionNumber, totalQuestions }) => {
  const { title, _type, description } = question;

  const props = {
    question,
    questionNumber,
    totalQuestions,
  };

  return (
    <div className="flex flex-col items-center px-10 py-12 bg-white rounded-lg shadow">
      <Title title={title} questionNumber={questionNumber} />
      {description && (
        <div className="mt-10 text-gray-800">
          <PortableText blocks={description} serializers={serializers} />
        </div>
      )}
      {_type === 'inputTypeQuestion' && <InputType {...props} />}
      {_type === 'selectTypeQuestion' && <SelectType {...props} />}
    </div>
  );
};

export default QuestionSection;
