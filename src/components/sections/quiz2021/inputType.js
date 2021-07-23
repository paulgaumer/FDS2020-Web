import React from 'react';
import { useForm } from 'react-hook-form';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlFor from '../../../utils/sanityImageUrl';

const QuestionSection = ({ question, questionNumber, totalQuestion }) => {
  const { picture } = question;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {picture && (
        <div className="flex justify-center w-full mt-10">
          {picture.map((pic) => {
            const img = urlFor(pic);
            if (img) {
              return <img src={img} alt="sda" className="w-1/2 rounded-md" />;
            } else {
              return null;
            }
          })}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-1/2 mt-12 space-y-4"
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
    </div>
  );
};

export default QuestionSection;
