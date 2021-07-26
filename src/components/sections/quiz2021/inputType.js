import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlFor from '../../../utils/sanityImageUrl';

const QuestionSection = ({ question, questionNumber, totalQuestions }) => {
  const { picture, answerDetails, answer } = question;
  const [hasCorrectAnswer, setHasCorrectAnswer] = useState(null);

  const nextLink = () => {
    const base = '/quiz-21/';
    if (questionNumber + 1 === totalQuestions) {
      return base + 'submit';
    } else {
      return base + `${questionNumber + 1}`;
    }
  };

  const checkAnswer = (userAnswer) => {
    const cleanUserAnswer = userAnswer.toLowerCase();
    const cleanAnswer = answer.toLowerCase();

    if (cleanUserAnswer === cleanAnswer) {
      setHasCorrectAnswer(true);
    } else {
      setHasCorrectAnswer(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    checkAnswer(data.answer);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {picture && (
        <div className="flex justify-center w-full mt-10">
          {picture.map((pic) => {
            const img = urlFor(pic);
            if (img) {
              return (
                <img
                  key={pic._key}
                  src={img}
                  alt="sda"
                  className="w-1/2 rounded-md"
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}

      {hasCorrectAnswer === null && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-1/2 p-6 space-y-6 bg-gray-100 rounded-md mt-14"
        >
          <div className="flex flex-col items-center w-full">
            <label htmlFor="answer" className="mb-4 font-bold text-gray-700">
              Votre Réponse
            </label>
            <input
              id="answer"
              placeholder="entrer la solution"
              className="w-full px-4 py-2 shadow-sm"
              {...register('answer', { required: true })}
            />
            {errors.answer && (
              <span className="self-start pl-2 mt-1 text-sm text-red-600">
                {' '}
                * requis
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Valider"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
          />
        </form>
      )}

      {hasCorrectAnswer !== null && (
        <div className="flex flex-col items-center w-3/4 p-6 bg-gray-100 rounded-md mt-14">
          <p className="mb-6 font-bold text-gray-700">
            {hasCorrectAnswer
              ? '🎉 Bonne réponse 🎉'
              : '😕 Mauvaise réponse 😕'}
          </p>
          {!hasCorrectAnswer && (
            <p className="mb-4 text-gray-800">
              La bonne réponse était:{' '}
              <span className="font-bold">{answer}</span>
            </p>
          )}
          {answerDetails && (
            <div className="text-gray-800">
              <PortableText blocks={answerDetails} serializers={serializers} />
            </div>
          )}
          <a
            href={nextLink()}
            className="inline-flex items-center justify-center px-4 py-2 mt-6 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-md cursor-pointer bg-primary"
          >
            Prochaine question
          </a>
        </div>
      )}
    </div>
  );
};

export default QuestionSection;
