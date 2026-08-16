import { GoArrowUpRight } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

import BorderGlow from './BorderGlow';

import Skill from "./Skill";

type EventBaseProps = {
  title: string;
  thumbnailWidget: React.ReactNode;
  description?: ReactNode;
  skills?: string[];
  onClick?: () => void;
  to?: string; // internal navigation via react-router Link
  href?: string; // external URL — opens in new tab
};

export default function EventBase({ title, description, thumbnailWidget, skills, onClick, to, href }:
  EventBaseProps) {

  const content = (
    <article className="event-base">
      <BorderGlow xInset={-28} yInset={-25} />
      <div className="event-thumbnail">
        {thumbnailWidget}
      </div>
      <div className="event-content">
        <header className="event-title">
          <h2 id={`event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
            {href ? <GoArrowUpRight className="link-icon link-arrow" /> : <IoChatbubbleEllipsesOutline className="link-icon link-more-info" />}
          </h2>
        </header>
        {!!description && <p>{description}</p>}
        {skills && skills.length > 0 && (
          <div className="event-skills">
            {skills.map((skill : string, index: number) => (
              <div key={index} className="event-skill">
                <Skill name={skill} />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (to) {
    return (
      <Link to={to} className="no-text-decoration event-link">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-text-decoration event-link">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {content}
    </div>
  );
}