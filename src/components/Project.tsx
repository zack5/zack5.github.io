export default function Project({ name, logo, description, subtitle, links }:
  { name: string, logo?: React.ReactNode, description?: string, subtitle?: string, links?: React.ReactNode[] }) {
  return (
    <article className="project" aria-labelledby={`project-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="project-content">
        <header className="project-name">
          <h4 id={`project-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
            {!!subtitle && <em className="project-subtitle" aria-label={`Project timeframe: ${subtitle}`}>{` (${subtitle})`}</em>}
          </h4>
        </header>
        {!!description && <p>{description}</p>}
        {!!links && <nav className="project-links" aria-label="Project links">{links}</nav>}
      </div>
      {!!logo && <div className="project-logo" aria-hidden="true">
        {logo}
      </div>}
    </article>
  );
}
