import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlFor from '../../../utils/sanityImageUrl';

const Answer = ({ isCorrect, correctAnswer, answerDetails, nextLink }) => {
  return (
    <div className="flex flex-col items-center w-3/4 ">
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
        to={nextLink.url}
        className="inline-flex items-center justify-center px-4 py-2 mt-6 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
      >
        {nextLink.text}
      </Link>
    </div>
  );
};

const OptionsWithImages = ({
  options,
  selectedAnswer,
  isSubmitted,
  isCorrect,
  handleSelect,
  handleSubmit,
}) => {
  const selectedBorder =
    isSubmitted && !isCorrect ? 'border-red-500' : 'border-primary';

  const handleClick = (op) => {
    handleSelect(op);
  };

  return (
    <>
      <div className="grid items-center justify-center w-full grid-cols-3 gap-4 p-6 mt-10 bg-gray-100 rounded-md">
        {options.map((op) => {
          const img = urlFor(op.picture);
          if (img) {
            return (
              <div
                key={op._key}
                onClick={() => handleClick(op)}
                className={`flex flex-col items-center justify-center py-4 border-2 rounded-md ${
                  selectedAnswer?.title === op.title
                    ? selectedBorder
                    : 'border-gray-100'
                }`}
              >
                <img
                  src={img}
                  alt={op.title}
                  className="w-3/4 rounded-md cursor-pointer"
                />

                {op.description && (
                  <p className="mt-6 font-medium text-center text-gray-700 cursor-pointer">
                    {op.description}
                  </p>
                )}
                {!op.description && (
                  <p className="px-4 mt-6 font-medium text-center text-gray-700 cursor-pointer">
                    {op.title}
                  </p>
                )}
              </div>
            );
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
    </>
  );
};

const OptionsForm = ({
  options,
  isCorrect,
  isSubmitted,
  handleFormSubmit,
  hasDescription,
}) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const cleanAnswer = data.answer === 'true' ? true : false;
    handleFormSubmit(cleanAnswer);
  };

  const optionsEven = options.length % 2 === 0;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col w-full items-center text-gray-800 bg-gray-100 rounded-md p-6 pt-16 ${
        hasDescription ? '' : 'mt-4'
      }`}
    >
      <div
        className={`flex flex-wrap items-start justify-center w-3/4 ${
          optionsEven ? 'w-3/4' : 'w-full'
        }`}
      >
        {options.map((op) => {
          return (
            <div
              key={op._key}
              className={`flex flex-col items-center ${
                optionsEven ? 'w-1/2 mb-12' : 'w-2/6'
              }`}
            >
              <input
                {...register('answer')}
                id={op._key}
                type="radio"
                value={op?.answer}
                disabled={isSubmitted}
                className="cursor-pointer"
              />
              <label
                htmlFor={op._key}
                className="px-6 mt-2 text-lg font-bold text-center cursor-pointer"
              >
                {op.title}
              </label>
            </div>
          );
        })}
      </div>
      {/* {errors.answer && (
        <p className="pl-2 mt-1 text-sm text-center text-red-600"> * requis</p>
      )} */}
      {isCorrect === null && (
        <input
          value="Valider"
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 mt-12 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
        />
      )}
    </form>
  );
};

const QuestionBody = ({
  question,
  questionNumber,
  totalQuestions,
  hasDescription,
}) => {
  const { answerDetails, options } = question;
  const correctAnswer = options.find((o) => o.answer === true)?.title;
  const optionsWithImages = options.every((o) => o.picture);

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
      return { url: base + 'jouer', text: 'Soumettre votre candidature' };
    } else {
      return {
        url: base + `${questionNumber + 1}`,
        text: 'Prochaine Question',
      };
    }
  };

  const handleSelect = (op) => {
    if (!isSubmitted) setSelectedAnser(op);
  };

  const handleOptionsImageSubmit = () => {
    setIsCorrect(selectedAnswer?.answer || false);
    setIsSubmitted(true);
  };

  const handleFormSubmit = (answer) => {
    console.log(answer);
    setIsCorrect(answer);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-full mt-8">
      {optionsWithImages && (
        <OptionsWithImages
          options={options}
          selectedAnswer={selectedAnswer}
          isSubmitted={isSubmitted}
          isCorrect={isCorrect}
          handleSelect={handleSelect}
          handleSubmit={handleOptionsImageSubmit}
        />
      )}
      {!optionsWithImages && (
        <OptionsForm
          options={options}
          isSubmitted={isSubmitted}
          isCorrect={isCorrect}
          hasDescription={hasDescription}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      {/* **** ANSWER **** */}
      {isCorrect !== null && (
        <Answer {...answerCompProps} nextLink={nextLink()} />
      )}
    </div>
  );
};

export default QuestionBody;
