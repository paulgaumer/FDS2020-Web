import React from 'react';
import { Link } from 'gatsby';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlBuilder from '@sanity/image-url';
import SectionContainer from '../../layout/sectionContainer';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionTitle from '../../global/sectionTitle';

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: 'production',
  }).image(source);

const About = ({ features, featuresButton, featuresTitle }) => {
  return (
    <SectionWrapper>
      <div id="a-propos" style={{ position: 'relative', top: '-50px' }} />
      <SectionContainer customClasses="py-28">
        <div className="flex flex-col items-center">
          <SectionTitle text={featuresTitle} />

          <div className="flex flex-col pb-10 space-y-20 text-base leading-relaxed text-gray-500 md:text-lg">
            {features.map((f, i) => {
              return (
                <div
                  className={`flex flex-col items-center space-y-8  md:space-y-0 md:space-x-8 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse md:space-x-reverse'
                  }`}
                  key={f._key}
                >
                  {f.image && (
                    <CustomGatsbyImage
                      image={f.image}
                      alt="fête de la science illustration"
                      customClasses="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
                    />
                  )}
                  {!f.image && (
                    <img
                      src="http://placeimg.com/300/300/tech"
                      alt="fête de la science illustration"
                      customClasses="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
                    />
                  )}
                  <PortableText
                    blocks={f._rawFeature}
                    serializers={serializers}
                  />
                </div>
              );
            })}
          </div>
          <span className="inline-flex pt-8 rounded-md md:pt-14">
            <Link
              to="/editorial"
              className="inline-flex items-center px-4 py-2 text-xl font-medium leading-5 uppercase transition duration-150 ease-in-out border-2 rounded-sm border-primary text-primary hover:bg-primary hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-primary"
            >
              {featuresButton}
            </Link>
          </span>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default About;
