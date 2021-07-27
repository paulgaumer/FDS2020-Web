import React, { useState } from 'react';
import { Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlFor from '../../../utils/sanityImageUrl';

const Answer = ({ isCorrect, correctAnswer, answerDetails, nextLink }) => {
  return (
    <>
      <div
        className="flex flex-col items-center w-3/4 p-6 rounded-md mt-14"
        style={{ backgroundColor: isCorrect ? '#edfff7' : '#fdf1f1' }}
      >
        {isCorrect && (
          <p className="mb-6 font-bold text-gray-700">
            {'🎉 Bonne réponse 🎉'}
          </p>
        )}
        {!isCorrect && (
          <p className="mb-4 text-gray-800">
            La bonne réponse était:{' '}
            <span className="font-bold">{correctAnswer}</span>
          </p>
        )}
        {answerDetails && (
          <div className="text-gray-800">
            <PortableText blocks={answerDetails} serializers={serializers} />
          </div>
        )}
      </div>
      <Link
        to={nextLink}
        className="inline-flex items-center justify-center px-4 py-2 mt-6 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
      >
        Prochaine question
      </Link>
    </>
  );
};

const QuestionBody = ({ question, questionNumber, totalQuestions }) => {
  const { answerDetails, options } = question;
  const correctAnswer = options.find((o) => o.answer === true).title;
  const [selectedAnswer, setSelectedAnser] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const answerCompProps = {
    isCorrect,
    correctAnswer,
    answerDetails,
  };

  const nextLink = () => {
    const base = '/quiz-21/';
    if (questionNumber + 1 === totalQuestions) {
      return base + 'submit';
    } else {
      return base + `${questionNumber + 1}`;
    }
  };

  const handleSelect = (op) => {
    if (!isSubmitted) setSelectedAnser(op);
  };

  const handleSubmit = () => {
    setIsCorrect(selectedAnswer?.answer || false);
    setIsSubmitted(true);
  };

  const selectedBorder = `border-2 rounded-md ${
    isSubmitted && !isCorrect ? 'border-red-500' : 'border-primary'
  }`;

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="grid items-center justify-center w-full grid-cols-3 gap-4 mt-10">
        {options &&
          options.map((op) => {
            const img = urlFor(op.picture);
            if (img) {
              return (
                <div
                  key={op._key}
                  onClick={() => handleSelect(op)}
                  className={`flex flex-col items-center justify-center py-4 ${
                    selectedAnswer?.title === op.title ? selectedBorder : ''
                  }`}
                >
                  <img src={img} alt="sda" className="w-3/4 rounded-md" />
                  <p className="mt-6 text-lg font-medium text-gray-700">
                    {op.title}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>

      {isCorrect === null && (
        <button
          onClick={handleSubmit}
          className="inline-flex items-center justify-center px-4 py-2 mt-12 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
        >
          Valider
        </button>
      )}
      {/* **** ANSWER **** */}
      {isCorrect !== null && (
        <Answer {...answerCompProps} nextLink={nextLink()} />
      )}
    </div>
  );
};

export default QuestionBody;
