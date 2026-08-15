import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import Logo from './Logo';
import TableOfContents from './TableOfContents';

export default function Sidebar() {
  return (
    <aside className="sidebar" role="complementary" aria-label="Personal information">
      <div>
        <Logo />
        <h5 />
        <p>I bring screens to life.</p>
        <TableOfContents />
      </div>
      <div className="social-links" aria-label="Social media links">
        <a href="https://www.linkedin.com/in/zackcinquini" aria-label="LinkedIn profile">
          <IoLogoLinkedin className="social-icon" aria-hidden="true" />
        </a>
        <a href="https://github.com/zack5" aria-label="GitHub profile">
          <IoLogoGithub className="social-icon" aria-hidden="true" />
        </a>
        <a href="mailto:isaac.cinquini@gmail.com" aria-label="Send email">
          <IoMail className="social-icon" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}