import React from 'react';
import { Link } from 'gatsby';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const ContactSection = ({ contactContent }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-16 md:py-20">
        <div className="flex flex-col items-center space-y-12">
          <p className="text-lg text-center text-gray-700 lg:px-40">
            {contactContent}
          </p>
          <span class="inline-flex rounded-md shadow-sm">
            <Link
              to="/contact"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 uppercase font-bold"
            >
              Nous Contacter
            </Link>
          </span>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default ContactSection;
