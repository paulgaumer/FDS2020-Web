import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import './layout.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import QuizModal from '../global/quizModal';
import CookieBanner from './cookieBanner';

const Layout = ({ children, headerHidden }) => {
  const data = useStaticQuery(graphql`
    query ShowQuizQuery {
      sanitySiteSettings {
        showQuiz
      }
    }
  `);

  return (
    <div className="flex flex-col h-screen" id="site-layout">
      {!headerHidden && <Header />}
      <div
        className={`flex-grow bg-sectionBackground
        ${headerHidden ? ' ' : 'pt-24'}`}
      >
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
      <CookieBanner />
      {data.sanitySiteSettings.showQuiz && <QuizModal />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
