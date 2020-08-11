import React from 'react';
import { Link } from 'gatsby';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const ContactSection = ({ logos }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-20">
        <div className="flex flex-col items-center space-y-14">
          <p className="px-40 text-lg text-center text-gray-700">
            Interessé pour participer à la prochaine édition en tant que porteur
            de projet, ou bien en tant que partenaire ? N’hésitez pas à nous
            contacter pour toutes vos questions.
          </p>

          <span class="inline-flex rounded-md shadow-sm">
            <Link
              to="/contact"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
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
