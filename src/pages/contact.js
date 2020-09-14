import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import ContactSection from '../components/sections/contactPage/contactSection';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../utils/portableTextSerializers';

const ContactPage = ({ data }) => {
  const departments = data.allSanityContactDepartment.group;
  const pressKits = data.allSanityPressKit.edges;
  const page = data.sanityPage.pageContent[0];

  return (
    <Layout>
      <SEO title="Contact" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-20">
          <SectionTitle text={page.topTitle} />
          <div className="text-lg leading-7 tracking-wide text-gray-600">
            <PortableText
              blocks={page._rawTopContent}
              serializers={serializers}
            />
          </div>
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
            <SectionTitle text={page.pressTitle} />
            {/* Press Contact */}
            <div className="flex justify-center">
              <div className="flex-grow max-w-screen-sm px-8 py-6 text-gray-700 bg-white rounded-lg shadow md:max-w-screen-md">
                <div>
                  <h3 className="flex text-xl">
                    <span className="px-2 border-b-2 border-secondary">
                      {page.contactTitle}
                    </span>
                  </h3>
                  <div className="flex flex-col pt-6 space-y-6 sm:space-y-0 sm:grid-cols-3 sm:grid">
                    <p className="flex items-center justify-center space-x-1 font-bold sm:border-r-2 sm:border-gray-400">
                      <span>{page.pressContact.name}</span>
                    </p>
                    <p className="flex items-center justify-center space-x-1 sm:border-r-2 sm:border-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a href={`mailto:${page.pressContact.email}`}>
                        {page.pressContact.email}
                      </a>
                    </p>
                    <p className="flex items-center justify-center space-x-1">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a href={`tel:${page.pressContact.phone}`}>
                        {page.pressContact.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="pt-16">
                  <h3 className="flex text-xl">
                    <span className="px-2 border-b-2 border-secondary">
                      {page.resourceTitle}
                    </span>
                  </h3>
                  {/* List of resources */}
                  <ul className="flex flex-col pt-6 space-y-6 text-gray-700 md:pl-10">
                    {pressKits.map(({ node }) => {
                      return (
                        <li className="text-lg" key={node.id}>
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
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                            <span className="underline">{node.name}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
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
            url
            logo {
              asset {
                fluid(maxWidth: 150) {
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
    sanityPage(pageName: { eq: "Contact" }) {
      pageContent {
        ... on SanityContactPageBlock {
          topTitle
          pressTitle
          pressContact {
            email
            name
            phone
          }
          _rawTopContent
          contactTitle
          resourceTitle
        }
      }
    }
  }
`;
