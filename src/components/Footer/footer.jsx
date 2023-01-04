import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <a className='footer_link' href="https://github.com/sokolroman">
  <FontAwesomeIcon icon={faGithub} />
</a>
<a className='footer_link' href="https://www.linkedin.com/in/romansokol1/">
  <FontAwesomeIcon icon={faLinkedin} />
</a>
<a className='footer_link' href="https://twitter.com/iamromansokol">
  <FontAwesomeIcon icon={faTwitter} />
</a>
    </footer>
  );
}

export default Footer;
