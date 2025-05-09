import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

import profileImage from '/zack-cinquini.jpg';

export default function Sidebar() {
  return (
    <aside className="sidebar" role="complementary" aria-label="Personal information">
      <Link to="/">
        <img src={profileImage} alt="Zack Cinquini" className="profile-image" />
      </Link>
      <Link to="/" className="no-text-decoration">
        <h1>Zack Cinquini</h1>
      </Link>
      <span>Software Engineer<br/>Brooklyn, NY</span>
      <div className="social-links" aria-label="Social media links">
        <a href="mailto:isaac.cinquini@gmail.com" aria-label="Send email">
          <IoMail aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/zackcinquini" aria-label="LinkedIn profile">
          <IoLogoLinkedin aria-hidden="true" />
        </a>
        <a href="https://github.com/zack5" aria-label="GitHub profile">
          <IoLogoGithub aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}