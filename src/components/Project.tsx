export default function Project({ name, logo, description, subtitle, links }:
  { name: string, logo?: React.ReactNode, description?: string, subtitle?: string, links?: React.ReactNode[] }) {
  return (
    <div className="project">
      <div className="project-content">
        <span className="project-name">
          <h4>{name}{!!subtitle && <em className="project-subtitle">{` (${subtitle})`}</em>}</h4>
        </span>
        {!!description && <span>{description}</span>}
        {!!links && <div className="project-links">{links}</div>}
      </div>
      {!!logo && <div className="project-logo">
        {logo}
      </div>}
    </div>
  );
}
