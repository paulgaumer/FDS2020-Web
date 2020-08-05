import React from 'react';
import { Link } from 'gatsby';
import logoFDSRouge from '../../images/logo-fds-rouge.svg';
import InstagramIcon from '../icons/instagram';

const Footer = () => {
  return (
    <footer className="bg-white max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
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
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-cool-gray-400 uppercase">
              Départements
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Loire Atlantique
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Maine et Loire
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Mayenne
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Sarthe
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Vendée
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-cool-gray-400 uppercase">
              a propos
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Partenaires
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Site National
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-cool-gray-400 uppercase">
              Légal
            </h4>
            <ul className="mt-4">
              <li>
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Mentions Légales
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="/"
                  className="text-base leading-6 text-cool-gray-500 hover:text-cool-gray-900"
                >
                  Nous contacter
                </a>
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
      <div className="mt-12 border-t border-gray-200 pt-8 flex justify-between items-center">
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
