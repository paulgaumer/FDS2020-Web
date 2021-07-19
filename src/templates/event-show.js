import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import HeroSection from '../components/sections/eventShow/heroSection';
import VillageLinkSection from '../components/sections/eventShow/villageLinkSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import OrganizerSection from '../components/sections/eventShow/organizerSection';
import BookingSection from '../components/sections/eventShow/bookingSection';
import MapSection from '../components/sections/eventShow/mapSection';
import OpeningHours from '../components/sections/eventShow/openingHours';

const EventShow = ({ data }) => {
  const event = data.sanityEvent;
  const scolaires = event.education;

  return (
    <Layout>
      <SEO title={event.title} description={event.description} />
      <HeroSection event={event} scolaires={scolaires} />
      {event.village && <VillageLinkSection event={event} />}
      <DescriptionSection
        audienceCustom={event.audienceCustom}
        description={event._rawDescription}
        scolaires={scolaires}
      />
      {event.projectOwners.length > 0 && (
        <OrganizerSection
          organizers={event.projectOwners}
          scolaires={scolaires}
        />
      )}
      {event.timeSlots.length > 1 && (
        <OpeningHours
          timeSlots={event.timeSlots}
          scolaires={scolaires}
          eventCanceled={event.eventCanceled}
        />
      )}
      {event.bookingRequired && !event.eventCanceled && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          bookingWebsite={event.bookingWebsite}
          scolaires={scolaires}
          bookingText="Attention, cet évenement est uniquement accessible sur réservation!"
        />
      )}
      {event.bookingRecommanded && !event.eventCanceled && (
        <BookingSection
          bookingPhone={event.bookingPhone}
          bookingEmail={event.bookingEmail}
          bookingWebsite={event.bookingWebsite}
          scolaires={scolaires}
          bookingText="Attention, il est recommandé de réserver à l'avance pour cet évenement!"
        />
      )}
      <MapSection mapGps={event.map} scolaires={scolaires} />
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
      audience {
        id
        name
      }
      audienceCustom {
        from
        to
      }
      featured
      eventCanceled
      village {
        id
        title
        slug {
          current
        }
        department {
          name
        }
      }
      education
      _rawDescription
      bookingRequired
      bookingRecommanded
      bookingPhone
      bookingEmail
      bookingWebsite
      timeSlots {
        endDate
        endTime
        startDate
        startTime
      }
      projectOwners {
        id
        name
        description
        website
        facebook
      }
      format {
        name
        formatIcon {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
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
        hotspot {
          x
          y
        }
      }
      map {
        address
        lat
        lng
      }
    }
  }
`;
