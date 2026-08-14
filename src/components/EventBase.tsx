import { GoArrowUpRight } from "react-icons/go";
import type { ReactNode } from 'react';

import BorderGlow from './BorderGlow';

import Skill from "./Skill";

export default function EventBase({ title, description, thumbnailWidget, skills, onClick }:
  { title: string, thumbnailWidget: React.ReactNode, description?: ReactNode, skills?: string[], onClick?: () => void }) {
  return (
    
    <article className="event-base" onClick={onClick}>
      <BorderGlow xInset={-28} yInset={-25} />
      <div className="event-thumbnail">
        {thumbnailWidget}
      </div>
      <div className="event-content">
        <header className="event-title">
          <h2 id={`event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
            <GoArrowUpRight className="link-arrow" />
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
}