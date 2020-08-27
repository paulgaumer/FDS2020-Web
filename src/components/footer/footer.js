import React from 'react';
import { Link } from 'gatsby';
import logoFDSRouge from '../../images/logo-fds-rouge.svg';
import InstagramIcon from '../icons/instagram';

const Footer = () => {
  return (
    <footer className="max-w-screen-xl px-4 py-12 mx-auto bg-white sm:px-6 lg:py-16 lg:px-8 ">
      <div className="flex flex-col items-center lg:items-start space-y-14 lg:flex-row lg:space-y-0">
        <div data-name="fds-logo" className="flex items-center">
          <Link to="/">
            <img src={logoFDSRouge} alt="fête de la science" className="w-64" />
          </Link>
        </div>
        <div
          data-name="links"
          className="flex flex-grow space-x-6 lg:justify-center lg:space-x-10"
        >
          <div>
            <h4 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-400">
              Départements
            </h4>
            <ul className="mt-4">
              <li>
                <Link
                  to="/loire-atlantique"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Loire Atlantique
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/maine-et-loire"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Maine et Loire
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/mayenne"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Mayenne
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/sarthe"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Sarthe
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/vendee"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Vendée
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-400">
              a propos
            </h4>
            <ul className="mt-4">
              <li>
                <Link
                  to="/editorial"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Éditorial
                </Link>
              </li>
              <li className="mt-4">
                <a
                  href="https://www.fetedelascience.fr/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Site National
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold leading-5 tracking-wider uppercase text-cool-gray-400">
              Légal
            </h4>
            <ul className="mt-4">
              <li>
                <Link
                  to="/legal/mentions-legales"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Mentions Légales
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="/contact"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div data-name="logos" className="flex flex-col space-y-10">
          <div className="flex space-x-6">
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
          </div>
          <div className="flex space-x-6">
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
            <img src={logoFDSRouge} alt="fête de la science" className="w-20" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-200">
        <p className="text-base leading-6 text-cool-gray-400 xl:text-center">
          &copy; 2020 Fête de la Science Pays de la Loire
        </p>
        <a href="https://instagram.com">
          <InstagramIcon customClasses="w-8 h-8 text-cool-gray-400 hover:text-featured" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
