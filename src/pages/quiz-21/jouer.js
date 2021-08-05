import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { useForm } from 'react-hook-form';
import format from 'date-fns/format';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';

const Error = () => (
  <span className="pl-2 mt-1 text-sm font-normal text-red-600">* requis</span>
);

const Quiz21Submit = ({ data }) => {
  const { sectionTitle, _rawSubmitText } = data.sanityQuiz2021;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const inputStyles =
    'px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700';
  const labelStyles = 'mb-2 text-sm font-bold text-gray-800';

  //Handle Form & Submit
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const canSubmit = watch('termsConditions');

  const onSubmit = (data) => {
    const date = format(new Date(), 'yyyy-MM-dd kk:mm');

    fetch('/.netlify/functions/sendQuiz21ToGoogleSheet', {
      method: 'POST',
      body: JSON.stringify({
        PRENOM: data.firstName,
        NOM: data.lastName,
        AGE: data.age,
        EMAIL: data.email,
        TEL: data.tel,
        ADRESSE: data.address,
        DEPARTEMENT: data.department,
        DATE: date,
      }),
    });
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="Quiz 2021" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32">
          <SectionTitle text={sectionTitle} />
          <div className="flex flex-col items-center px-4 py-12 bg-white rounded-lg shadow md:px-10">
            <div>
              <PortableText blocks={_rawSubmitText} serializers={serializers} />
            </div>
            <div className="w-full md:w-2/3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-4 space-y-6 md:mt-10"
              >
                <div className="lg:flex lg:justify-between lg:space-x-6">
                  <div className="flex flex-col lg:flex-grow">
                    <label className={labelStyles} htmlFor="firstName">
                      Prénom {errors.firstName && <Error />}
                    </label>
                    <input
                      id="firstName"
                      placeholder="Albert"
                      className={inputStyles}
                      {...register('firstName', { required: true })}
                    />
                  </div>

                  <div className="flex flex-col mt-6 lg:mt-0 lg:flex-grow">
                    <label className={labelStyles} htmlFor="lastName">
                      Nom {errors.lastName && <Error />}
                    </label>
                    <input
                      id="lastName"
                      placeholder="Einstein"
                      className={inputStyles}
                      {...register('lastName', { required: true })}
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-6 lg:mt-0">
                  <label className={labelStyles} htmlFor="age">
                    Age {errors.age && <Error />}
                  </label>
                  <select
                    id="age"
                    className={inputStyles}
                    {...register('age', { required: true })}
                  >
                    <option value="">- </option>
                    <option value="6-12">6 - 12 ans</option>
                    <option value="13-18">13 - 18 ans</option>
                    <option value="19-25">19 - 25 ans</option>
                    <option value="25-55">25 - 55 ans</option>
                    <option value="55+">55 ans et plus</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className={labelStyles} htmlFor="email">
                    Email {errors.email && <Error />}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={inputStyles}
                    placeholder="adresse@email.com"
                    {...register('email', { required: true })}
                  />
                </div>

                <div className="flex flex-col">
                  <label className={labelStyles} htmlFor="tel">
                    Téléphone {errors.tel && <Error />}
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    className={inputStyles}
                    placeholder="06xxxxxxxx"
                    {...register('tel', { required: true })}
                  />
                </div>

                <div className="lg:flex lg:justify-between lg:space-x-6">
                  <div className="flex flex-col lg:flex-grow">
                    <label className={labelStyles} htmlFor="address">
                      Adresse {errors.address && <Error />}
                    </label>
                    <input
                      id="address"
                      className={inputStyles}
                      placeholder="5 Av. Anatole France, 49000 Angers"
                      {...register('address', { required: true })}
                    />
                  </div>

                  <div className="flex flex-col mt-6 lg:mt-0">
                    <label className={labelStyles} htmlFor="department">
                      Département {errors.department && <Error />}
                    </label>
                    <select
                      id="department"
                      className={inputStyles}
                      {...register('department', { required: true })}
                    >
                      <option value="">- </option>
                      <option value="49">Maine et Loire</option>
                      <option value="44">Loire Atlantique</option>
                      <option value="53">Mayenne</option>
                      <option value="72">Sarthe</option>
                      <option value="85">Vendée</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex flex-col mt-3 md:mt-8">
                    <div className="flex items-start space-x-3">
                      <input
                        id="termsConditions"
                        type="checkbox"
                        className={`mt-1 flex-shrink-0`}
                        {...register('termsConditions', { required: true })}
                      />
                      <label
                        className="text-sm text-gray-800"
                        htmlFor="termsConditions"
                      >
                        Je reconnais avoir lu les{' '}
                        <Link to="/quiz-21/conditions" className="underline">
                          conditions d'utilisation
                        </Link>{' '}
                        et accepte que mes données soient recueillies par la
                        Fete de la Science {errors.termsConditions && <Error />}
                      </label>
                    </div>
                  </div>
                  {!formSubmitted && (
                    <input
                      type="submit"
                      value="Envoyer"
                      className={`flex items-center justify-center w-full px-4 py-2 mt-4 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-primary ${
                        canSubmit ? 'cursor-pointer' : 'opacity-50'
                      }`}
                    />
                  )}
                  {formSubmitted && (
                    <p
                      className={`flex items-center justify-center w-full px-4 py-2 mt-4 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out rounded-md border-2 border-primary`}
                    >
                      Merci, votre participation a bien été enregistrée
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Quiz21Submit;

export const query = graphql`
  query Quiz21Submit {
    sanityQuiz2021 {
      sectionTitle
      _rawSubmitText
    }
  }
`;
