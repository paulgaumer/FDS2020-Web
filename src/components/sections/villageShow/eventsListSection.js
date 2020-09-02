import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
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
      <SectionContainer customClasses="pb-12" id="village-events">
        <InfoCard title="Les événements du Village" customClasses="">
          <div className="text-lg leading-relaxed">
            {events.length > 0 && (
              <ul className="list-disc">
                {events.map((event) => {
                  return (
                    <li key={event._id}>
                      <Link
                        to={`/${department}/${event.slug.current}`}
                        className="inline-block underline"
                      >
                        <p>{event.title}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
