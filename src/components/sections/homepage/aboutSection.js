import React from 'react';
import { Link } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import urlBuilder from '@sanity/image-url';
import SectionContainer from '../../layout/sectionContainer';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionTitle from '../../global/sectionTitle';

const urlFor = (source) =>
  urlBuilder({
    projectId: 'uql6kgt5',
    dataset: 'production',
  }).image(source);

const About = ({ features, featuresButton, featuresTitle }) => {
  return (
    <SectionWrapper>
      <div id="aboutSection" style={{ position: 'relative', top: '-50px' }} />
      <SectionContainer customClasses="py-28">
        <div className="flex flex-col items-center">
          <SectionTitle text={featuresTitle} />

          <div className="flex flex-col pb-10 space-y-20 text-base leading-relaxed text-gray-500 md:text-lg">
            {features.map((f, i) => {
              return (
                <div
                  className={`flex flex-col items-center space-y-8 md:items-start md:space-y-0 md:space-x-8 ${
                    i % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse md:space-x-reverse'
                  }`}
                >
                  <img
                    src={
                      f.image
                        ? urlFor(f.image.asset._ref)
                        : 'https://placeimg.com/300/300/tech'
                    }
                    alt="fête de la science illustration"
                    className="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
                  />
                  <PortableText blocks={f.feature} serializers={serializers} />
                </div>
              );
            })}
            {/* <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-8">
              <img
                src="https://placeimg.com/300/300/tech"
                alt="fête de la science illustration"
                className="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
              />
              <p className="" style={{ color: '#535863' }}>
                Magna blandit dui dolor ipsum ac condimentum amet conubia urna,
                turpis elit mauris sed dictum tellus elementum libero commodo,
                dignissim nulla eget aenean tincidunt sociosqu quisque sociis.
                Nunc auctor dapibus ligula ullamcorper integer facilisi, arcu in
                rhoncus mauris hac accumsan tellus, platea penatibus id iaculis
                justo. Sollicitudin dapibus gravida erat vestibulum diam est
                laoreet consequat euismod habitasse massa sociis, luctus mi
                proin potenti curabitur praesent cum eros nisi sed ornare,
                commodo id ultricies leo penatibus ultrices accumsan tellus
                porttitor adipiscing aliquet.
              </p>
            </div>
            <div className="flex flex-col-reverse items-center space-y-8 space-y-reverse md:flex-row md:items-start md:space-y-0 md:space-x-8">
              <p className="" style={{ color: '#535863' }}>
                Magna blandit dui dolor ipsum ac condimentum amet conubia urna,
                turpis elit mauris sed dictum tellus elementum libero commodo,
                dignissim nulla eget aenean tincidunt sociosqu quisque sociis.
                Nunc auctor dapibus ligula ullamcorper integer facilisi, arcu in
                rhoncus mauris hac accumsan tellus, platea penatibus id iaculis
                justo. Sollicitudin dapibus gravida erat vestibulum diam est
                laoreet consequat euismod habitasse massa sociis, luctus mi
                proin potenti curabitur praesent cum eros nisi sed ornare,
                commodo id ultricies leo penatibus ultrices accumsan tellus
                porttitor adipiscing aliquet.
              </p>
              <img
                src="https://placeimg.com/300/300/tech"
                alt="fête de la science"
                className="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
              />
            </div>
            <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-8">
              <img
                src="https://placeimg.com/300/300/tech"
                alt="fête de la science illustration"
                className="flex-shrink-0 w-32 h-32 border-2 rounded-full border-secondary"
              />
              <p className="" style={{ color: '#535863' }}>
                Magna blandit dui dolor ipsum ac condimentum amet conubia urna,
                turpis elit mauris sed dictum tellus elementum libero commodo,
                dignissim nulla eget aenean tincidunt sociosqu quisque sociis.
                Nunc auctor dapibus ligula ullamcorper integer facilisi, arcu in
                rhoncus mauris hac accumsan tellus, platea penatibus id iaculis
                justo. Sollicitudin dapibus gravida erat vestibulum diam est
                laoreet consequat euismod habitasse massa sociis, luctus mi
                proin potenti curabitur praesent cum eros nisi sed ornare,
                commodo id ultricies leo penatibus ultrices accumsan tellus
                porttitor adipiscing aliquet.
              </p>
            </div> */}
          </div>
          <span className="inline-flex pt-8 rounded-md shadow-sm md:pt-14">
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
