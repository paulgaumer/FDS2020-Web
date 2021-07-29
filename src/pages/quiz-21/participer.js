import React from 'react';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';

const Quiz21Submit = ({ data }) => {
  const { sectionTitle, _rawSubmitText } = data.sanityQuiz2021;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('.netlify/functions/sendQuiz21ToGoogleSheet', {
      method: 'POST',
      body: JSON.stringify({
        NAME: data.name,
        EMAIL: data.email,
      }),
    });
  };

  return (
    <Layout>
      <SEO title="Quiz 2021" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-20">
          <SectionTitle text={sectionTitle} />
          <div className="flex flex-col items-center px-10 py-12 bg-white rounded-lg shadow">
            <div>
              <PortableText blocks={_rawSubmitText} serializers={serializers} />
            </div>
            <div className="w-2/3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mt-10 space-y-6"
              >
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-bold text-gray-800"
                    htmlFor="firstname"
                  >
                    Prénom
                  </label>
                  <input
                    id="firstname"
                    placeholder="albert"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    {...register('prénom', { required: true })}
                  />
                  {errors.prénom && (
                    <span className="pl-2 mt-1 text-sm text-red-600">
                      * requis
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-bold text-gray-800"
                    htmlFor="lastname"
                  >
                    Nom
                  </label>
                  <input
                    id="lastname"
                    placeholder="einstein"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    {...register('nom', { required: true })}
                  />
                  {errors.nom && (
                    <span className="pl-2 mt-1 text-sm text-red-600">
                      * requis
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-bold text-gray-800"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="adresse@email.com"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="pl-2 mt-1 text-sm text-red-600">
                      * requis
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-bold text-gray-800"
                    htmlFor="tel"
                  >
                    Téléphone
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="06xxxxxxxx"
                    {...register('tel', { required: true })}
                  />
                  {errors.tel && (
                    <span className="pl-2 mt-1 text-sm text-red-600">
                      * requis
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-bold text-gray-800"
                    htmlFor="address"
                  >
                    Adresse
                  </label>
                  <input
                    id="address"
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="5 Av. Anatole France, 49000 Angers"
                    {...register('adresse', { required: true })}
                  />
                  {errors.adresse && (
                    <span className="pl-2 mt-1 text-sm text-red-600">
                      * requis
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <input
                    type="submit"
                    value="Envoyer"
                    className="inline-flex items-center w-full px-4 py-2 mt-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full cursor-pointer bg-primary"
                  />
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
