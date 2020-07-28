import React from 'react';
import { Link } from 'gatsby';
import tw, { styled } from 'twin.macro';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Button = styled.button`
  ${tw`bg-primary hover:bg-blue-800 text-white p-2 rounded`}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button>Activate</Button>
    <p className="">Welcome to your new Gatsby site.</p>
    <p className="text-secondary">Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
