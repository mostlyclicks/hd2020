import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>

    <Helmet
      title="Page not found | Hulse Dental, Onalaska WI"
      meta={[
        {
          name: 'description',
          content: 'Page not found | Hulse Dental, Onalaska WI',
        },
        { name: 'keywords', content: 'site, web' },
      ]}
    ></Helmet>


    <article id="main">
      <header>
        <h2>Not Found</h2>
        <p>Not a Valid URL</p>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
