import Project from "./Project";

import { Link } from "react-router-dom";

import LogoRagnarok from "./logos/LogoRagnarok";
import LogoSuperDark from "./logos/LogoSuperDark";
import LogoXDefiant from "./logos/LogoXDefiant";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="projects">
        <h3 id="digital-games">Digital Games</h3>
        <Project
          name="Fortnite"
          subtitle="Epic Games, 2025 - Present"
          description="UI Engineer on the Fortnite Player Journey team."
          links={[
            <Link key="portfolio" to="/fortnite" aria-label="View Fortnite portfolio">
              <button>Portfolio</button>
            </Link>
          ]}
        />
        <Project
          name="XDefiant"
          subtitle="Ubisoft, 2020 - 2025"
          logo={<LogoXDefiant />}
          description="Main point of contact for UI Engineering. Owned frontend state management, system to display 3D characters within menus, and UI for progression systems. First responder to urgent live UI issues. Used C++ and Ubisoft's Snowdrop engine."
          links={[
            <Link key="portfolio" to="/xdefiant" aria-label="View XDefiant portfolio">
              <button>Portfolio</button>
            </Link>,
          ]}
        />
        <Project
          name="God of War: Ragnarok"
          subtitle="Santa Monica Studio, 2019"
          logo={<LogoRagnarok />}
          description="Collaborated with designers and artists to implement HUD and menu elements. Used C++ and Lua."
          links={[
            <a key="gameplay" href="https://youtu.be/fERuzCJuuaA?si=tXIM1V63RejpnJVa" aria-label="Watch God of War: Ragnarok gameplay">
              <button>Gameplay</button>
            </a>,
          ]}
        />
        <h3 id="web-projects">Web</h3>
        <Project
          name="Personal Subway Arrivals Board"
          description="I was tired of narrowly missing trains, so I designed an app to track subway arrivals in New York City to run on a Raspberry Pi in my apartment."
          subtitle="2026"
          links={[
            <Link key="design" to="/mta-station-board-design" aria-label="View XDefiant portfolio">
              <button>UI/UX Design Journey</button>
            </Link>,
            <a key="demo" href="https://mta-station-board.netlify.app/station/629" aria-label="View MTA Station Board demo">
              <button>Demo</button>
            </a>,
          ]}
        />
        <Project
          name="Echoes of Wisdom UI Exploration"
          description="Prototyping and evaluating UI alternatives for The Legend of Zelda: Echoes of Wisdom. Made with TypeScript and React. "
          subtitle="2025"
          links={[
            <a key="demo" href="https://echoes-of-wisdom-ui.netlify.app/" aria-label="View Echoes of Wisdom UI Exploration demo">
              <button>Demo</button>
            </a>,
          ]}
        />
        <Project
          name="LetterGrams"
          description="Daily Bananagrams-like word game. Made with TypeScript and React. "
          subtitle="2025"
          links={[
            <a key="demo" href="https://lettergrams.netlify.app/" aria-label="View LetterGrams demo">
              <button>Demo</button>
            </a>,
          ]}
        />
        <Project
          name="PassMapper"
          description="Digital portfolio of my transit card collection. Made with TypeScript and React."
          subtitle="2025"
          links={[
            <a key="demo" href="https://passmapper.netlify.app/" aria-label="View PassMapper demo">
              <button>Demo</button>
            </a>,
          ]}
        />
        <h3 id="board-games">Board Games</h3>
        <Project
          name="Super Dark"
          subtitle="2020 - 2023"
          logo={<LogoSuperDark />}
          description="Super Dark is a social deduction board game about dark money in politics. I supported all aspects of production across our five-person team, including design, playtesting, manufacturing, and fulfillment. Funded through a successful Kickstarter campaign that raised over $25,000."
          links={[
            <a key="kickstarter" href="https://www.kickstarter.com/projects/superdark/super-dark" aria-label="View Super Dark Kickstarter campaign">
              <button>Kickstarter</button>
            </a>
          ]}
        />
        <h3 id="publications">Publications</h3>

        <Project
          name="Visualizing DNA folding and transcription in embryogenesis at single-cell resolution"
          subtitle="Nature 2019"
          links={[
            <a key="paper" href="https://doi.org/10.1038/s41586-019-1035-4" aria-label="Read Boettiger Lab paper">
              <button>Paper</button>
            </a>
          ]}
        />
      </div>
    </section>
  );
}