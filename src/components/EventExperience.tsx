import EventBase from "./EventBase";
import type { ReactNode } from 'react';

type EventExperienceProps = {
  title: string;
  description?: ReactNode;
  duration?: string;
  skills?: string[];
  onClick?: () => void;
};

export default function EventExperience(props: EventExperienceProps) {
  const { title, description, duration, skills, onClick } = props;

  return (
    <EventBase
      title={title}
      description={description}
      thumbnailWidget={duration ? <h4 className="event-duration">{duration}</h4> : null}
      skills={skills}
      onClick={onClick}
    />
  );
}