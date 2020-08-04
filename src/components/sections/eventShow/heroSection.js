import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { MdPlace, MdToday, MdFavorite } from 'react-icons/md';

const HeroCard = styled.div`
  [data-name='image'] {
    height: 23.5em;
  }

  [data-name='grid-info'] {
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 2em;
  }
`;

const BookingButton = ({ bookingRequired }) => {
  if (bookingRequired) {
    return (
      <span class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-base font-medium font-bold leading-6 text-orange-900 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-secondary hover:bg-yellow-200 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        >
          réservation obligatoire
        </button>
      </span>
    );
  } else {
    return (
      <span class="inline-flex rounded-md shadow-sm">
        <div className="inline-flex items-center px-4 py-2 text-base font-medium font-bold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-primary ">
          entrée libre
        </div>
      </span>
    );
  }
};

const HeroSection = ({ event }) => {
  const {
    title,
    theme,
    format,
    bookingRequired,
    endDate,
    startDate,
    address,
    image,
  } = event;

  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-20">
        <HeroCard className="max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow">
          <div data-name="image" className="relative bg-red-200">
            <Img
              fluid={image.asset.fluid}
              alt={title}
              className="object-cover h-full"
              imgStyle={{ objectPosition: 'center' }}
            />
            <p className="absolute flex items-center px-3 py-1 space-x-1 text-base text-white rounded-lg bottom-5 left-10 bg-featured">
              <span>
                <MdFavorite />
              </span>
              <span>Coup de coeur</span>
            </p>
          </div>
          <div
            data-name="grid-info"
            className="px-4 py-5 text-gray-500 sm:py-6 sm:px-10"
          >
            <div className="col-span-1 row-span-1">
              <h1 className="text-3xl font-bold text-gray-700 uppercase">
                {title}
              </h1>
              <p className="text-lg font-hairline">- {theme[0].name}</p>
            </div>
            <div className="flex flex-col col-span-1 row-start-2 space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-xl">
                  <MdToday />
                </span>
                <span>
                  {startDate} - {endDate}
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-xl">
                  <MdPlace />
                </span>
                <span>{address}</span>
              </p>
            </div>

            <div className="col-span-1 col-start-2">
              <BookingButton bookingRequired={bookingRequired} />
            </div>
            <div className="flex flex-col col-span-1 col-start-2 space-y-2">
              <p>{format[0].name}</p>
              <p>Tout Public</p>
            </div>
          </div>
        </HeroCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
