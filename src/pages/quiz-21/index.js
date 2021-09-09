import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';
import LogosGrid from '../../components/global/logosGrid';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';

const Quiz21Welcome = ({ data }) => {
  const {
    sectionTitle,
    _rawWelcomeText,
    startButton,
    titleSponsors,
    logosSponsors,
  } = data.sanityQuiz2021;

  return (
    <Layout>
      <SEO title="Quiz 2021" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-20">
          <SectionTitle text={sectionTitle} />
          <div className="flex flex-col items-center px-10 py-12 bg-white rounded-lg shadow">
            <PortableText blocks={_rawWelcomeText} serializers={serializers} />
            <Link
              to="/quiz-21/1"
              className="px-4 py-2 mt-6 text-lg font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out transform border border-transparent rounded-md cursor-pointer bg-primary hover:scale-105"
            >
              {startButton}
            </Link>
            {logosSponsors?.length > 0 && (
              <div className="flex flex-col self-start w-full mt-24 sponsors">
                {titleSponsors && (
                  <h3 className="self-start my-10 mt-0 mb-10 text-2xl text-gray-700 border-b-2 border-secondary">
                    {titleSponsors}
                  </h3>
                )}
                <div className="self-center w-2/3">
                  <LogosGrid logos={logosSponsors} />
                </div>
              </div>
            )}
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
      titleSponsors
      logosSponsors {
        image {
          asset {
            id
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
