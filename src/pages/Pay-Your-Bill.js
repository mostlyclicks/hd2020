import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Pay Your Bill</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Office</h3>

          

          <form target="_blank" action="https://hosted.transactionexpress.com/Transaction/Transaction/Index" method="POST">
            <input type="hidden" name="HostedKey" id="HostedKey" value="f774615f-789a-462e-9bac-2a757ae9d5d6" />
            <input type="hidden" name="Gateway_ID" id="Gateway_ID" value="9078619423" />
            <input type="hidden" name="IndustryCode" id="IndustryCode" value="2" />
            <input type="hidden" name="Amount" id="Amount" value="" />
            <input type="hidden" name="RecurringType" id="RecurringType" value="N" />
            <input type="hidden" name="RecurringAmount" id="RecurringAmount" value="" />
            <input type="hidden" name="RURL" id="RURL" value="https://www.hulsedental.com/thank-you" />
            <input type="hidden" name="CURL" id="CURL" value="https://www.hulsedental.com/canceled-payment" />
            <input type="hidden" name="AVSRequired" id="AVSRequired" value="Y" />
            <input type="hidden" name="CVV2Required" id="CVV2Required" value="Y" />
            <input type="hidden" name="EmailRequired" id="EmailRequired" value="N" />
            <input type="hidden" name="PostRspMsg" id="PostRspMsg" value="N" />
Account Number:<input type="text" required name="custrefid" id="custrefid" value="" /><br />
            <input type="Submit" name="Submit" id="Submit" value="Pay Now" />
          </form>

          <hr />

          <h4>Feugiat aliquam</h4>
          <p>
            Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
            varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
            tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
            tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
            erat diam, tempus aliquet erat.
          </p>

          <p>
            Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus
            rutrum cursus velit, eget condimentum nunc blandit vel. In at
            pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
            fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra
            commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim
            vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
            pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum.
            Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
