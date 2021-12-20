import React from "react";
import TitleSection from "./../components/about/TitleSection/TitleSection";
import ContactInfo from "../components/contact/contactInfo/ContactInfo";
import ContactForm from "../components/contact/contactform/ContactForm";

const Contact = () => {
  return (
    <div>
      <TitleSection title="Contact Us" />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
