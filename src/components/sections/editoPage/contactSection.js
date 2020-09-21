import React from 'react';
import { Link } from 'gatsby';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const ContactSection = ({ contactContent, contactButton }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-16 md:py-20">
        <div className="flex flex-col items-center space-y-12">
          <p className="text-lg text-center text-gray-600 lg:px-40">
            {contactContent}
          </p>
          <span className="inline-flex rounded-md shadow-sm">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-bold leading-6 text-orange-900 uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-secondary hover:bg-secondary focus:outline-none focus:shadow-outline-indigo active:bg-secondary"
            >
              {contactButton}
            </Link>
          </span>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default ContactSection;
