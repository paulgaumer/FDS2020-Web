import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';
import { useForm } from 'react-hook-form';

const Quiz21 = () => {
  const {
    register,
    handleSubmit,
    watch,
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
          <SectionTitle text={'Quiz Anniversaire 2021'} />
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

export default Quiz21;
