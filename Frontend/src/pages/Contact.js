import React from "react";

const Contact = ({ isLoggedIn }) => {
  return (
    <div className="flex-col h-full mx-20 my-4">
      <div className="text-4xl font-semibold my-4">Mission Statement</div>
      <div className="text-lg font-medium my-2">
        At ClearPath, our mission is simple: to pave the way for emergency
        responders. We strive to create safer and more efficient urban
        environments by harnessing the power of technology. Join us in our
        journey to redefine emergency response and make our cities safer for
        everyone.
      </div>
      <div className="text-4xl font-semibold my-4">Get Involved</div>
      <div className="text-lg font-medium my-2">
        Are you passionate about improving emergency response times and
        optimizing urban traffic flow? Join the ClearPath community today!
        Whether you're a developer, traffic engineer, or concerned citizen,
        together we can make a difference. Contact us to learn more about
        collaboration opportunities.
      </div>
      <div className="text-4xl font-semibold my-4">Contact Information</div>
      <div className="text-lg font-medium my-2">
        Have questions or want to learn more about ClearPath? Reach out to us
        via email, phone, or social media. We'd love to hear from you and
        discuss how we can work together to enhance emergency response in your
        city.
        <div>Email: clearpath@gmail.com</div>
        <div>Phone: +91-90090-80808</div>
        <div>Social Media:</div>
        <div className="mx-4">Twitter: @ClearPathTech</div>
        <div className="mx-4">Facebook: /ClearPathTech</div>
        <div className="mx-4">LinkedIn: /company/clearpath-technologies</div>
      </div>
    </div>
  );
};

export default Contact;
