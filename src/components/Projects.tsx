import Project from "./Project";

import { Link } from "react-router-dom";

import LogoRagnarok from "./logos/LogoRagnarok";
import LogoSuperDark from "./logos/LogoSuperDark";
import LogoXDefiant from "./logos/LogoXDefiant";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        <h3>Digital Games</h3>
        <Project
          name="XDefiant"
          subtitle="Ubisoft, 2020-2025"
          logo={<LogoXDefiant />}
          description="Main point of contact for UI Engineering. Owned frontend state management, system to display 3D characters within menus, and UI for progression systems. First responder to urgent live UI issues. "
          links={[
            <Link to="/xdefiant">
              <button>Portfolio</button>
            </Link>,
            <a href="https://www.youtube.com/watch?v=NoNpmAzGyB8">
              <button>Trailer</button>
            </a>
          ]}
        />
        <Project
          name="God of War: Ragnarok"
          subtitle="Santa Monica Studio, 2019"
          logo={<LogoRagnarok />}
          description="Collaborated with designers and artists to implement HUD and menu elements."
          links={[
            <a href="https://www.youtube.com/watch?v=g1wr0DfV73E">
              <button>Trailer</button>
            </a>
          ]}
        />
        <h3>Web</h3>
        <Project
          name="Echoes of Wisdom UI Exploration"
          description="Prototyping and evaluating UI alternatives for The Legend of Zelds: Echoes of Wisdom. Made with TypeScript and React. "
          subtitle="2025"
          links={[
            <a href="https://echoes-of-wisdom-ui.netlify.app/">
              <button>Demo</button>
            </a>,
            <a href="https://github.com/zack5/echoes-of-wisdom-ui">
              <button>Code</button>
            </a>,
          ]}
        />
        <Project
          name="PassMapper"
          description="Digital portfolio of my transit card collection. Made with TypeScript and React."
          subtitle="2025"
          links={[
            <a href="https://passmapper.netlify.app/">
              <button>Demo</button>
            </a>,
            <a href="https://github.com/zack5/passmapper">
              <button>Code</button>
            </a>,
          ]}
        />
        <h3>Board Games</h3>
        <Project
          name="Super Dark"
          subtitle="2020-2023"
          logo={<LogoSuperDark />}
          description="Super Dark is a social deduction board game about dark money in politics. I supported all aspects of production across our five-person team, including design, playtesting, manufacturing, and fulfillment. Funded through a successful Kickstarter campaign that raised over $25,000."
          links={[
            <a href="https://www.kickstarter.com/projects/superdark/super-dark">
              <button>Kickstarter</button>
            </a>
          ]}
        />
        <h3>Publications</h3>

        <Project
          name="Visualizing DNA folding and transcription in embryogenesis at single-cell resolution"
          subtitle="Nature 2019"
          links={[
            <a href="https://doi.org/10.1038/s41586-019-1035-4">
              <button>Paper</button>
            </a>
          ]}
        />
      </div>
    </div>
  );
}