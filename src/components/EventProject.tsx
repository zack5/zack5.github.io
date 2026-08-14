import EventBase from "./EventBase";
import type { ReactNode } from 'react';

type EventProjectProps = {
  title: string;
  description?: ReactNode;
  thumbnail?: string;
  skills?: string[];
  onClick?: () => void;
};

export default function EventProject(props: EventProjectProps) {
  const { title, description, thumbnail, skills, onClick } = props;

  return (
    <EventBase
      title={title}
      description={description}
      thumbnailWidget={thumbnail ? <img className="project-thumbnail" src={thumbnail} alt={title} /> : null}
      skills={skills}
      onClick={onClick}
    />
  );
}