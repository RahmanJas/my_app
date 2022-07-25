import React from "react";
import pwcadd from "./pwcadd.jpg";
export default function ContactUs() {
  return (
    <section>
      <div>
        <h2 className="contactUs">Contact Us</h2>
      </div>

      <div className="contact">
        <div>
          <p>Email: ng_pwc.enquiry@pwc.com</p>
          <br />
          <p>Phone: +234818 3524 765</p>
          <br />
          <address>
            Head Office <br />
            Landmark Tower <br />
            5b Water Corporation Road <br />
            Victoria Island <br />
            P.O.Box 2419 <br />
            Lagos, Nigeria.
          </address>
        </div>

        <div>
          <img src={pwcadd} alt="map" />
        </div>
      </div>
    </section>
  );
}
