import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';
import LogosGrid from '../../components/global/logosGrid';
import CustomGatsbyImage from '../../components/global/customGatsbyImage';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';

const Quiz21Welcome = ({ data }) => {
  const {
    sectionTitle,
    bannerImage,
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
          {/* Top section */}
          {!bannerImage && <SectionTitle text={sectionTitle} />}
          {bannerImage && (
            <div className="pb-4 md:pb-8">
              <CustomGatsbyImage
                image={bannerImage}
                alt=""
                customClasses={`rounded-lg`}
              />
            </div>
          )}

          {/* White section */}
          <div className="flex flex-col items-center px-10 py-12 bg-white rounded-lg shadow">
            <PortableText blocks={_rawWelcomeText} serializers={serializers} />
            <Link
              to="/quiz-21/1"
              className="px-5 py-3 mt-6 text-xl font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out transform border border-transparent rounded-md cursor-pointer bg-primary hover:scale-105"
            >
              {startButton}
            </Link>

            {/* Sponsors */}
            {logosSponsors?.length > 0 && (
              <div className="flex flex-col self-start w-full mt-24 sponsors">
                {titleSponsors && (
                  <h4 className="self-start mt-0 mb-10 text-xl text-gray-700 border-b-2 border-secondary">
                    {titleSponsors}
                  </h4>
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
      bannerImage {
        asset {
          id
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
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
