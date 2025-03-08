import Project from "./Project";

import LogoRagnarok from "./logos/LogoRagnarok";
import LogoSuperDark from "./logos/LogoSuperDark";
import LogoXDefiant from "./logos/LogoXDefiant";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <h3>Digital Games</h3>
      <Project
        name="XDefiant"
        subtitle="Ubisoft, 2024"
        logo={<LogoXDefiant />}
        description="Main point of contact for UI Engineering. Owned frontend state management, system to display 3D characters within menus, and UI for progression systems. First responder to urgent live UI issues. "
        links={[
          <a href="https://www.youtube.com/watch?v=NoNpmAzGyB8">
            <button>Trailer</button>
          </a>
        ]}
      />
      <Project
        name="God of War: Ragnarok"
        subtitle="Santa Monica Studio, 2022"
        logo={<LogoRagnarok />}
        description="Collaborated with designers and artists to implement HUD and menu elements."
        links={[
          <a href="https://www.youtube.com/watch?v=g1wr0DfV73E">
            <button>Trailer</button>
          </a>
        ]}
      />
      <h3>Board Games</h3>
      <Project
        name="Super Dark"
        subtitle="2023"
        logo={<LogoSuperDark />}
        description="Super Dark is a social deduction board game about dark money in politics. Supported all aspects of production across our five-person team, including design, playtesting, manufacturing, and fulfillment. Funded through a successful Kickstarter campaign that raised over $25,000."
        links={[
          <a href="https://www.kickstarter.com/projects/superdark/super-dark">
            <button>Kickstarter</button>
          </a>
        ]}
      />
      <h3>Web</h3>
      <Project
        name="Echoes of Wisdom UI Exploration"
        description="Prototyping and evaluating UI alternatives for The Legend of Zelds: Echoes of Wisdom."
        links={[
          <a href="https://echoes-of-wisdom-ui.netlify.app/">
            <button>Demo</button>
          </a>
        ]}
      />
      <Project
        name="PassMapper"
        description="Digital portfolio of my transit card collection."
        links={[
          <a href="https://passmapper.netlify.app/">
            <button>Demo</button>
          </a>
        ]}
      />
    </div>
  );
}