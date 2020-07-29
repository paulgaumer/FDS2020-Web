import React from 'react';
import { Link } from 'gatsby';

import SectionTitle from '../../sectionTitle';

const About = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center ">
        <SectionTitle text="Qu'est ce que la Fête de la Science ?" />
        <div className="pb-10">
          <div className="flex flex-col space-y-8 items-center md:flex-row md:items-start md:space-y-0 md:space-x-8">
            <img
              src="http://placeimg.com/300/300/people"
              alt="fête de la science illustration"
              className="rounded-full w-32 h-32 border-2 border-secondary flex-shrink-0"
            />
            <p
              className="text-lg pb-10 leading-relaxed"
              style={{ color: '#535863' }}
            >
              Magna blandit dui dolor ipsum ac condimentum amet conubia urna,
              turpis elit mauris sed dictum tellus elementum libero commodo,
              dignissim nulla eget aenean tincidunt sociosqu quisque sociis.
              Nunc auctor dapibus ligula ullamcorper integer facilisi, arcu in
              rhoncus mauris hac accumsan tellus, platea penatibus id iaculis
              justo. Sollicitudin dapibus gravida erat vestibulum diam est
              laoreet consequat euismod habitasse massa sociis, luctus mi proin
              potenti curabitur praesent cum eros nisi sed ornare, commodo id
              ultricies leo penatibus ultrices accumsan tellus porttitor
              adipiscing aliquet.
            </p>
          </div>
          <div className="flex flex-col-reverse space-y-8 space-y-reverse items-center md:flex-row md:items-start md:space-y-0 md:space-x-8">
            <p
              className="text-lg pb-10 leading-relaxed"
              style={{ color: '#535863' }}
            >
              Magna blandit dui dolor ipsum ac condimentum amet conubia urna,
              turpis elit mauris sed dictum tellus elementum libero commodo,
              dignissim nulla eget aenean tincidunt sociosqu quisque sociis.
              Nunc auctor dapibus ligula ullamcorper integer facilisi, arcu in
              rhoncus mauris hac accumsan tellus, platea penatibus id iaculis
              justo. Sollicitudin dapibus gravida erat vestibulum diam est
              laoreet consequat euismod habitasse massa sociis, luctus mi proin
              potenti curabitur praesent cum eros nisi sed ornare, commodo id
              ultricies leo penatibus ultrices accumsan tellus porttitor
              adipiscing aliquet.
            </p>
            <img
              src="http://placeimg.com/300/300/people"
              alt="fête de la science"
              className="rounded-full w-32 h-32 border-2 border-secondary flex-shrink-0"
            />
          </div>
        </div>
        <span class="inline-flex rounded-md shadow-sm">
          <Link
            to="/editorial"
            class="inline-flex items-center px-4 py-2 border-2 border-primary text-xl leading-5 font-medium rounded-sm text-primary hover:bg-primary hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 uppercase"
          >
            en savoir plus
          </Link>
        </span>
      </div>
    </section>
  );
};

export default About;
