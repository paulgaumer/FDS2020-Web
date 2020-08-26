import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="mt-20 mb-20 text-center text-gray-500 md:mt-32">
      <h1 className="text-4xl text-gray-700">
        Oops, voici la preuve scientifique d'une 404
      </h1>
      <p className="pt-10 text-lg">
        Définition:{' '}
        <span className="italic">"La page que vous cherchez n'existe pas"</span>
        .
      </p>

      <Link
        to="/"
        className="inline-block px-4 py-2 mt-10 text-lg rounded bg-primary"
      >
        <p className="text-gray-700">Retourner à l'écran d'accueil</p>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
