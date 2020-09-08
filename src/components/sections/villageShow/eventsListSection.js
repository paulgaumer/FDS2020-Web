import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import urlBuilder from '@sanity/image-url';
import { MdToday } from 'react-icons/md';
import { processDate } from '../../../utils/processDate';
import InfoCard from '../eventShow/infoCard';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
const sanityClient = require('@sanity/client');

// Init Sanity JS client to enable groq requests
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: 'production',
  }).image(source);

const EventMiniCard = ({ event, department }) => {
  return (
    <Link to={`/${department}/${event.slug.current}`}>
      <div className="relative flex items-center border border-gray-200 rounded-lg">
        <div
          style={{ backgroundImage: `url(${urlFor(event.image.asset._ref)})` }}
          className="w-full bg-center bg-cover rounded-lg h-28"
        />
        <div
          className="absolute inset-0 rounded-lg group"
          style={{ backgroundColor: 'rgba(0,0,0,.5)' }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h4 className="px-2 text-xl text-white transform group-hover:scale-105">
              {event.title}
            </h4>
            <span className="text-white ">---</span>
            <div className="flex items-center px-2 space-x-2 text-sm text-white">
              <span className="text-base">
                <MdToday />
              </span>
              {event.timeSlots.length > 1 && <p>Horaires multiples</p>}
              {event.timeSlots.length === 1 && (
                <p>{processDate(event.timeSlots[0], 'short')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const EventsListSection = ({ villageId, department }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Get all events linked to a specific village
    const query = `*[_type == 'village' && _id == $villageId ]{"events": *[_type == 'event' && references(^._id)]}`;
    const params = { villageId: villageId };

    client.fetch(query, params).then((res) => {
      setEvents(res[0].events);
    });
  }, []);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="village-events">
        <InfoCard title="Les événements du Village" customClasses="">
          <div className="text-lg leading-relaxed">
            {events.length > 0 && (
              <div className="grid grid-cols-1 gap-4 mt-4 sm:mt-0 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => {
                  return (
                    <EventMiniCard
                      event={event}
                      department={department}
                      key={event._id}
                    />
                  );
                })}
              </div>
            )}
            {events.length <= 0 && (
              <div className="py-10 text-center">
                <p>Aucun évenement enregistré pour le moment...</p>
              </div>
            )}
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default EventsListSection;
