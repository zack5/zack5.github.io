import { GoArrowUpRight } from "react-icons/go";
import EventExperience from "./EventExperience";
import EventProject from "./EventProject";
import thumbnailEchoesOfWisdom from "../assets/project-thumbnails/echoes-of-wisdom.jpg";
import thumbnailLettergrams from "../assets/project-thumbnails/lettergrams.jpg";
import thumbnailPassmapper from "../assets/project-thumbnails/passmapper.jpg";
import thumbnailSubwayArrivals from "../assets/project-thumbnails/subway-arrivals.jpg";

export default function Main() {
  return (
    <>
      <section id="about" data-toc-title="About" className="about">
        <h3>About</h3>
        <p>I'm a programmer who enjoys pointing at a screen and saying, "I made that!" Recently, I've been building interfaces for large-scale, multiplayer, cross-platform video games.</p>
        <p>Currently, I’m a UI Engineer at <a href="https://www.epicgames.com/" target="_blank" rel="noopener noreferrer">Epic Games</a>. I lead engineering efforts to improve the <a href="https://fortnite.fandom.com/wiki/Discover" target="_blank" rel="noopener noreferrer">Discover</a> system within the Fortnite main menu, partnering closely with designers and engineers to ensure we craft the smoothest experience possible for players and developers authoring content within the Fortnite ecosystem.</p>
        <p>I also enjoy hiking, singing, extolling the virtues of public transit, and finding new ways to have fun in old Pokémon games.</p>
      </section>
      <section id="experience" data-toc-title="Experience" className="events">
        <h3>Experience</h3>
        <EventExperience
          title="Epic Games - UI Engineer"
          description="UI Engineer on the Fortnite Ecosystem Experience team."
          duration="2025—Present"
          skills={["C++", "Unreal"]}
          onClick={() => window.open("https://www.epicgames.com/fortnite/en-US/home", "_blank")}
        />
        <EventExperience
          title="Ubisoft - UI Engineer"
          description="Main point of contact for UI Engineering on XDefiant. Owned frontend state management, 3D characters within menus, and progression systems UI. First responder to live issues."
          duration="2020—2025"
          skills={["C++", "Snowdrop"]}
          onClick={() => window.open("https://www.epicgames.com/fortnite/en-US/home", "_blank")}
        />
        <EventExperience
          title="Santa Monica Studio - Intern"
          description="Collaborated with designers and artists to implement HUD and menu elements for <i>God of War: Ragnarok</i>."
          duration="2019"
          skills={["C++", "Lua"]}
          onClick={() => window.open("https://www.epicgames.com/fortnite/en-US/home", "_blank")}
        />
        <a href="/Zack Cinquini 2025.pdf" aria-label="Download resume (PDF)" target="_blank" rel="noopener noreferrer">View Resume<GoArrowUpRight className="link-arrow"/></a>
      </section>
      <section id="projects" data-toc-title="Projects" className="events">
        <h3>Projects</h3>
        <EventProject
          title="Subway Arrivals Board"
          description="I was tired of narrowly missing trains, so I designed an app to track subway arrivals in New York City to run on a Raspberry Pi in my apartment."
          thumbnail={thumbnailSubwayArrivals}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://mta-station-board.netlify.app/station/629", "_blank")}
        />
        <EventProject
          title="Echoes of Wisdom UI Exploration"
          description="Prototyping and evaluating UI alternatives for <i>The Legend of Zelda: Echoes of Wisdom</i>. "
          thumbnail={thumbnailEchoesOfWisdom}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://echoes-of-wisdom-ui.netlify.app/", "_blank")}
        />
        <EventProject
          title="PassMapper"
          description="Digital portfolio of my transit card collection."
          thumbnail={thumbnailPassmapper}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://passmapper.netlify.app/", "_blank")}
        />
        <EventProject
          title="LetterGrams"
          description="Daily Bananagrams-like word game."
          thumbnail={thumbnailLettergrams}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://lettergrams.netlify.app/", "_blank")}
        />
      </section >
      {/* <section>
        <div>
          <EventExperience
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
          <EventExperience
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
          <EventExperience
            name="PassMapper"
            description="Digital portfolio of my transit card collection. Made with TypeScript and React."
            subtitle="2025"
            links={[
              <a key="demo" href="https://passmapper.netlify.app/" aria-label="View PassMapper demo">
                <button>Demo</button>
              </a>,
            ]}
          />
          <EventExperience
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
        </div>
      </section> */}
    </>
  )
}