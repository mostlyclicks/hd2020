import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <Helmet
      title="Canceled payment | Hulse Dental, Onalaska WI"
      meta={[
        {
          name: 'description',
          content: 'Canceled Payment | Hulse Dental, Onalaska WI',
        },
        { name: 'keywords', content: 'site, web' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <article id="main">
      <header>
        <h2>Canceled Payment</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>You canceled your Payment</h3>
          <p>
            If you have any any questions about your bill please contact us{' '}
            <a href="mailto:KurtHulseDental@gmail.com">
              KurtHulseDental@gmail.com
            </a>{' '}
            or call us at <a href="tel:(608) 783-1306">(608) 783-1306</a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
