import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlFor from '../../../utils/sanityImageUrl';

const departments = [
  { code: '49', title: '49 - Maine et Loire' },
  { code: '44', title: '44 - Loire Atlantique' },
  { code: '53', title: '53 - Mayenne' },
  { code: '72', title: '72 - Sarthe' },
  { code: '85', title: '85 - Vendée' },
];

const Answer = ({ hasCorrectAnswer, options, answerDetails, nextLink }) => {
  return (
    <>
      <div
        className="flex flex-col items-center w-full p-6 mt-6 rounded-md lg:w-3/4 md:mt-8"
        style={{ backgroundColor: hasCorrectAnswer ? '#edfff7' : '#fdf1f1' }}
      >
        {hasCorrectAnswer && (
          <p className="mb-6 font-bold text-gray-700">
            {'🎉 Bonnes réponses 🎉'}
          </p>
        )}
        {!hasCorrectAnswer && (
          <>
            <p className="mb-4 text-gray-800">Les bonnes réponses étaient:</p>
            <ul className="flex flex-col mb-8 space-y-2 list-disc">
              {options.map((o) => {
                return (
                  <li className="">
                    {o.title}:{' '}
                    <span className="font-bold text-gray-700">
                      {departments.find((d) => d.code === o.answer).title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
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
    </>
  );
};

const QuestionBody = ({ question, questionNumber, totalQuestions }) => {
  const { options, answerDetails } = question;
  const [hasCorrectAnswer, setHasCorrectAnswer] = useState(null);
  const answerCompProps = {
    hasCorrectAnswer,
    answerDetails,
    options,
  };

  const nextLink = () => {
    const base = '/quiz-21/';
    if (questionNumber + 1 === totalQuestions) {
      return { url: base + 'jouer', text: 'Participer au tirage au sort' };
    } else {
      return {
        url: base + `${questionNumber + 1}`,
        text: 'Prochaine Question',
      };
    }
  };

  const checkAnswers = (userAnswers) => {
    let correctAnswers = 0;
    for (const [key, value] of Object.entries(userAnswers)) {
      const officialAnswer = options.find((o) => o.title === key).answer;
      if (value === officialAnswer) correctAnswers += 1;
    }
    setHasCorrectAnswer(correctAnswers === options.length);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    checkAnswers(data);
  };

  return (
    <div
      className={`flex flex-col items-center w-full lg:p-6 rounded-md mt-10 ${
        hasCorrectAnswer !== null ? '' : 'bg-gray-100'
      }`}
    >
      {/* **** FORM **** */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div
          className={`flex flex-col xl:flex-row xl:flex-wrap items-start justify-center w-full`}
        >
          {options &&
            options.map((op) => {
              const img = urlFor(op.picture);
              return (
                <div
                  key={op._key}
                  className={`flex flex-col items-center md:items-start md:flex-row justify-center w-full xl:w-1/2 mb-12 md:space-x-4`}
                >
                  {img && (
                    <img
                      src={img}
                      alt={img.alt}
                      className="w-full rounded-md md:w-1/2 xl:h-48"
                    />
                  )}
                  <div className="flex flex-col space-y-3">
                    <label className="mt-3 font-bold text-center text-gray-700 md:text-left md:mt-0">
                      {op.title}
                    </label>
                    <select
                      className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer"
                      {...register(`${op.title}`, { required: true })}
                    >
                      <option value="">- </option>
                      {departments.map((dp) => (
                        <option key={dp.code} value={dp.code}>
                          {dp.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
        {hasCorrectAnswer === null && (
          <div className="flex justify-center">
            <input
              type="submit"
              value="Valider"
              className="inline-flex items-center justify-center px-4 py-2 mb-6 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer lg:mb-0 bg-primary"
            />
          </div>
        )}
      </form>

      {/* **** ANSWER **** */}
      {hasCorrectAnswer !== null && (
        <Answer {...answerCompProps} nextLink={nextLink()} />
      )}
    </div>
  );
};

export default QuestionBody;
