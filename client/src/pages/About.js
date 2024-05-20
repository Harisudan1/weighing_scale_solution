import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
  src={process.env.PUBLIC_URL + '/aboutus.jpg'}
  className="banner-img"
  alt="bannerimage"
  width={"80%"}
  height={"450"}
/>
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Weighmate
          
          Enter a domain where accuracy converges with gracefulness. At Weighmate, we're dedicated to providing unparalleled precision in weight scales, coupled with a commitment to professionalism. Our sleek designs and cutting-edge technology ensure a seamless experience, making Weighmate your trusted partner in precise measurements. Welcome to a realm where each gram matters, and professionalism is our promise.







   
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
