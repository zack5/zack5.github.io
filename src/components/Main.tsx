import EventExperience from "./EventExperience";
import EventProject from "./EventProject";
import thumbnailEchoesOfWisdom from "../assets/project-thumbnails/echoes-of-wisdom.jpg";
import thumbnailLettergrams from "../assets/project-thumbnails/lettergrams.jpg";
import thumbnailPassmapper from "../assets/project-thumbnails/passmapper.jpg";
import thumbnailSubwayArrivals from "../assets/project-thumbnails/subway-arrivals.jpg";

export default function Main() {
  return (
    <>
      <section className="about">
        <p>I'm a programmer who loves creating organized and intuitive user  experiences. Recently, I've been building interfaces for large-scale, multiplayer,  cross-platform video games.</p>
        <p>Currently, I’m a UI Engineer at Epic Games on the Ecosystem Experience team. I lead engineering efforts to improve the Discovery system, partnering closely with designers and engineers to ensure something. Accessibility is built in from day one.</p>
        <p>In my spare time, you can usually find me hiking, singing, and finding new ways to have fun in old Pokemon games.</p>
      </section>
      <section className="events">
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
          description="Collaborated with designers and artists to implement HUD and menu elements for God of War: Ragnarok."
          duration="2019"
          skills={["C++", "Lua"]}
          onClick={() => window.open("https://www.epicgames.com/fortnite/en-US/home", "_blank")}
        />
      </section>
      <section className="events">
        <EventProject
          title="Subway Arrivals Board"
          description="I was tired of narrowly missing trains, so I designed an app to track subway arrivals in New York City to run on a Raspberry Pi in my apartment."
          thumbnail={thumbnailSubwayArrivals}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://mta-station-board.netlify.app/station/629", "_blank")}
        />
        <EventProject
          title="Echoes of Wisdom UI Exploration"
          description="Prototyping and evaluating UI alternatives for The Legend of Zelda: Echoes of Wisdom. "
          thumbnail={thumbnailEchoesOfWisdom}
          skills={["TypeScript", "React"]}
          onClick={() => window.open("https://echoes-of-wisdom-ui.netlify.app/", "_blank")}
        />
        <EventProject
          title="PassMapper"
          description="Digital portfolio of my transit card collection. Made with TypeScript and React."
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