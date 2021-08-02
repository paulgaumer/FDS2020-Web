import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import Title from './title';
import InputType from './inputType';
import SelectType from './selectType';
import AssociationType from './associationType';

const QuestionSection = ({ question, questionNumber, totalQuestions }) => {
  const { title, _type, description } = question;
  const hasDescription = description ? true : false;

  const props = {
    question,
    questionNumber,
    totalQuestions,
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white rounded-lg shadow md:px-10">
      <Title title={title} questionNumber={questionNumber} />
      {description && (
        <div className="mt-10 text-gray-800">
          <PortableText blocks={description} serializers={serializers} />
        </div>
      )}
      {_type === 'inputTypeQuestion' && <InputType {...props} />}
      {_type === 'associationTypeQuestion' && <AssociationType {...props} />}
      {_type === 'selectTypeQuestion' && (
        <SelectType {...props} hasDescription={hasDescription} />
      )}
    </div>
  );
};

export default QuestionSection;
