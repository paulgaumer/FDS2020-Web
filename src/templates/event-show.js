import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/eventShow/heroSection';

const EventShow = ({ data }) => {
  const event = data.sanityEvent;

  return (
    <Layout>
      <HeroSection event={event} />
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
