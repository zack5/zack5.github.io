import Skill from "./Skill";

export default function EventBase({ title, description, thumbnailWidget, skills, onClick }:
  { title: string, thumbnailWidget: React.ReactNode, description?: string, skills?: string[], onClick?: () => void }) {
  return (
    <article className="event-base" onClick={onClick}>
      <div className="event-thumbnail">
        {thumbnailWidget}
      </div>
      <div className="event-content">
        <header className="event-title">
          <h2 id={`event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
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