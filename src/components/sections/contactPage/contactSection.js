import React from 'react';
import Img from 'gatsby-image';

const ContactSection = ({ department }) => {
  const contacts = department.edges.map(({ node }) => node);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-extrabold leading-8 text-gray-700 uppercase sm:text-3xl sm:leading-9">
        {department.fieldValue}
      </h2>
      {contacts.map((contact) => {
        return (
          <div className="flex flex-col items-center mt-8 md:mt-16">
            <div className="flex items-center mb-6 h-28">
              <Img
                fluid={contact.logo.asset.fluid}
                className="rounded-lg w-28"
              />
            </div>

            <div className="text-2xl font-bold leading-6 text-gray-500">
              <h3>{contact.name}</h3>
            </div>

            <div className="flex mt-4">
              <div className="flex-shrink-0">
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
              </div>
              <div className="ml-3 text-base leading-6 text-gray-500">
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:border-b-2 hover:border-secondary"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex-shrink-0">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-3 text-base leading-6 text-gray-500">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:border-b-2 hover:border-secondary"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactSection;
