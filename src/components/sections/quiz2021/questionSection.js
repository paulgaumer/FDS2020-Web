import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import Title from './title';
import InputType from './inputType';

const QuestionSection = ({ question, questionNumber, totalQuestion }) => {
  const { title, _type } = question;
  const props = { question, questionNumber, totalQuestion };

  return (
    <div className="flex flex-col items-center">
      <Title title={title} questionNumber={questionNumber} />
      {_type === 'inputTypeQuestion' && <InputType {...props} />}
    </div>
  );
};

export default QuestionSection;
