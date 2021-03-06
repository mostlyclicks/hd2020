import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <Helmet
      title="Preventative, Restorative & Orthodontic Services | Hulse Dental, Onalaska WI"
      meta={[
        {
          name: 'description',
          content:
            'Learn about our preventative, restorative & orthodontic services | Hulse Dental, Onalaska WI',
        },
        { name: 'keywords', content: 'site, web' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <article id="main">
      <header>
        <h2>Services</h2>
        <p>Preventative, Restorative &amp; Orthodontic Services</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Services</h3>

          <h4>Preventive Services</h4>
          <p>
            Preventative services are important in maintaining your overall
            health as well as your oral health. Did you know that bacteria in
            your mouth, if left untreated, can lead to periodontal disease and
            eventually systemic diseases? Regular checkups are important to help
            preclude these health issues. We focus on quality preventive dental
            care individualized for each patient. By providing you with a dental
            treatment plan that fits your needs we can help you maintain the
            best dental health possible.
          </p>

          <p>
            Salt or Paste Cleanings, X-rays, Exams, Oral Cancer Screenings,
            Fluoride Treatments, Sealants, Periodontal Services, Retainers &
            Mouth Guards are all important in providing you with the best dental
            care you deserve. All of theses are available at our dental clinic
            in Onalaska, WI.
          </p>

          <h4>Restorative Services</h4>
          <p>
            Many different restorative services are available at Hulse Dental.
            We aim to provide the best dental care with results that are second
            to none. Unfortunately we all will probably need restorative
            (fillings and crowns) oral care at some time during our life. And
            for that reason it is good to know that Dr. Hulse provides
            exceptional dental care for you and your family. Whether you choose
            to whiten your teeth or are in the need of a crown, Hulse Dental is
            here to provide solutions that work for you!
          </p>

          <h4>Orthodontic Services</h4>
          <p>
            Straight teeth are important to a healthy vibrant smile! We all can
            see the cosmetic benefits to straightening our teeth, but did you
            know that there are dental benefits due to orthodontic treatment as
            well? Straight teeth are easier to clean, especially in maintaining
            good oral care between the teeth. Straight teeth can help you avoid
            tooth loss and also lower your disease risk. It keeps your jawbone
            healthy and can lead to reduced headaches. And most importantly for
            most people, straight teeth keep you smiling more, feeling happy and
            boosts your confidence. Research shows that smiling, even if it is a
            forced smile, actually makes you happier. So give us a call and
            schedule an appointment to find our how orthodontic treatment, like
            Invisalign, can help you!
          </p>

          <h4>Adjunct Services</h4>
          <p>
            What we do here at Hulse Dental is centered around you, the patient,
            and not only providing you with the best dental care but doing so in
            an atmosphere that is friendly, compassionate, and relaxing with
            state-of-the-art technology. Many people find it stressful to come
            to the dentist and we understand that feeling. We want you to know
            that we do everything we can to make your experience as enjoyable
            possible that puts you at ease for a lifetime of dental health. We
            want to be your choice for family dentistry and also for any
            cosmetic services you may choose. Our above-chair TV's with
            headphones provide a distraction from the work we are doing, or you
            can listen to music while we are giving you the best dental care in
            the La Crosse-Onalaska area. Our One-Appointment Crowns (called
            Cerec) have been a welcomed benefit with our patients. We will do
            what we can to ensure your dental visit is as pleasurable as
            possible!
          </p>

          <p>
            Cerec One-Appt Crowns, Above-Chair TV's, Headphones, After Treatment
            Warm Cleansing Towel, Blankets, Back and Neck Pillows, Travel Size
            Brush-Paste-Floss, HD Chapstick, Yeti Water Warmers, Coffee/Hot
            Chocolate/Water Bar.
          </p>

          <h4>Payment</h4>
          <p>
            Insurance Plans Accepted, 5% Cash discount, Visa, Mastercard,
            Discover, American Express, Insurance filing, Care Credit
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
