import React from 'react';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import ContactSection from '../components/sections/contactPage/contactSection';

const ContactPage = ({ data }) => {
  const departments = data.allSanityContactDepartment.group;

  return (
    <Layout>
      <SectionWrapper>
        <SectionContainer customClasses="pt-32 pb-40">
          <SectionTitle text="Contacter nos antennes départementales" />

          <div className="flex flex-col pt-16 space-y-24 md:space-y-0 md:max-w-none md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:row-gap-36">
            {departments.map((department) => {
              return (
                <ContactSection
                  department={department}
                  key={department.fieldValue}
                />
              );
            })}
          </div>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPage {
    allSanityContactDepartment {
      group(field: department___name) {
        fieldValue
        edges {
          node {
            id
            name
            phone
            email
            logo {
              asset {
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
