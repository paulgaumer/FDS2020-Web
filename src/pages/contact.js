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
            <ul className="flex flex-col space-y-6 text-gray-700 list-inside">
              {pressKits.map(({ node }) => {
                return (
                  <li className="text-xl" key={node.id}>
                    <a
                      href={node.file.asset.url}
                      className="flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      <span className="border-b-2 border-secondary">
                        {node.name}
                      </span>
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
