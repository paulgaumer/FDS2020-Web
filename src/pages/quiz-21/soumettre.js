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
          <div>
            <PortableText blocks={_rawSubmitText} serializers={serializers} />
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  placeholder="bibi"
                  {...register('name', { required: true })}
                />
                {errors.name && <span>requis</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="bibi@email.com"
                  {...register('email', { required: true })}
                />
                {errors.email && <span>requis</span>}
              </div>

              <input
                type="submit"
                value="Envoyer"
                className="inline-flex items-center px-4 py-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full cursor-pointer bg-primary"
              />
            </form>
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
