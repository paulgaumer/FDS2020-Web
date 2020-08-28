import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import ContactSection from '../components/sections/contactPage/contactSection';

const ContactPage = ({ data }) => {
  const departments = data.allSanityContactDepartment.group;
  const pressKits = data.allSanityPressKit.edges;

  return (
    <Layout>
      <SEO title="Contact" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-20">
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
        {pressKits.length > 0 && (
          <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-20 lg:pb-40">
            <SectionTitle text="Resources Presse" />
            <ul className="flex flex-col space-y-6 text-gray-700 list-disc list-inside">
              {pressKits.map(({ node }) => {
                return (
                  <li className="text-2xl" key={node.id}>
                    <a
                      href={node.file.asset.url}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {node.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </SectionContainer>
        )}
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
    allSanityPressKit {
      edges {
        node {
          id
          name
          file {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
