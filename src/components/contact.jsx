import React from "react";

const ContactPod = ({ link, text, smallText }) => (
  <li className="contactItem">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3>{text}</h3>
      <p>{smallText}</p>
    </a>
  </li>
);

const Contact = () => (
  <ul className="contactContainer" id="Contact">
    <ContactPod
      text="Linkedin"
      link="https://www.linkedin.com/in/oliver-parkinson-a551b9166"
      smallText="Work experience"
    />
    <ContactPod
      text="Instagram"
      link="https://www.instagram.com/olliecodes/"
      smallText="Day to day"
    />
    <ContactPod
      text="Github"
      link="https://github.com/ojparkinson"
      smallText="Current projects"
    />
    <ContactPod
      text="Medium"
      link="https://medium.com/@olliepar01"
      smallText="Blog"
    />
  </ul>
);

export default Contact;
