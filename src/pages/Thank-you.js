import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <Helmet
      title="Thank you for your payment | Hulse Dental, Onalaska WI"
      meta={[
        {
          name: 'description',
          content:
            'Thank you | Hulse Dental, Onalaska WI',
        },
        { name: 'keywords', content: 'site, web' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <article id="main">
      <header>
        <h2>Thank you</h2>
        
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Thank you for your Payment</h3>

          
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
