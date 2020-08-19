import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import FeaturedLabel from '../../global/featuredLabel';

const FeaturedAboutSection = () => {
  return (
    <SectionContainer customClasses="pt-0 pb-10 md:pt-16 md:pb-20">
      <div className="flex justify-center">
        <div className="max-w-screen-md">
          <hr className="mb-16 text-center border-t-2 border-featured" />
          <div className="text-center">
            <h3 className="inline-flex items-center space-x-3 text-2xl font-bold tracking-tightuppercase text-featured">
              <span>Projet</span>
              <span>
                <FeaturedLabel customClasses="text-sm" />
              </span>
            </h3>
          </div>
          <p className="pt-6 text-gray-500">
            Aux Villages des Sciences vous attendent de multiples espaces
            d’animations, de démonstrations et d’expositions ! Vous pourrez
            tester, échanger, expérimenter et questionner les scientifiques
            venus à votre rencontre ! Animations en continu, expositions et
            rencontres...
          </p>

          <hr className="mt-16 text-center border-t-2 border-featured" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturedAboutSection;
