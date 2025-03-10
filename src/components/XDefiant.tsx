import battlepass from "../assets/xdefiant/battlepass.png";
import challenges from "../assets/xdefiant/challenges.png";
import gameplay from "../assets/xdefiant/gameplay.gif";
import highFive from "../assets/xdefiant/highfive.gif";
import mainMenu from "../assets/xdefiant/mainmenu.gif";
import playMenu from "../assets/xdefiant/playmenu.gif";

export default function XDefiant() {
  return (
    <article className="portfolio" aria-labelledby="xdefiant-heading">
      <h2 id="xdefiant-heading">XDefiant</h2>
      <p>
        XDefiant is a free-to-play first-person shooter developped by Ubisoft. Its launch in May 2024 drew over <a href="https://gamerant.com/xdefiant-11-million-players/" aria-label="Article about XDefiant reaching 11 Million players">11 Million players</a> in the first two weeks.
      </p>
      <p>
        I was the main point of contact for UI Engineering on XDefiant. I worked primarily in C++ and Ubisoft's Snowdrop engine to ensure that all UI elements functioned as intended and were optimized for performance on PC and consoles. I led internal workshops on best practices to create modular, scalable systems that maintained our high bar for <a href="https://toronto.ubisoft.com/how-xdefiant-flipped-the-script-to-give-arabic-players-a-tailored-experience/" aria-label="Article about XDefiant's Arabic localization and accesibility">accesibility and localization</a>.
      </p>
      <p>
        My primary areas of ownership were frontend state management, 3D asset display, and UI for progression systems. I was also a first responder for urgent live UI issues.
      </p>
      <figure className="portfolio-images" role="group" aria-label="XDefiant UI screenshots and gameplay">
        <img src={mainMenu} alt="Animated view of the XDefiant Main Menu showing dynamic background effects" />
        <img src={playMenu} alt="Animated view of the XDefiant Play Menu showing game mode selection" />
        <img src={gameplay} alt="Animated gameplay footage showing HUD elements during gameplay" />
        <img src={highFive} alt="Animated celebration sequence showing players after a match" />
        <img src={battlepass} alt="Battle Pass purchase screen" />
        <img src={challenges} alt="Progression screen showing challenges to earn factions" />
      </figure>
    </article>
  )
}