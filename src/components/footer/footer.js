import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import logoFDSRouge from '../../images/logo-fds-rouge.svg';
import InstagramIcon from '../icons/instagram';
import { GlobalStateContext } from '../../context/global-context-provider';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterBlock {
      footer: sanityPage(pageName: { eq: "Footer" }) {
        pageContent {
          ... on SanityFooterBlock {
            logosRankBottom {
              id
              name
              image {
                asset {
                  fluid(maxWidth: 300) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            logosRankTop {
              id
              name
              image {
                asset {
                  fluid(maxWidth: 300) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            instagramLinkFooter
          }
        }
      }
    }
  `);

  const showCovid = useContext(GlobalStateContext).showCovid;

  return (
    <footer className="max-w-screen-xl px-4 py-12 mx-auto bg-white sm:px-6 lg:py-16 lg:px-8 ">
      <div className="flex flex-col items-center lg:items-start space-y-14 lg:flex-row lg:space-y-0 lg:space-x-10">
        <div data-name="fds-logo" className="flex items-center">
          <Link to="/">
            <img src={logoFDSRouge} alt="fête de la science" className="w-72" />
          </Link>
        </div>
        <div
          data-name="links"
          className="grid grid-cols-2 gap-10 sm:flex sm:space-x-6 lg:justify-center lg:space-x-10"
        >
          <div>
            <h5 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-500">
              Départements
            </h5>
            <ul className="flex flex-col mt-4 space-y-4">
              <li>
                <Link
                  to="/loire-atlantique"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Loire Atlantique
                </Link>
              </li>
              <li>
                <Link
                  to="/maine-et-loire"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Maine et Loire
                </Link>
              </li>
              <li>
                <Link
                  to="/mayenne"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Mayenne
                </Link>
              </li>
              <li>
                <Link
                  to="/sarthe"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Sarthe
                </Link>
              </li>
              <li>
                <Link
                  to="/vendee"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Vendée
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-500">
              Info
            </h5>
            <ul className="flex flex-col mt-4 space-y-4">
              <li>
                <Link
                  to="/editorial"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Éditorial
                </Link>
              </li>
              <li>
                <Link
                  to="/scolaires"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Scolaires
                </Link>
              </li>
              {showCovid && (
                <li>
                  <Link
                    to="/covid"
                    className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                  >
                    Info Covid
                  </Link>
                </li>
              )}
              <li>
                <a
                  href="https://www.fetedelascience.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Site National
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-500">
              Légal
            </h5>
            <ul className="flex flex-col mt-4 space-y-4">
              <li>
                <Link
                  to="/legal/mentions-legales"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/credits"
                  className="text-base leading-6 text-cool-gray-600 hover:text-cool-gray-900"
                >
                  Crédits
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div data-name="logos" className="flex flex-col w-4/5 space-y-10">
          <div className="flex space-x-4 sm:space-x-6">
            {/* <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" /> */}
            {data.footer.pageContent[0].logosRankTop.map((logo) => {
              return (
                <Img
                  key={logo.id}
                  fluid={logo.image.asset.fluid}
                  alt={logo.name}
                  className="flex-auto max-h-24"
                  imgStyle={{ objectFit: 'contain' }}
                />
              );
            })}
          </div>
          <div className="flex space-x-4">
            {/* <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" /> */}
            {data.footer.pageContent[0].logosRankBottom.map((logo) => {
              return (
                <Img
                  key={logo.id}
                  fluid={logo.image.asset.fluid}
                  alt={logo.name}
                  className="flex-auto max-h-20"
                  imgStyle={{ objectFit: 'contain' }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-200">
        <p className="text-base leading-6 text-cool-gray-500 xl:text-center">
          &copy; {new Date().getFullYear()} Fête de la Science Pays de la Loire
        </p>
        <a
          href={data.footer.pageContent[0].instagramLinkFooter}
          aria-label="Visiter Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon customClasses="w-6 h-6 sm:w-8 sm:h-8 text-cool-gray-500 hover:text-featured" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
