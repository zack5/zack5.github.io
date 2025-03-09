import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

import profileImage from '/zack-cinquini.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/"><img src={profileImage} alt="Zack Cinquini" className="profile-image" /></Link>
      <Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}><h1>Zack Cinquini</h1></Link>
      <span>Software Engineer</span>
      <div className="social-links">
        <a href="mailto:isaac.cinquini@gmail.com">
          <IoMail />
        </a>
        <a href="https://www.linkedin.com/in/zackcinquini">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/zack5">
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
}