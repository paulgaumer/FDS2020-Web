import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/eventShow/heroSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import OrganizerSection from '../components/sections/eventShow/organizerSection';
import BookingSection from '../components/sections/eventShow/bookingSection';
import MapSection from '../components/sections/eventShow/mapSection';

const EventShow = ({ data }) => {
  const event = data.sanityEvent;

  return (
    <Layout>
      <HeroSection event={event} />
      <DescriptionSection description={event.description} />
      <OrganizerSection organizer={event.projectOwners[0]} />
      {event.bookingRequired && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
        />
      )}
      <MapSection address={event.address} />
    </Layout>
  );
};

export default EventShow;

export const query = graphql`
  query($eventId: String!) {
    sanityEvent(id: { eq: $eventId }) {
      title
      department {
        name
      }
      address
      featured
      description
      bookingRequired
      bookingPhone
      bookingEmail
      endDate(formatString: "DD MMMM YYYY, hh:mm", locale: "fr")
      startDate(formatString: "DD MMMM YYYY, hh:mm", locale: "fr")
      projectOwners {
        name
        description
        website
        facebook
      }
      format {
        name
      }
      theme {
        name
      }
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
