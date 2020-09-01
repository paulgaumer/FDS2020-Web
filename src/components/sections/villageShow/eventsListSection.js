import React, { useState, useEffect } from 'react';
import InfoCard from '../eventShow/infoCard';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
const sanityClient = require('@sanity/client');

// INit Sanity JS client to enable groq requests
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

const EventsListSection = ({ villageId, department }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const query = `*[_type == 'village' && _id == $villageId ]{"events": *[_type == 'event' && references(^._id)]}`;
    const params = { villageId: villageId };

    client.fetch(query, params).then((res) => {
      setEvents(res[0].events);
    });
  }, []);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="Les évenements du Village" customClasses="">
          <div className="text-lg leading-relaxed">
            <ul>
              {events.map((event) => {
                return (
                  <li key={event._id}>
                    <p>{event.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default EventsListSection;
