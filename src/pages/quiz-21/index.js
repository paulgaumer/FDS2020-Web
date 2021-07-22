import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';

const Quiz21Welcome = ({ data }) => {
  const { sectionTitle, _rawWelcomeText, startButton } = data.sanityQuiz2021;

  return (
    <Layout>
      <SEO title="Quiz 2021" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-20">
          <SectionTitle text={sectionTitle} />
          <div className="flex flex-col items-center">
            <PortableText blocks={_rawWelcomeText} serializers={serializers} />
            <a
              href=""
              className="px-4 py-2 mt-6 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out transform border border-transparent rounded-md cursor-pointer bg-primary hover:scale-105"
            >
              {startButton}
            </a>
          </div>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Quiz21Welcome;

export const query = graphql`
  query Quiz21Welcome {
    sanityQuiz2021 {
      sectionTitle
      _rawWelcomeText
      startButton
    }
  }
`;
