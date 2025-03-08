import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

import profileImage from '/zack-cinquini.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profileImage} alt="Zack Cinquini" className="profile-image" />
      <h1>Zack Cinquini</h1>
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