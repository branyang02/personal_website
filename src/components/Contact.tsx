import '../styles/Contact.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact Information</h3>
      <ul className="contact-list">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="mailto:jqm9ba@virginia.edu">jqm9ba@virginia.edu</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{' '}
          <a
            href="https://www.linkedin.com/in/byang02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{' '}
          <a
            href="https://github.com/branyang02"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
