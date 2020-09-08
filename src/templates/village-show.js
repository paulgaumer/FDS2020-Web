import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HeroSection from '../components/sections/villageShow/heroSection';
import DescriptionSection from '../components/sections/eventShow/descriptionSection';
import EventsListSection from '../components/sections/villageShow/eventsListSection';
// import OrganizerSection from '../components/sections/eventShow/organizerSection';
// import BookingSection from '../components/sections/eventShow/bookingSection';
import OpeningHours from '../components/sections/eventShow/openingHours';
import MapSection from '../components/sections/eventShow/mapSection';
import { formatDepartmentName } from '../utils/formatDepartmentName';

const VillageShow = ({ data }) => {
  const village = data.sanityVillage;
  const department = formatDepartmentName(village.department.name);

  return (
    <Layout>
      <HeroSection village={village} />
      <DescriptionSection description={village._rawDescription} />
      <EventsListSection villageId={village._id} department={department} />
      {village.timeSlots.length > 1 && (
        <OpeningHours timeSlots={village.timeSlots} />
      )}
      <MapSection mapGps={village.map} />
    </Layout>
  );
};

export default VillageShow;

export const query = graphql`
  query($villageId: String!) {
    sanityVillage(id: { eq: $villageId }) {
      _id
      title
      department {
        name
      }
      _rawDescription
      timeSlots {
        _key
        endDate
        endTime
        startDate
        startTime
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
