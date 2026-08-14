import { GoArrowUpRight } from "react-icons/go";
import EventExperience from "./EventExperience";
import EventProject from "./EventProject";
import thumbnailEchoesOfWisdom from "../assets/project-thumbnails/echoes-of-wisdom.jpg";
import thumbnailLettergrams from "../assets/project-thumbnails/lettergrams.jpg";
import thumbnailPassmapper from "../assets/project-thumbnails/passmapper.jpg";
import thumbnailSubwayArrivals from "../assets/project-thumbnails/subway-arrivals.jpg";
import thumbnailSuperDark from "../assets/project-thumbnails/super-dark.jpg";

export default function Main() {
  return (
    <>
      <section id="about" data-toc-title="About" className="about">
        <h3>About</h3>
        <p>I'm a programmer who enjoys pointing at a screen and saying, "I made that!" Recently, I've been building interfaces for large-scale, multiplayer, cross-platform video games.</p>
        <p>After studying Computer Science at Stanford, I joined Ubisoft and Epic Games as a UI Engineer. Currently, I lead engineering efforts to improve the Discover system within the Fortnite main menu. I partner closely with designers and engineers to ensure we craft the smoothest experience possible for players and developers authoring content within the Fortnite ecosystem.</p>
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
          description={<p>Main point of contact for UI Engineering on <i>XDefiant</i>. Owned frontend state management, 3D characters within menus, and progression systems UI. First responder to live issues.</p>}
          duration="2020—2025"
          skills={["C++", "Snowdrop"]}
          onClick={() => window.open("https://www.epicgames.com/fortnite/en-US/home", "_blank")}
        />
        <EventExperience
          title="Santa Monica Studio - Intern"
          description={<p>Collaborated with designers and artists to implement HUD and menu elements for <i>God of War: Ragnarok</i>.</p>}
          duration="2019"
          skills={["C++", "Lua"]}
          onClick={() => window.open("https://youtu.be/fERuzCJuuaA?si=tXIM1V63RejpnJVa", "_blank")}
        />
        <a href="/Zack Cinquini 2025.pdf" aria-label="Download resume (PDF)" target="_blank" rel="noopener noreferrer">View Resume<GoArrowUpRight className="link-arrow"/></a>
      </section>
      <section id="projects" data-toc-title="Projects" className="events">
        <h3>Projects</h3>
        <EventProject
          title="Super Dark"
          description={<p><i>Super Dark</i> is a social deduction board game about dark money in politics. I supported all aspects of production across our five-person team, including design, playtesting, manufacturing, and fulfillment. Funded through a successful Kickstarter campaign that raised over $25,000.</p>}
          thumbnail={thumbnailSuperDark}
          skills={["Game Design", "Kickstarter", "Logistics"]}
          onClick={() => window.open("https://www.kickstarter.com/projects/superdark/super-dark", "_blank")}
        />
      <EventProject
          title="Subway Arrivals Board"
          description="I was tired of narrowly missing trains, so I designed an app to track subway arrivals in New York City to run on a Raspberry Pi in my apartment."
          thumbnail={thumbnailSubwayArrivals}
          skills={["Figma", "TypeScript", "React", "Raspberry Pi"]}
          onClick={() => window.open("https://mta-station-board.netlify.app/station/629", "_blank")}
        />
        <EventProject
          title="Echoes of Wisdom UI Redesign"
          description={<p>Prototyping and evaluating UI alternatives for a specific menu in <i>The Legend of Zelda: Echoes of Wisdom</i>.</p>}
          thumbnail={thumbnailEchoesOfWisdom}
          skills={["Figma", "TypeScript", "React"]}
          onClick={() => window.open("https://echoes-of-wisdom-ui.netlify.app/", "_blank")}
        />
        <EventProject
          title="PassMapper"
          description="Digital portfolio of my transit card collection."
          thumbnail={thumbnailPassmapper}
          skills={["Figma", "TypeScript", "React"]}
          onClick={() => window.open("https://passmapper.netlify.app/", "_blank")}
        />
        <EventProject
          title="LetterGrams"
          description="Daily Bananagrams-like word game."
          thumbnail={thumbnailLettergrams}
          skills={["Figma", "TypeScript", "React"]}
          onClick={() => window.open("https://lettergrams.netlify.app/", "_blank")}
        />
      </section >
    </>
  )
}