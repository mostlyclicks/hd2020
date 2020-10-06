import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <Helmet
      title="Our Office | Hulse Dental, Onalaska WI"
      meta={[
        { name: 'description', content: 'Office Information, Hours & Directions, Patient Forms | Hulse Dental, Onalaska WI' },
        { name: 'keywords', content: 'site, web' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <article id="main">
      <header>
        <h2>Our Office</h2>
        <p>Information, hours/directions & patient forms</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Our Office</h3>
          <ul>
            <li>
              <a href="#hours-directions">Directions</a>
            </li>
            <li>
              <a href="#new-patient-forms">New Patient Forms</a>
            </li>
          </ul>
          <h4>
            Dentist Kurt Hulse And HIs Team Welcome You To Our Onalaska Office
          </h4>
          <p>
            It is our pleasure to welcome you and your family to our Hulse
            Dental and offer you a virtual tour of our services. Dr. Hulse has
            been a dentist in the area for over 20 years and is honored to be
            practicing dentistry in the Onalaska/La Crosse/Coulee Region helping
            people find their smiles and improving their oral health.
          </p>
          <p>
            We believe that we can make a difference for you by providing
            artistic restorative family dental care and cosmetic dental care
            supported by extraordinary preventive services. We believe in using
            the best in staff, clinical expertise and dental materials to
            provide the best dental care with dependable and calculable results.
            Our goal is to make you feel welcome from your first contact with us
            and leave you with the feeling that you want to be our dental
            patient for life. Our main focus is your oral health and we provide
            the highest quality preventative dentistry, family dentistry, and
            cosmetic dentistry for you. Your smile is in good hands!
          </p>
          <p>
            Our goal is to make you feel welcome from the first appointment and
            leave you with the feeling that you want to be a patient for life.
            We hope you will choose us for your dental care! We would be honored
            to be your Onalaska Dentist and provide you with the utmost in
            dental health. To learn more about our services, click the above tab
            to be directed to our solutions page.
          </p>
          <p>
            We invite you to contact us directly or just stop in to say hello.
          </p>
          <hr />
          <h4 id="hours-directions">Office Hours and Directions</h4>
          <table id="hours">
            <tbody>
              <tr>
                <td>Monday</td>
                <td>8am to 5pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8am to 5pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8am to 5pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8am to 5pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8am to 12pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>closed</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>closed</td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              float: 'left',
              margin: '0rem 1rem 1rem 0rem',
              borderRight: '1px solid #cdcdcd',
              padding: '1rem 1rem 2rem 1rem',
            }}
          >
            <h4>Hulse Dental</h4>
            1840 East Main Street
            <br />
            Onalaska, WI 54650
            <br />
            <a href="tel:(608) 783-1306">(608) 783-1306</a>
          </div>
          <p>
            North of Interstate 90 just east of HWY 53 on East Main, Onalaska
            WI. Dental care that is easily accessible from Onalaska, La Crosse,
            Holmen, West Salem and the Coulee Region due to our location near
            I90 and Hwy 53. This team including Dentist Dr. Kurt Hulse and the
            professional staff provide the best possible family dental care in
            the area. Hulse Dental provides preventive, restorative, endodontic,
            orthodontic, and cosmetic care, including crowns, Invisalign,
            Implants, and teeth whitening, in an easily accessible location.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.752720569731!2d-91.21119054867037!3d43.88167474554138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87feacca4493f169%3A0x8f5c2bbda8cce7f8!2sHulse%20Dental!5e0!3m2!1sen!2sus!4v1601947835391!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <hr />
          <h4>New Patients Forms for Hulse Dental in Onalaska</h4>
          <p>
            For your convenience, we have provided these dental forms and
            policies for you to read and fill out before your visit to see the
            dentist or staff at Hulse Dental. It is our pleasure to provide you
            with the convenience of completing these forms prior to your visit,
            or come to our office where we can help you with this process. We
            are proud to present the highest level of professionalism and dental
            care while staying focused on providing the utmost in
            confidentiality to our patients. Whether you visit the us for a
            routine procedure or a more systemic issue, our team at Hulse Dental
            respects you and your privacy. We are honored to be trusted with
            your care. It is our pleasure to serve you! If you have any
            questions, please feel free to call Hulse Dental in Onalaska at
            608.783.1306 or email us at{' '}
            <a href="mailto:kurthulsedental@gmail.com">
              kurthulsedental@gmail.com
            </a>
          </p>

          <h5>Patient Forms for Dental Care at Hulse Dental</h5>
          <p>
            Please click on the following links to access the dental forms
            necessary for your appointment. Feel free to complete the forms and
            email them to us at{' '}
            <a href="mailto:kurthulsedental@gmail.com">
              kurthulsedental@gmail.com
            </a>
            , send them in the mail, or bring them with you to your dental
            appointment. If you have any questions for the dentist or office
            staff prior to your appointment, you can call us at 608.783.1306 or
            email your questions along with your paperwork. We follow all HIPPA
            privacy requirements and do everything possible to maintain your
            privacy.
          </p>

          <ul>
            <li>
              <a
                href="https://hd10.s3.amazonaws.com/Forms/new_patient_form.pdf"
                target="_blank"
              >
                New Patient Form
              </a>
            </li>
            <li>
              <a href="https://hd10.s3.amazonaws.com/Forms/health_info_consent_form.pdf">
                Health Information Consent and Use Form
              </a>
            </li>
            <li>
              <a href="https://hd10.s3.amazonaws.com/Forms/dental_insurance_policy.pdf">
                Dental Insurance Policy Form
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
