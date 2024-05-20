import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
  src={process.env.PUBLIC_URL + '/privacypolicy.jpg'}
  className="banner-img"
  alt="bannerimage"
  width={"80%"}
  height={"450"}
/>
       
        </div>
        <div className="col-md-4">
          <p>#Welcome to WeighMate. We are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines the types of personal information we collect, how we use it, and your choices regarding the information.</p>
          
          <p>#We may also collect non-personal information, such as:

Browser information
Device information
Log data.</p>
          
          <p>#We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.

We may share information with:

Service providers and business partners assisting in our operations
Legal authorities if required by law.</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
