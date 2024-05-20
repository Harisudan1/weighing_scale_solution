import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          
          <img
  src={process.env.PUBLIC_URL + '/contactus.jpg'}
  className="banner-img"
  alt="bannerimage"
  width={"80%"}
  height={"450"}
/>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          For any inquiries or product information, our team is at your service round the clock. Reach out to us anytime for assistance.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.weighmate@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 789362892
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
