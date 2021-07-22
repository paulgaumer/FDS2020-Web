import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';

const QuestionSection = ({ question, questionNumber }) => {
  const { title, picture } = question;
  return (
    <div>
      <h3 className="inline-flex items-center space-x-1 text-xl font-bold tracking-tight text-gray-700 uppercase md:text-xl">
        <span>{questionNumber}</span>
        <span>- {question.title}</span>
      </h3>
      {/* {picture && <CustomGatsbyImage image={image} customClasses="h-full" />} */}
      {/* <img
        src={`https://cdn.sanity.io/images/xpg3ofue/production/085f24df5c8d0363314b7b932fd6b56e1412e79e.png`}
        alt="sda"
      /> */}
    </div>
  );
};

export default QuestionSection;
