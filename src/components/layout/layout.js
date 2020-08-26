import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import CookieBanner from './cookieBanner';
import { hasWindow } from '../../utils/hasWindow';

const Layout = ({ children, headerHidden }) => {
  const [hide, setHide] = useState(false);
  const [curScroll, setCurScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [direction, setDirection] = useState(0);
  const [prevDirection, setPrevDirection] = useState(0);

  const toggleHeader = (direction, curScroll) => {
    // height of your header in px
    if (direction === 2 && curScroll > 100) {
      setHide(true);
      setPrevDirection(direction);
    } else if (direction === 1) {
      setHide(false);
      setPrevDirection(direction);
    }
  };

  const checkScroll = (e) => {
    setCurScroll(window.scrollY);
  };

  useEffect(() => {
    // Scroll direction: 0 - initial, 1 - up, 2 - down
    setPrevScroll(curScroll);
    if (curScroll > prevScroll) {
      setDirection(2);
    } else if (curScroll < prevScroll) {
      setDirection(1);
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
  }, [curScroll]);

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {!headerHidden && (
        <div className={`${hide ? 'hidden' : 'block'}`}>
          <Header />
        </div>
      )}
      <div
        className={`flex-grow bg-sectionBackground
        ${headerHidden ? '' : 'pt-24'}`}
      >
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
